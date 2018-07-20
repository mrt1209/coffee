import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
// import { BrewType } from '../../objects/brewType'

/**
 * Generated class for the AddLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-log',
  templateUrl: 'add-log.html',
})
export class AddLogPage {

  // title: any;
  notes: any;
  rating: any;
  user_id: any;
  // user = {} as User;
  // brewType: BrewType = { name: '', espressoType: '' };
  brewType: any;
  espressoType: any;
  bean_id: any;
  bean: any;
  date: any;
  shop_id: any;
  shop: any;
  barista_id: any;
  barista: any;
  espresso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLogPage');
  }

  save(): void {

    let log = {
      notes: this.notes,
      rating: this.rating,
      user_id: this.user_id,
      brewType: this.brewType,
      espressoType: this.espressoType,
      bean_id: this.bean_id,
      bean: this.bean,
      date: this.date,
      shop_id: this.shop_id,
      shop: this.shop,
      barista_id: this.barista_id,
      barista: this.barista
    };

    this.viewCtrl.dismiss(log);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
