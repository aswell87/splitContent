import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ImageComponent, TextComponent],
  bootstrap: [AppComponent],
  entryComponents: [ImageComponent, TextComponent],
})
export class AppModule {}
