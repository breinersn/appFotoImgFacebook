import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {
  posts: Observable<any[]>;

  titulo: string;
  fotoCamara: string;

  constructor(private viewCtrl:ViewController, afDB: AngularFireDatabase,
    private camera:Camera, private imagePicker: ImagePicker) {
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
     this.fotoCamara = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("ERROR EN CAMARA", JSON.stringify(err));
    });
  }

  mostrar_imagen(){

    const options: ImagePickerOptions = {

      quality: 70,
      outputType: 1,
      maximumImagesCount: 1
    }

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          this.fotoCamara = 'data:image/jpeg;base64,' + results[i];
      }
    }, (err) => {
      // Handle error
     console.log("ERROR EN CAMARA", JSON.stringify(err));
    });
  }
}
