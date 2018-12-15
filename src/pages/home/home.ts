import { SubirPage } from './../subir/subir';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modalCtrl:ModalController) {

  }

  irPageSubir(){

    let modal = this.modalCtrl.create(SubirPage);
    modal.present();
  }

}
