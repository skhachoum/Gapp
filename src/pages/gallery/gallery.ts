import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  public orientation:any;
  public orientations = [
    {id:1, value: "all", label: "Tout"},
    {id:2, value: "horizontal", label: "Horizontal"},
    {id:3, value: "vertical", label: "vertical"}
  ];

  public category:any;
  public categories = [
    {id:1, value: "nil", label: "Tous"},
    {id:2, value: "business", label: "Affaires/Finance"},
    {id:3, value: "food", label: "Alimentation/Boisson"},
    {id:4, value: "animals", label: "Animaux"},
    {id:5, value: "buildings", label: "Architecture/Bâtiments"},
    {id:6, value: "backgrounds", label: "Arrières plans/Textures"},
    {id:7, value: "fashion", label: "Beauté/Mode"},
    {id:8, value: "industry", label: "Industrie/Artisanat"},
    {id:9, value: "computer", label: "Informatique/Communication"},
    {id:10, value: "places", label: "Lieux/Monuments"},
    {id:11, value: "music", label: "Musique"},
    {id:12, value: "nature", label: "Nature/Paysages"},
    {id:11, value: "people", label: "Personnes"},
    {id:12, value: "religion", label: "Religion"},
    {id:11, value: "health", label: "Santé/Médical"},
    {id:12, value: "science", label: "Science/Technologie"},
    {id:11, value: "sports", label: "Sports"},
    {id:12, value: "transportation", label: "Transport/Trafic"},
    {id:12, value: "travel", label: "Voyages/Vacances"},
    {id:11, value: "education", label: "Éducation"},
    {id:12, value: "feelings", label: "Émotions"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
