import { Component } from '@angular/core';
import { AlertController, IonicPage, MenuController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private alertCtrl: AlertController,private menuCtrl: MenuController) {}
  onToggleLights(){
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Cette action allumera ou éteindra toutes les lumières de la maison !',
      buttons: [{
         text:'Annuler',
         role: 'cancel'
        },
        {
          text:'Confirmer',
           handler:()=>console.log('Confirmé')
         },
      
      ]
    });
    alert.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
    }
}
