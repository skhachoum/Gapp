import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from "../pages/gallery/gallery";
import { MeteoPage } from "../pages/meteo/meteo";
import { PlacesPage } from "../pages/places/places";
import { GalleryProvider } from '../providers/gallery/gallery';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GalleryProvider
  ]
})
export class AppModule {}
