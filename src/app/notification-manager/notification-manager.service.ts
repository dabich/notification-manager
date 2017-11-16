import { Injectable } from '@angular/core';
import {NotificationManagerTypes} from './notification-manager-types.enum';
import {NotificationInterface} from './notification/notification-interface';

@Injectable()
export class NotificationManagerService {

  private readonly notificationType = NotificationManagerTypes;
  notifications: NotificationInterface[];
  readonly duration = 5000;

  constructor() {
    this.notifications = [];
  }

  /**
   * Default notification used white background
   *
   * @param {string} message message text
   * @param {number} duration notification duration
   */
  default(message: string, duration?: number) {
    const notification = this.getNotification(message, this.notificationType.Default, duration || this.duration);
    this.createNotification(notification, duration);
  }

  /**
   * Error notification used red background
   *
   * @param {string} message message text
   * @param {number} duration notification duration
   */
  error(message: string, duration?: number) {
    const notification = this.getNotification(message, this.notificationType.Error, duration || this.duration);
    this.createNotification(notification, duration);
  }

  /**
   * Success notification used green background
   *
   * @param {string} message message text
   * @param {number} duration notification duration
   */
  success(message: string, duration?: number) {
    const notification = this.getNotification(message, this.notificationType.Success, duration || this.duration);
    this.createNotification(notification, duration);
  }

  /**
   * Warning notification used yellow background
   *
   * @param {string} message message text
   * @param {number} duration notification duration
   */
  warning(message: string, duration?: number) {
    const notification = this.getNotification(message, this.notificationType.Warning, duration || this.duration);
    this.createNotification(notification, duration);
  }

  /**
   * Get notification object
   *
   * @param {string} message message text
   * @param {NotificationManagerTypes} type notification type
   * @param {number} duration notification duration
   * @returns {NotificationInterface} notification
   */
  private getNotification(message: string, type: NotificationManagerTypes, duration?: number): NotificationInterface {
    return {
      id: this.notifications.length,
      message: message,
      type: type,
      focused: false,
      duration: duration || this.duration
    };
  }

  /**
   * Add new notification to the notifications list
   *
   * @param {NotificationInterface} notification
   * @param {number} duration notification duration
   */
  private createNotification(notification: NotificationInterface, duration?: number) {
    this.notifications.push(notification);
    this.removeNotification(notification, duration || this.duration);
  }

  /**
   * Remove notification from the notifications list
   *
   * @param {NotificationInterface} notification
   * @param {number} duration duration before removing
   */
  removeNotification(notification: NotificationInterface, duration?: number) {
    setTimeout(() => {
      const index = this.notifications.indexOf(notification);

      if (index < 0) {
        return;
      }

      // do not remove notification if the user is focused
      if (this.notifications[index].focused && duration) {
        return;
      }

      this.notifications.splice(index, 1);
    }, duration || 0);
  }

  /**
   * Get notification duration
   *
   * @param {NotificationInterface} notification
   * @returns {number} notification duration
   */
  getNotificationDuration(notification: NotificationInterface) {
    return notification.duration || this.duration;
  }
}
