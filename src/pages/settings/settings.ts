import { SettingService } from './../../providers/setting-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  private settingsTime: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingService) {
    this.settingsTime = this.settingsService.timerLength;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage', this.settingsService.timerLength);
  }
  private saveChanges() {
    this.settingsService.timerLength = this.settingsTime;
    console.log(this.settingsService.timerLength)
  }

}
