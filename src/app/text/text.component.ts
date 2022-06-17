import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-component',
  template: '<H2>Text {{title}}</H2>',
})
export class TextComponent {
  @Input() title: string;
}
