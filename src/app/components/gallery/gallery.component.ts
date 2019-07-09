import { Component, OnInit } from '@angular/core';

import { HoverImageDirective } from 'src/app/hover-image.directive'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  url = "";
  slideindex = 1;

  constructor() { }

  ngOnInit() {
    this.showSlides(this.slideindex);
  }
  
  openModal(){
    document.getElementById('myModal').style.display= "block";
  }

  closeModal(){
    document.getElementById('myModal').style.display= "none";
  }

// Next/previous controls
 plusSlides(n) {
  this.showSlides(this.slideindex += n);
}

// Thumbnail image controls
currentSlide(n) {
  this.slideindex= n;
  this.showSlides(this.slideindex = n);
}
  
showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {this.slideindex = 1}
    if (n < 1) {this.slideindex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i]['style'].display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideindex-1]["style"].display = "block";
    dots[this.slideindex-1].className += " active";
  }
}
