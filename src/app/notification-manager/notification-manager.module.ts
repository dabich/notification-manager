import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationManagerComponent } from './notification-manager.component';
import { NotificationComponent } from './notification/notification.component';
import {NotificationManagerService} from './notification-manager.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NotificationManagerComponent,
  ],
  declarations: [
    NotificationManagerComponent,
    NotificationComponent
  ],
  providers: [
    NotificationManagerService
  ]
})
export class NotificationManagerModule { }
