import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform, IonicPage, NavParams} from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';

declare var google: any;
let service = new google.maps.places.PlacesService(this.map);

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
  @ViewChild('map') mapElement: ElementRef;

  map:any;
  latLng:any;
  markers:any;
  mapOptions:any;  
  isKM:any=500;
  isType:any="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private ngZone: NgZone, private geolocation : Geolocation) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
    this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            
        
          this.mapOptions = {
            center: this.latLng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }   

    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

        }, (err) => {
          alert('err '+err);
        });

      }
      
  nearbyPlace(){
    // this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isKM,
              types: [this.isType]
            }, (results, status) => {
                this.callback(results, status);
            });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  createMarker(place){
    var placeLoc = place;
    let currentmarker = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        icon: 'assets/imgs/marker.png'
    });
    this.markers = currentmarker;

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(currentmarker, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, currentmarker);
      });
    });
  }

}
