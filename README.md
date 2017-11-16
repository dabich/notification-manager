# notification-manager

Notification manager for Angular applications.

# Getting Started

## Installation:

```bash
npm install notification-manager
```

## Imports:
```typescript
import {NgModule} from '@angular/core';
import {NotificationManagerModule} from 'notification-manager';
import {Root} from './root.component'

@NgModule({
    imports: [
        NotificationManagerModule
    ],
    declarations: [Root],
    providers: [],
    bootstrap: [Root]
})
```

## Usage:
```typescript
import {Component} from '@angular/core';
import {NotificationManagerService} from 'notification-manager';

@Component({
    selector: 'root',
    template: `
            <nm-notification-manager></nm-notification-manager>`
})

export class Root {

    constructor(private notificationManagerService: NotificationManagerService) {
        /**
           * Create notification
           *
           * @param {string} message text
           * @param {?number} notification duration in milliseconds
        */
        this.notificationManagerService.default('Your text', 7000);
        this.notificationManagerService.error('Your text', 10000);
        this.notificationManagerService.warning('Your text');
        this.notificationManagerService.success('Your text');
    }
    
}
```

### Duration
By default, the notification duration is set to 5000 milliseconds. You can set custom duration when creating a notification.

### Focus
Notification does not remove while mouse is focused on it.

### Remove
You can close notification earlier clicking by close button.

## Author
[Dmitry Parfenov](mailto:dmitryparfenov937@gmail.com)

## Licence
This project is licensed under the MIT license.
