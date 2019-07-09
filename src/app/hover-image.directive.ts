import { Directive, ElementRef, HostListener, Renderer, HostBinding, Host } from '@angular/core';

@Directive({
  selector: '[appHoverImage]'
})
export class HoverImageDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  @HostListener('mouseover') onHover() {
    if (event.target['id'] === "image") {
      this.hoverFocus(event['path'][0].src);
    }
  }

  hoverFocus(image) {
    let img = this.element.nativeElement.querySelector('.hoverDiv');
    this.renderer.setElementAttribute(img, "style", `background-image: url(${image})`);
  }

  @HostListener("mouseout") onMouseleave(){
    if (event['fromElement']['alt'] == '' || event['fromElement']['alt'] == undefined) {
      this.hoverBlur();
    }
  }

  hoverBlur(){
    let img = this.element.nativeElement.querySelector('.hoverDiv');
    this.renderer.setElementAttribute(img, "style", `display : none`);
  }
 }
