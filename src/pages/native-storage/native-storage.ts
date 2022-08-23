import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, MenuController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-native-storage',
  templateUrl: 'native-storage.html',
})
export class NativeStoragePage {
  name: string;
  surname: string;
  years: number;
  constructor(public navCtrl: NavController, 
             public navParams: NavParams,
             private nativeStorage:NativeStorage,
              public alertCtrl: AlertController,
              private menuCtrl : MenuController
             ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NativeStoragePage');
  }
  public storeIdentity(): void {
    this.nativeStorage.setItem('my-identity-card', {
    name: this.name,
    surname: this.surname,
    years: this.years
    })
    .then(
    () => {
    let alert = this.alertCtrl.create({
    title: 'Card saved !',
    subTitle: 'It\'s saved my friend !!',
    buttons: ['Nice !']
    });
    alert.present();
    },
    error => console.error('Error storing item', error)
    );
    }
    public getMyName(): void {
    this.nativeStorage.getItem('my-identity-card')
    .then(
    data => {
    this.name = data.name;
    this.surname = data.surname;
    this.years = data.years;
    },
    error => console.error(error)
    );

  }
  onToggleMenu() {
    
    this.menuCtrl.open();
    }
}
