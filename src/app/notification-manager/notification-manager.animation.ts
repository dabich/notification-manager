import {trigger, state, animate, style, transition} from '@angular/animations';
import {AnimationEntryMetadata} from '@angular/core';

export const displayNotification: AnimationEntryMetadata = [
  trigger('moveBottomNotification', [
    transition(':enter', [
      style({
        transform: 'translateY(-50%)',
        opacity: 0
      }),
      animate('0.2s linear', style({
        transform: 'translateY(0)',
        opacity: '*'
      }))
    ]),
    transition(':leave', [
      style({
        height: '*',
        opacity: '*'
      }),
      animate('0.2s linear', style({
        height: 0,
        opacity: 0
      }))
    ])
  ]),
  trigger('fadeOutNotification', [
    transition(':leave', [
      style({opacity: '*'}),
      animate('0.2s linear', style({opacity: 0}))
    ])
  ]),
];

