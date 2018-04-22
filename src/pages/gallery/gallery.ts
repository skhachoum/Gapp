import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GalleryProvider } from "../../providers/gallery/gallery";

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
  public images: any = [];
  public keyWord: any;
  public orientation: any;
  public orientations = [
    {value: "all", label: "Tout"},
    {value: "horizontal", label: "Horizontal"},
    {value: "vertical", label: "vertical"}
  ];

  public category: any;
  public categories = [
    {value: "nil", label: "Tous"},
    {value: "business", label: "Affaires/Finance"},
    {value: "food", label: "Alimentation/Boisson"},
    {value: "animals", label: "Animaux"},
    {value: "buildings", label: "Architecture/Bâtiments"},
    {value: "backgrounds", label: "Arrières plans/Textures"},
    {value: "fashion", label: "Beauté/Mode"},
    {value: "industry", label: "Industrie/Artisanat"},
    {value: "computer", label: "Informatique/Communication"},
    {value: "places", label: "Lieux/Monuments"},
    {value: "music", label: "Musique"},
    {value: "nature", label: "Nature/Paysages"},
    {value: "people", label: "Personnes"},
    {value: "religion", label: "Religion"},
    {value: "health", label: "Santé/Médical"},
    {value: "science", label: "Science/Technologie"},
    {value: "sports", label: "Sports"},
    {value: "transportation", label: "Transport/Trafic"},
    {value: "travel", label: "Voyages/Vacances"},
    {value: "education", label: "Éducation"},
    {value: "feelings", label: "Émotions"}
  ];
  public color: any;
  public colors =[
    {value: "transparent", label: "Transparent"},
    {value: "grayscale", label: "Noir et blanc"},
    {value: "red", label: "Rouge"},
    {value: "orange", label: "Oronge"},
    {value: "yellow", label: "Jaune"},
    {value: "green", label: "Vert"},
    {value: "turquoise", label: "Turquoit"},
    {value: "blue", label: "Bleu"},
    {value: "lilac", label: "Lilas"},
    {value: "pink", label: "Rose"},
    {value: "white", label: "Blanc"},
    {value: "gray", label: "Gris"},
    {value: "black", label: "Noir"},
    {value: "brown", label: "Marron"},

  ];
  public width: number;
  public height: number;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _alertCtrl: AlertController,
              public _galleryProvider: GalleryProvider) {
                this.category = this.categories[0];
                this.orientation = this.orientations[0];
  }

  ionViewDidLoad() {
  }
  orientationCompare(a:{value:string,label:string},b:{value:string,label:string}){
    if(a.value === b.value){
      return true;
    }
    return false;
  }
  categoryCompare(a:{value:string,label:string},b:{value:string,label:string}){
    if(a.value === b.value){
      return true;
    }
    return false;
  }
  colorCompare(a:{value:string,label:string},b:{value:string,label:string}){
    if(a.value === b.value){
      return true;
    }
    return false;
  }
  onOrientationChange(e: any){
    console.log("onOrientationChange");
    console.log(this.orientation);
  }
  onCategoryChange(e: any){
  }
  onColorChange(e: any){
  }

  sizePrompt() {
    let alert = this._alertCtrl.create({
      title: 'Plus grand que <h6>(Largeur*Hauteur px)</h6>',
      inputs: [
        {
          name: 'width',
          placeholder: 'Largeur',
          type: 'number'
        },
        {
          name: 'height',
          placeholder: 'Hauteur',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Allons-y',
          handler: data => {
            this.height = data.height;
            this.width = data.width;
          }
        }
      ]
    });
    alert.present();
  }
  search(){
    this.images = [];
    let colors="";
    if(this.color){
      let index = 0;
      for(let color of this.color){
        index++;
        colors+=color.value;
        if(index != this.color.length){
          colors+="&colors=";
        }
      }
    }
    this._galleryProvider.search("&q="+(this.keyWord?this.keyWord:''),
                          "&orientaion="+this.orientation.value,
                          (this.category.value=='nil')?'':"&cat="+this.category.value,
                          colors?"&colors="+colors:'',
                          this.width?"&min_width="+this.width:'',
                          this.height?"&min_height="+this.height:'')
                          .subscribe(result => {
                            this.images = result;
                          });
  }
  

}
