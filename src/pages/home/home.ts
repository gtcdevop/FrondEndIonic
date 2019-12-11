import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { EscolhaImagemPage } from '../escolha-imagem/escolha-imagem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private _modalController: ModalController,
    public navCtrl: NavController) {

  }

  openModal() {
    
    let modal  = this._modalController.create(EscolhaImagemPage, {}, {
      cssClass:"customModal"
    });
    modal.present().catch(err=> {
      console.error(err);
    });
    
    
  }
}
