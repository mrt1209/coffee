import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoffeeLoggerPage } from './coffee-logger';

@NgModule({
  declarations: [
    CoffeeLoggerPage,
  ],
  imports: [
    IonicPageModule.forChild(CoffeeLoggerPage),
  ],
})
export class CoffeeLoggerPageModule {}
