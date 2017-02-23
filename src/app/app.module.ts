import { ScorePage } from './../pages/score/score';
import { RulesPage } from './../pages/rules/rules';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyCiCPbg4Uuk2tLssXE5jFcgbfY8tdVwrmA",
    authDomain: "definethis-5a2e8.firebaseapp.com",
    databaseURL: "https://definethis-5a2e8.firebaseio.com",
    storageBucket: "definethis-5a2e8.appspot.com",
    messagingSenderId: "520216870012"
  };
  
@NgModule({
  declarations: [
    MyApp,
    RulesPage,
    ScorePage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RulesPage,
    ScorePage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
