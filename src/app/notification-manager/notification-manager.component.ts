import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NotificationManagerService} from './notification-manager.service';
import {displayNotification} from './notification-manager.animation';
import {NotificationInterface} from './notification/notification-interface';

@Component({
  selector:      'nm-notification-manager',
  templateUrl:   './notification-manager.component.html',
  styleUrls:     ['./notification-manager.component.scss'],
  animations: [displayNotification],
  encapsulation: ViewEncapsulation.None
})
export class NotificationManagerComponent implements OnInit {

  constructor(private notificationManagerService: NotificationManagerService) { }

  ngOnInit() {
  }

  /**
   * Get the notifications list
   *
   * @returns {NotificationInterface[]} notifications
   */
  getNotifications(): NotificationInterface[] {
    return this.notificationManagerService.notifications;
  }
}
