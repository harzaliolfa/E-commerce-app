import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, MenuController, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/AuthService';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
  mode :string;
  authForm : FormGroup;
  errorMessage: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthService,
              private menuCtrl:MenuController,
              private formBuilder: FormBuilder )
              {}
ngOnInit() {
this.mode = this.navParams.get('mode');
this.initForm();
}
    onToggleMenu() {
      this.menuCtrl.open();
      }
      initForm() {
        this.authForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
        });
        }
        onSubmitForm() {
          const email = this.authForm.get('email').value;
          const password = this.authForm.get('password').value;
          if (this.mode === 'new') {
          this.authService.signUpUser(email, password).then(
          () => {
          this.navCtrl.setRoot(TabsPage);
          },
          (error) => {
          this.errorMessage = error;
          }
          );
          } else if (this.mode === 'connect') {
          this.authService.signInUser(email, password).then(
          () => {
          this.navCtrl.setRoot(TabsPage);
          },
          (error) => {
          this.errorMessage = error;
          }
          );
          }
          }
}
