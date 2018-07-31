import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact = {
    name:'me',
    email:'soukaina@gmail.com',
    photo:'assets/imgs/logo.png'
  }
  constructor(public navCtrl: NavController) {

  }

}
