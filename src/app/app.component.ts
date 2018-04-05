import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from "../pages/gallery/gallery";
import { PlacesPage } from "../pages/places/places";
import { MeteoPage } from "../pages/meteo/meteo";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  menus = [
    {title:'Home', component:HomePage, icon: 'home'},
    {title:'Galerie', component:GalleryPage, icon: 'image'},
    {title:'Adresse', component:PlacesPage, icon: 'globe'},
    {title:'Météo', component:MeteoPage, icon: 'bolt'},
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onPage(page: any){
    this.rootPage= page.component;
  }
}

