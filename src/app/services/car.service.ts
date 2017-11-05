
import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';4


@Injectable()
export class CarService {
    http: any;
    apiKey: String;
    endPoint: String;
    radius: String;
    latitude: String = '38.58431244';
    longitude: String = '-121.4956055';
    //distance: String;
    fuelType: String = 'reg';
    obj:any;


    constructor(http: Http){
        this.http = http;
        this.apiKey = 'tozypp5oqi';
        //this.endPoint = 'http://devapi.mygasfeed.com/stations/radius/'+this.latitude+'/'+this.longitude+'/10/'+this.fuelType+'/price/'+this.apiKey+'.json';
        this.endPoint = '//api.mygasfeed.com/stations/radius/38.58431244/-121.4956055/5/reg/price/tozypp5oqi.json';
    }

    getPrices(ma, mo, ye, lo?){
        /*if(lo){
            this.latitude = ""//method to call gps
            this.longitude = ""//call gps
        }else{
         return this.http.get(this.endPoint)
        .map(res => res.json);
        }*/

        console.log("here");
        return  this.http.get(this.endPoint)
        .do((res : Response ) => console.log(res.json())
        .map((res : Response ) => res.json())
        .catch(error => console.log(error));
    
    }
}