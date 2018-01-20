import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { TaskPage } from '../task/task';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  Task() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.navCtrl.push(TaskPage);
    this.viewCtrl.dismiss();
 
  
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
