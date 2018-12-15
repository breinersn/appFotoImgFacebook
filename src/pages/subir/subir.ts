import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {
  posts: Observable<any[]>;

  constructor(private viewCtrl:ViewController, afDB: AngularFireDatabase) {
    this.posts = afDB.list('post').valueChanges();
  }

  cerra_modal(){

    this.viewCtrl.dismiss();
  }
}
