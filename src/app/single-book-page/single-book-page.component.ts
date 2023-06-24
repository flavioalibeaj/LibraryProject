import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-single-book-page',
  templateUrl: './single-book-page.component.html',
  styleUrls: ['./single-book-page.component.scss'],
  animations: [
    trigger('flipAnimation', [
      state('front', style({ transform: 'rotateY(0)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front => back', animate('500ms ease-out')),
      transition('back => front', animate('500ms ease-out')),
    ]),
  ],
})
export class SingleBookPageComponent {
  flipState: string = 'front';

  flip() {
    this.flipState = this.flipState === 'front' ? 'back' : 'front';
  }
}
