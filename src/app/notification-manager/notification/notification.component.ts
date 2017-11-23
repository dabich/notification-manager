import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NotificationManagerTypes} from '../notification-manager-types.enum';
import {NotificationInterface} from './notification-interface';
import {NotificationManagerService} from '../notification-manager.service';

@Component({
  selector: 'nm-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  @Input() public notification: NotificationInterface;

  private readonly notificationType = NotificationManagerTypes;

  constructor(private notificationManagerService: NotificationManagerService) { }

  ngOnInit() {
  }

  /**
   * Set focus on current notification
   *
   * @param {boolean} focus true or false
   */
  private setFocus(focus: boolean) {
    this.notification.focused = focus;

    if (!this.notification.focused) {
      this.notificationManagerService.removeNotification(this.notification, this.getDuration());
    }
  }

  /**
   * Remove current notification
   */
  private remove() {
    this.notificationManagerService.removeNotification(this.notification);
  }

  /**
   * Get current notification duration
   *
   * @returns {number} notification duration
   */
  private getDuration() {
    return this.notificationManagerService.getNotificationDuration(this.notification);
  }
}
