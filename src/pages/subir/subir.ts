import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {
  posts: Observable<any[]>;

  titulo: string;
  fotoCamara: string;

  constructor(private viewCtrl:ViewController, afDB: AngularFireDatabase,private camera:Camera) {
    this.posts = afDB.list('post').valueChanges();
  }

  cerra_modal(){

    this.viewCtrl.dismiss();
  }

  mostrar_camara(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.fotoCamara = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("ERROR EN CAMARA", JSON.stringify(err));
    });

  }
}
