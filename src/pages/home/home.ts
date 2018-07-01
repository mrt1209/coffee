import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddLogPage } from '../add-log/add-log';
import { Logger } from '../../providers/logger/logger';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logs:any;

  constructor(public nav: NavController, public logService: Logger, public modalCtrl: ModalController) {
 
  }

  ionViewDidLoad(){
 
    this.logService.getLogs().then((data) => {
      console.log(data);
      this.logs = data;
    });
 
  }

  addLog(){

    let modal = this.modalCtrl.create(AddLogPage);
 
    modal.onDidDismiss(log => {
      if(log){
        this.logs.push(log);
        this.logService.createReview(log); 
      }
    });
 
    modal.present();
 
  }

  deleteLog(log){
 
    //Remove locally
      let index = this.logs.indexOf(log);
 
      if(index > -1){
        this.logs.splice(index, 1);
      }  
 
    //Remove from database
    this.logService.deleteReview(log._id);
  }

}

