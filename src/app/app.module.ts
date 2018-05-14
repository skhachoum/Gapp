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
import { DetailImagePage } from "../pages/detail-image/detail-image";
import { GalleryProvider } from '../providers/gallery/gallery';
import { MeteoProvider } from '../providers/meteo/meteo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage
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
    PlacesPage,
    DetailImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GalleryProvider,
    MeteoProvider
  ]
})
export class AppModule {}
