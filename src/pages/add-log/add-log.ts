import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLogPage');
  }

  save(): void {
 
    let log = {
      // title: this.title,
      notes: this.notes,
      rating: this.rating
    };
 
    this.viewCtrl.dismiss(log);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
