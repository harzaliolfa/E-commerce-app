import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthPage} from '../pages/auth/auth'
import * as firebase from 'firebase';
import {NativeStoragePage} from '../pages/native-storage/native-storage';
import { TabsPage } from '../pages/tabs/tabs';
import {OptionsPage} from '../pages/options/options'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage:any= AuthPage;
  NativeStorage: any= NativeStoragePage
   isAuth = false;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform, 
    statusBar: StatusBar,
     splashScreen: SplashScreen,
      private menuCtrl: MenuController) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
    apiKey: "AIzaSyDt0dkUS1j296xHwuIwWV68S2aT6MD6jZs",
    authDomain: "merchic-4d3ac.firebaseapp.com",
    projectId: "merchic-4d3ac",
    storageBucket: "merchic-4d3ac.appspot.com",
    messagingSenderId: "863057311423",
    appId: "1:863057311423:web:e4ffae57f75421d5cd780a",
    measurementId: "G-W630ED3HYV",
    databaseURL: "https://merchic-4d3ac-default-rtdb.europe-west1.firebasedatabase.app/"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(
          (user) => {
          if (user) {
          this.isAuth = true;
          this.content.setRoot(TabsPage);
          } else {
          this.isAuth = false;
          this.content.setRoot(AuthPage, {mode: 'connect'});
          }
          }
          );
    });
  }
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
    }
    onDisconnect() {
      firebase.auth().signOut();
      this.menuCtrl.close();
      }


}

