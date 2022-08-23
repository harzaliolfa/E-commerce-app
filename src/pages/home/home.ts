import { Component } from '@angular/core';
import { ProduitsPage } from '../produits/produits';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //constructor(public navCtrl: NavController) {} 

 // onGoToProduits(){
 //   this.navCtrl.push(ProduitsPage);
 // }
 produitsPage = ProduitsPage;
}
