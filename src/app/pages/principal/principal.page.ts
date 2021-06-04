import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  private mail: any;
  token: any;
  solde: number;
  idUser: number;
  idAgence: number;
  idCompte: number;
  compte: any;
  agence: any;
  constructor(private router: Router, private service: TokenService, public navCtrl: NavController) {
  }

  ngOnInit() {
    // this.getDataOwner();
  }

  returnHome() {
    this.router.navigate(['/menu']);
  }

  deconnect() {
    this.service.removeToken('token');
    this.router.navigate(['/']);
  }

  async getDataOwner() {
    this.token = await this.service.getToken();
    this.mail = this.service.getMail(this.token);
    /*this.req.ownerUser(this.mail).subscribe(
      res => {
        this.idUser = res.id;
        this.agence = res.agence;
        this.compte = this.agence.compte;
        this.idCompte = this.compte.id;
        this.solde = this.compte.solde;
        console.log(this.solde);
      });*/
  }

  navigTo(name: string) {
    this.router.navigate(['/' + name]);
  }
}
