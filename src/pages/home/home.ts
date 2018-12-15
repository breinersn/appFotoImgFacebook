import { SubirPage } from './../subir/subir';
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: Observable<any[]>;

  constructor(private modalCtrl:ModalController, afDB: AngularFireDatabase) {

    this.posts = afDB.list('post').valueChanges();
  }


  irPageSubir(){

    let modal = this.modalCtrl.create(SubirPage);
    modal.present();
  }

}
