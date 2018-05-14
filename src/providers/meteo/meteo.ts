import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppCustomConfig } from '../../app/app.customConfig';

/*
  Generated class for the MeteoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MeteoProvider Provider');
  }
  search(keyWord:any, mode: string): any{
    return this.http.get(AppCustomConfig.WEATHER_API_ENDPOINT
                        +mode
                        +AppCustomConfig.WEATHER_API_KEY
                        +keyWord
                        +AppCustomConfig.WEATHER_API_CONFIG)
                        .map(response => {
                                          return response;
                                        },
                             error => {
                               return error;
                             }
                        );
  }

}
