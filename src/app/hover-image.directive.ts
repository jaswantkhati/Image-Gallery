import { Directive, ElementRef, HostListener, Renderer, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHoverImage]'
})
export class HoverImageDirective {

  constructor(private element :ElementRef, renderer :Renderer) {
   }

   @HostBinding('style.border') border: string;

   @HostListener('mouseover') onMouseEnter() {
    this.border = "1px solid black"
    console.log(this.border);
    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border= null;
  } 

}
