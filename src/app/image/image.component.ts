import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tap',
  template: '<H3>Image {{title}}</H3>',
})
export class ImageComponent {
  @Input() title: string;
}
