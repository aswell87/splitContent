import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    let list: ('text' | 'image')[] = [];

    list.push('image');
    list.push('image');
    list.push('image');
    list.push('text');
    list.push('image');
    list.push('text');

    for (let i = 0; i < list.length; i++) {
      this.addTab(list[i], i);
      console.log('Block statement execution no.' + i);
    }
  }

  compMap = {
    text: TextComponent,
    image: ImageComponent,
  };

  addTab(mode: 'text' | 'image', index: number): void {
    var x = this.compMap[mode];
    let factory: any = this.resolver.resolveComponentFactory(x);
    let tab: ComponentRef<any> = this.vc.createComponent(factory);
    tab.instance.title = 'Component: ' + mode + ' - ' + index;
  }
}
