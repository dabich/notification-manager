import {NotificationManagerTypes} from '../notification-manager-types.enum';

export interface NotificationInterface {
  id: number;
  message: string;
  type: NotificationManagerTypes;
  focused: boolean;
  duration: number;
}
