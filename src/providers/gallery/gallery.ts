import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppCustomConfig } from '../../app/app.customConfig';

import 'rxjs/add/operator/map';
/*
  Generated class for the GalleryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GalleryProvider {

  constructor(public http: HttpClient,) {
    
  }

  search(keyWord:any, orientation?:any, category?:any, colors?:any, min_width?:any, min_height?:any,per_page?:any, page?:any): any{
    return this.http.get(AppCustomConfig.PIXABAY_API_ENDPOINT
                        +AppCustomConfig.PIXABAY_API_KEY
                        +keyWord
                        +orientation
                        +category
                        +colors
                        +min_width
                        +min_height
                        +per_page
                        +page
                        +AppCustomConfig.PIXABAY_API_CONFIG)
                        .map(response => {
                                          return response;
                                        },
                             error => {
                               return error;
                             }
                        );
  }

}
