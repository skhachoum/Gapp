import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { GalleryProvider } from "../../providers/gallery/gallery";
import { DetailImagePage } from "../detail-image/detail-image";

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
  public images: any = {hits:[]};
  public keyWord: any;
  public per_page: number = 10;
  public currentPage: number = 1;
  public total_pages: number;
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
              public _galleryProvider: GalleryProvider,
              private _loadingCtrl : LoadingController) {
                this.category = this.categories[0];
                this.orientation = this.orientations[0];
                this.doSearch();
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

  remteErrorPrompt(details : any) {
    this.keyWord = "";
    let alert = this._alertCtrl.create({
        title: 'Erreur de serveur',
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
  onSearch(){

    this.images.hits = [];

    this.doSearch();
  }
  doSearch(){
    let loading = this._loadingCtrl.create({
      content:'Veuillz patientez...'
    });

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
    
    loading.present();
    this._galleryProvider.search("&q="+(this.keyWord?this.keyWord:''),
                          "&orientaion="+this.orientation.value,
                          (this.category.value=='nil')?'':"&cat="+this.category.value,
                          colors?"&colors="+colors:'',
                          this.width?"&min_width="+this.width:'',
                          this.height?"&min_height="+this.height:'',
                          "&per_page="+this.per_page,
                          "&page="+this.currentPage)
                          .subscribe(result => {
                                                  this.total_pages = result.totalHits / this.per_page;
                                                  if(this.total_pages % this.per_page != 0) ++this.total_pages;
                                                  for(let element of result.hits){
                                                      this.images.hits.push(element)
                                                  }
                                                  if(this.images.hits.length == 0){
                                                    this.remteErrorPrompt("Aucun résultat n'est trouvé!!");
                                                  }
                                                  
                                                  loading.dismiss();
                                                },
                                      error => {
                                                  loading.dismiss();
                                                  this.remteErrorPrompt(error);
                                                }
                          );
  }
  doInfinite(e : any){
    if(this.currentPage < this.total_pages){
        ++this.currentPage;
        this.doSearch();
    }
    e.complete();
  }
  goToDetail(img : any){
    this.navCtrl.push(DetailImagePage,{image:img, title:(this.keyWord?""+this.keyWord:"Hazard") });

  }
  

}
