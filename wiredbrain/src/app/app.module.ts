import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';
import {IonicStorageModule} from '@ionic/storage';
import { RewardServiceProvider } from '../providers/reward-service/reward-service';
import {RewardeModalPageModule} from '../pages/rewarde-modal/rewarde-modal.module';
import{FCM} from '@ionic-native/fcm';
import { MenuServiceProvider } from '../providers/menu-service/menu-service';
import { CartServiceProvider } from '../providers/cart-service/cart-service';
import {PayPal} from '@ionic-native/paypal';

export const firebaseConfig = {
    apiKey: "AIzaSyDIPGjTZC03epmZpUpyGiyhYC8T-QR20RU",
    authDomain: "coffee-efe9c.firebaseapp.com",
    databaseURL: "https://coffee-efe9c.firebaseio.com",
    projectId: "coffee-efe9c",
    storageBucket: "coffee-efe9c.appspot.com",
    messagingSenderId: '986146780080'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    RewardeModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    RewardServiceProvider,
    FCM,
    MenuServiceProvider,
    CartServiceProvider,
    PayPal
  ]
})
export class AppModule {}
