import { TestBed, inject } from '@angular/core/testing';

import { NotificationManagerService } from './notification-manager.service';

describe('NotificationManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationManagerService]
    });
  });

  it('should be created', inject([NotificationManagerService], (service: NotificationManagerService) => {
    expect(service).toBeTruthy();
  }));
});
