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
      message : msg,
      spinner : spin,  // "bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined
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
