import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NavController } from 'ionic-angular';

interface Word  {
  word: string,
  definition: string
};

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public word: Word;
  private seconds: number = 90;
  private timer;

  constructor(public navCtrl: NavController, private firebase: AngularFire) {  }

  ionViewDidLoad() {
    this.getNewWord();
  }

  private getWord(number) {
    let url = '/'+number
    this.firebase.database.object(url).subscribe(word => {
      this.word = word;
    })
  }

  public getNewWord() {
    let number = Math.floor(Math.random() * 19);
    this.getWord(number);
  }

  private startTimer() {
    this.seconds = 90;
    this.countdownTimer();
    
  }

  private countdownTimer() {    
    this.seconds = this.seconds - 1;
    if (this.seconds > 0) {
      this.timer = setTimeout(() => this.countdownTimer(), 1000);
    } else {
      console.log('timmer over');
    }
  }

  private stopTimer() {
    clearTimeout(this.timer);
  }


}
