
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import  {SubirPage} from '../pages/subir/subir';

//pipes
import { PipesModule } from './../pipes/pipes.module';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC96V8e-z7__gQ7LtM3FVgay3n1ilXgaVU",
  authDomain: "gag-ac1a9.firebaseapp.com",
  databaseURL: "https://gag-ac1a9.firebaseio.com",
  projectId: "gag-ac1a9",
  storageBucket: "gag-ac1a9.appspot.com",
  messagingSenderId: "65417542523"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SubirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SubirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
