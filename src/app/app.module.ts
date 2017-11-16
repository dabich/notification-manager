import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NotificationManagerModule} from './notification-manager/notification-manager.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NotificationManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
