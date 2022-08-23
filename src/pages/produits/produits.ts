import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, MenuController, ModalController, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import {ProduitsService} from '../../services/produits.service'
import {produits} from '../../models/produits'
import { LoginformPage } from './produits-form/loginform/loginform';
import { SingleProduitPage } from './single-produit/single-produit';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the ProduitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produits',
  templateUrl: 'produits.html',
})
export class ProduitsPage  {
 
produitsList : produits[];
produitsSubscription : Subscription;
   
constructor(private modalCtrl: ModalController ,
            public navCtrl: NavController,
            public navParams: NavParams,
            public viewCtrl: ViewController,
            private produitsService: ProduitsService,
            private menuCtrl:MenuController,
            private toastCtrl: ToastController,
            private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.produitsSubscription = this.produitsService.produits$.subscribe(
    (produits: produits[]) => {
    this.produitsList = produits.slice();
    }
    );
    this.produitsService.emitProduits();
    }
ionViewWillEnter() {
    this.produitsList = this.produitsService.produitsList.slice();
    }
/*ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitsPage');
  }*/
onLoadProduits(index : number)
{
// this.navCtrl.push(SingleProduitPage,{produits : produits});
let modal = this.modalCtrl.create(SingleProduitPage, {index: index});
modal.present();
}

/*dismissModal() {
    this.viewCtrl.dismiss();
}
*/
onToggleMenu() {
  this.menuCtrl.open();
  }
  onNewAppareil() {
    this.navCtrl.push(LoginformPage);
    }
    ngOnDestroy() {
      this.produitsSubscription.unsubscribe();
      }
      onSaveList() {
        let loader = this.loadingCtrl.create({ content: 'Sauvegarde en cours…'
        });
        loader.present();
        this.produitsService.saveData().then(
        () => {
        loader.dismiss();
        this.toastCtrl.create({
        message: 'Données sauvegardées !',
        duration: 3000,
        position: 'bottom'
        }).present();
        },
        (error) => {
        loader.dismiss();
        this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'bottom'
        }).present();
        }
        );
      }
      onFetchList() {
        let loader = this.loadingCtrl.create({
        content: 'Récuperation en cours…'
        });
        loader.present();
        this.produitsService.retrieveData().then(
        () => {
        loader.dismiss();
        this.toastCtrl.create({
        message: 'Données récupérées !',
        duration: 3000,
        position: 'bottom'
        }).present();
        },
        (error) => {
        loader.dismiss();
        this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'bottom'
        }).present();
        }
        );
        }
       
}
