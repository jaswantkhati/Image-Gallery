import { Directive, ElementRef, Renderer,HostListener } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective {

  constructor(private el: ElementRef,private renderer:Renderer) { }

  @HostListener('document:keydown', ['$event']) onkeypress(e){
    if(e.key == "Escape"){
      document.getElementById("myModal").style.display= "none";
    }
    if(e.key =="ArrowRight"){
     this.plusSlides(1)
    }
    if(e.key =="ArrowLeft"){
      this.plusSlides(-1)
     }
  }
  slideIndex = 1;

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i]['style'].display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1]["style"].display = "block";
    dots[this.slideIndex-1].className += " active";
  }

}
