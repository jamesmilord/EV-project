import { CarService } from './../../app/services/car.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


/**
 * Generated class for the InputDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input-data',
  templateUrl: 'input-data.html',
})
export class InputDataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private carService: CarService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputDataPage');
    console.log()
  }

  presentLoading(ma, mo, ye, lo?) {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.carService.getPrices(ma.value, mo.value, ye.value, lo.value)
    //loader.present();
  }



}
