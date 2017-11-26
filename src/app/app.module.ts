import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Plugins
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Clipboard } from "@ionic-native/clipboard";

// Providers
import { SecretGeneratorProvider } from '../providers/secret-generator/secret-generator';

// Components
import { ValidationMessageComponent } from "../components/validation-message/validation-message";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ValidationMessageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SecretGeneratorProvider
  ]
})
export class AppModule {}
