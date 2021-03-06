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
  private defaultTimer: number = 120;
  private seconds: number = this.defaultTimer;
  private timer;
  private timerState: string = "start"

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
    this.seconds = this.defaultTimer;
    this.timerState = "Restart";
    this.countdownTimer();
    
  }

  private countdownTimer() {    
    this.seconds = this.seconds - 1;
    if (this.timerState === 'Restart') {
      clearTimeout(this.timer);
    }
    if (this.seconds > 0) {
      this.timer = setTimeout(() => this.countdownTimer(), 1000);
    } else {
      // this.timerState = "Start";
      console.log('timmer over');
    }
  }

  private stopTimer() {
    this.timerState = "Start";
    clearTimeout(this.timer);
  }


}
