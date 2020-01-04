import { trigger, animate, transition, style, state } from '@angular/animations';

export const mapDrawerAnim =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('changeDivSize', [
      state('initial', style({
        height: '0px'
      })),
      state('final', style({
        height: '330px'
      })),
      state('finalReport', style({
        height: '200px'
      })),
      transition('initial=>final', animate('250ms ease-out')),
      transition('initial=>finalReport', animate('250ms ease-out')),
      transition('final=>initial', animate('120ms ease-in')),
      transition('finalReport=>initial', animate('120ms ease-in'))
    ]);