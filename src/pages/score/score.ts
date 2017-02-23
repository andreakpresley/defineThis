import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-score',
  templateUrl: 'score.html'
})
export class ScorePage {
  public numberOfPlayers: number = 5;
  public playersArray: Array<any> = [];
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.numberOfPlayersChanged();
  }
  private numberOfPlayersChanged() {
    let newNumberOfPlayers: number = this.numberOfPlayers;
    console.log('changed');
    if (this.numberOfPlayers > this.playersArray.length) {
      newNumberOfPlayers = this.numberOfPlayers - this.playersArray.length;

      for (let i=0; i<newNumberOfPlayers; i++) {
        this.playersArray.push({ name: "" , score: 0});
      }
    } else if (this.numberOfPlayers < this.playersArray.length) {
      newNumberOfPlayers = this.playersArray.length - this.numberOfPlayers;

      for (let i=0; i<newNumberOfPlayers; i++) {
        this.playersArray.pop();
      }
    }
    
  }
  private addPoints(amount, playerIndex) {
    this.playersArray[playerIndex].score += amount;
  }

  private removePoint(playerIndex) {
    this.playersArray[playerIndex].score -= 1;
  }

}
