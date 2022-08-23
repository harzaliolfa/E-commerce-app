import { Component, OnInit } from '@angular/core';
import { ProduitsPage } from '../produits';
import { AlertController, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import {produits} from '../../../models/produits'
import { ProduitsService } from '../../../services/produits.service';
import { NgForm } from '@angular/forms';
import { PayementPage } from '../../payement/payement';
/**
 * Generated class for the SingleProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-produit',
  templateUrl: 'single-produit.html',
})
export class SingleProduitPage implements OnInit {
 index : number;
 produits: produits;

 constructor(public navParams: NavParams,
  public viewCtrl: ViewController,
  public produitsService: ProduitsService,
  public alertCtrl: AlertController,
  private modalCtrl : ModalController,
  private navCtrl: NavController){}

ngOnInit() {
  this.index = this.navParams.get('index');
  this.produits = this.produitsService.produitsList[this.index];
  }

  dismissModal() {
  this.viewCtrl.dismiss();
  }


  onToggleProduits() {
  this.produits.isInStock  = !this.produits.isInStock ;
 
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: '',
      buttons: [{
         text:'Annuler',
         role: 'cancel'
        },
        {
          text:'Confirmer',
           handler:()=>{
            
              //this.navCtrl.push(SingleProduitPage,{produits : produits});
              let modal = this.modalCtrl.create(PayementPage);
              modal.present();
               }
         },
      
      ]
    });
    alert.present();
  



  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
    }
    onDeleteHours() {
    this.produits.startTime = '';
    this.produits.endTime = '';
    this.dismissModal();
    }
}
