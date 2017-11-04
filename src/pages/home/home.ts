import { InputDataPage } from '../input-data/input-data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slideData = [{ image: "assets/imgs/electric-cars1.jpg" },{ image: "assets/imgs/electric-car2.jpg" },{ image: "assets/imgs/electric-cars3.jpg" }]

  constructor(public navCtrl: NavController) {

  }


  startApp(){
    this.navCtrl.push(InputDataPage);
  }



}
