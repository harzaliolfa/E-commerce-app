import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProduitsPage } from '../pages/produits/produits';
import { SingleProduitPage } from '../pages/produits/single-produit/single-produit';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import {ProduitsService } from '../services/produits.service';
import { LoginformPage } from '../pages/produits/produits-form/loginform/loginform';
import {AuthService} from '../services/AuthService'
import { OptionsPage } from '../pages/options/options';
import { AuthPage } from '../pages/auth/auth'; 
import {Camera} from '@ionic-native/camera';
import { PayementPage } from '../pages/payement/payement';

import { NativeStoragePage } from '../pages/native-storage/native-storage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProduitsPage,
    SingleProduitPage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    LoginformPage,
    AuthPage,
    NativeStoragePage,
    PayementPage

    
    
   
   
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProduitsPage,
    SingleProduitPage,
    SettingsPage,
    TabsPage,
    OptionsPage,
    LoginformPage,
    AuthPage,
    NativeStoragePage,
    PayementPage
    
   

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProduitsService,
    AuthService,
    NativeStoragePage ,

  ]
})
export class AppModule {}


export class FooService {}