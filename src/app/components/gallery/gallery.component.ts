import { Component, OnInit } from '@angular/core';

import { HoverImageDirective } from 'src/app/hover-image.directive'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  url = "";

  constructor() { }

  ngOnInit() {
  }

}
