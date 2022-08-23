import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitsPage } from '../produits/produits';
import { SettingsPage } from '../settings/settings';
import {NativeStoragePage} from '../native-storage/native-storage';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  produitsPage= ProduitsPage;
  settingsPage= SettingsPage;
  nativeStoragePage=NativeStoragePage;
}
