import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-image',
  templateUrl: 'detail-image.html',
})
export class DetailImagePage {
  public img : any;
  public title : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _viewCtrl: ViewController) {
    this.img =  this.navParams.data.image;
    this.title = this.navParams.data.title;
  }


  ionViewDidLoad() {
    this._viewCtrl.setBackButtonText('');
  }

}
