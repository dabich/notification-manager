import { Component } from '@angular/core';
import {NotificationManagerService} from './notification-manager/notification-manager.service';

@Component({
  selector: 'nm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private notificationManagerService: NotificationManagerService) {
    this.notificationManagerService.success('Notification manager works');
  }

}
