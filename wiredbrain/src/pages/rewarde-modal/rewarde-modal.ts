import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RewardeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rewarde-modal',
  templateUrl: 'rewarde-modal.html',
})
export class RewardeModalPage {
  displayParam:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController) {
      this.displayParam = navParams.get('rewardParam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardeModalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
