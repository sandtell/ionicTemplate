import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  async show(msg, spin) {
    const loading = await  this.loadingCtrl.create({
      // duration: 10000,
      // message : msg,
      message : `<img src="assets/loading.gif" class="img-align" /> <br/> <div class='ion-text-center'>${msg}</div> `,
      spinner : null,  // "bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined
      cssClass: 'custom-class custom-loading',
      
      // cssClass: 'custom-loader-class',   // Write CSS in global.css
      // translucent: true,
      // mode : 'ios'

    });
    loading.present();
  }

  hide() {
    try {
      this.loadingCtrl.dismiss();
      // this.loader.dismiss();
    } catch (error) {
      console.log(error);
     }
  }
  
}
