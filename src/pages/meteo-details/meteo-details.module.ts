import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeteoDetailsPage } from './meteo-details';

@NgModule({
  declarations: [
    MeteoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MeteoDetailsPage),
  ],
})
export class MeteoDetailsPageModule {}
