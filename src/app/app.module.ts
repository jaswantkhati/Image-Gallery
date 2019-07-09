import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HoverImageDirective } from './hover-image.directive';
import { LightBoxDirective } from './components/gallery/light-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HoverImageDirective,
    LightBoxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
