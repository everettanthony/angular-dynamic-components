import { Component, OnInit } from '@angular/core';

import { SlideService }  from './components/slide/slide.service';
import { SlideItem }     from './components/slide/slide-item';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-learning-module [slides]="slides"></app-learning-module>
    </div>
  `
})
export class AppComponent implements OnInit {
  slides: SlideItem[];

  constructor(private slideService: SlideService) {}

  ngOnInit() {
    this.slides = this.slideService.getSlides();
  }
}

