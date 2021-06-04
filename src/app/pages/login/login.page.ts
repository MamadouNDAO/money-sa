import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private role: any;
  loading: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private service: TokenService,
    public loadingCtrl: LoadingController,
    public router: Router
  ) { }

  get username() {
    return this.singin.get('username');
  }
  get password() {
    return this.singin.get('password');
  }

  singin: FormGroup;

  public errorMessage = {
    username: [
      {type: 'required', message: 'Un Email est obligatoire.'},
      {type: 'pattern', message: 'Veuillez entrer un email valide.'}
    ],
    password: [
      {type: 'required', message: 'Mot de passe obligatoire.'}
    ]
  };
  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.singin = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-z0-9.-]+.[a-zA-Z]{2,4}$')] ],
      password: ['', Validators.required],
    });
  }
  async loadingAnim() {
    this.loading = await this.loadingCtrl.create({
      message: 'Connexion en cours...',
    });
    return await this.loading.present();
  }
  logForm(){
    this.loadingAnim();
    const val = this.singin.value;
    this.authService.connect(val).subscribe(
      async response => {
        this.service.saveToken('token', response.token);
        this.role = this.service.getRole(response.token);
        await this.router.navigate(['menu']);
        this.loading.dismiss();
      },
      error => {
        this.loading.dismiss();
      }
    );
  }

}
