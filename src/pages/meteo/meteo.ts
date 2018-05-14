import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { MeteoProvider } from "../../providers/meteo/meteo";

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  meteo: any;
  keyWord: string;
  defaultKeyWord: string;
  currentDate: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _meteoProvider: MeteoProvider,
              public _alertCtrl: AlertController,
              private _loadingCtrl : LoadingController) {
      this.defaultKeyWord = "casablanca";
      this.currentDate = new Date();
  }

  ionViewDidLoad() {
    this.doSearch();
  }
  doSearch(){
    let loading = this._loadingCtrl.create({
      content:'Veuillz patientez...'
    });
    this._meteoProvider.search("&q="+(this.keyWord?this.keyWord:this.defaultKeyWord),"weather")
                        .subscribe(result => {
                                    this.meteo = result;
                                    console.log(this.meteo);
                                    loading.dismiss();
                                  }, error =>  {
                                    loading.dismiss();
                                    this.remteErrorPrompt("Une erreur s'est produite, veuillez réssayer");
                                  })
  }

  remteErrorPrompt(details : any) {
    this.keyWord = "";
    let alert = this._alertCtrl.create({
        title: 'Erreur',
        subTitle: details,
        buttons: [{
                    text: 'Ok',
                    handler: () => {
                      this.doSearch();
                    }
                  },
                ]
      });
      alert.present();
  }

}
