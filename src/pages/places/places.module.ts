import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesPage } from './places';
import { Geolocation } from '@ionic-native/geolocation'; 

@NgModule({
  declarations: [
    PlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesPage),
  ],
  providers: [
    Geolocation
  ]
})
export class PlacesPageModule {}
