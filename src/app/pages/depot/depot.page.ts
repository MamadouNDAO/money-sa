import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IonSlides} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
  isEmettor = false;
  isDestinator = false;
  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidePerView: 1,
    speed: 10
  };
  public emetForm: FormGroup;
  public destiForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
   /* this.initEmitForm();
    this.initDestiForm();*/
  }

  initEmitForm(){
    this.emetForm = new FormGroup({
      montant: new FormControl('', Validators.required),
      clientDepot: new FormGroup({
        cni: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required),
        telephone: new FormControl('', Validators.required),
      }),
      clientRetrait: new FormGroup({})
    });
  }
  initDestiForm() {
    this.destiForm = new FormGroup({
      nom: new FormControl(),
      telephone: new FormControl('', Validators.required)
    });
  }
  saveDepot() {
    /*this.emetForm.patchValue({
      clientRetrait: this.destiForm.value
    });
    const val = this.emetForm.value;
    console.log(val);*/
  }
  returnHome() {
    this.router.navigate(['/host/principal']);
  }
  async segmentChanged(ev: any){
    if (this.segment === 1){
      await this.selectedSlide.slidePrev();
    }
    if (this.segment === 0){
      this.initDestiForm();
      await this.selectedSlide.slideNext();
    }
  }

  async slideShanged(slides: any) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    });
  }
}
