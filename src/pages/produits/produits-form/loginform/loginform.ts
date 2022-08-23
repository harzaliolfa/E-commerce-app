import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the LoginformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginform',
  templateUrl: 'loginform.html',
})
export class LoginformPage {
  loginForm : FormGroup;
  image = '';

  constructor(private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public camera: Camera) {
  }
  ngOnInit() {
    this.initForm();
    }
  initForm() {
    this.loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: this.formBuilder.array([])
    });
    }
    getDescriptionArray() {
      return this.loginForm.get('description') as FormArray;
      }
async addPhoto(source: string) {
        if (source === 'camera') {
        console.log('camera');
        const cameraPhoto = await this.openCamera();
        this.image = 'data:image/jpg;base64,' + cameraPhoto;
        } else {
        console.log('library');
        const libraryImage = await this.openLibrary();
        this.image = 'data:image/jpg;base64,' + libraryImage;
        }
        }
async openCamera() {
          const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          targetWidth: 500,
          targetHeight: 500,
          sourceType: this.camera.PictureSourceType.CAMERA
          };
          return await this.camera.getPicture(options);
          }
  
          async openLibrary() {
            const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 500,
            targetHeight: 500,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return await this.camera.getPicture(options);
            } 
 
}
