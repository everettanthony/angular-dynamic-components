import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { SlideDirective } from './components/slide/slide.directive';
import { SlideItem }      from './components/slide/slide-item';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-learning-module',
  template: `<div class="learning-module">
                <h3>Module</h3>
                <ng-template slide-host></ng-template>
              </div>`
})
export class ModuleComponent implements OnInit, OnDestroy {
  @Input() slides: SlideItem[];
  currentAdIndex = -1;
  @ViewChild(SlideDirective) slideHost: SlideDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getSlides();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.slides.length;
    let slideItem = this.slides[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(slideItem.component);

    let viewContainerRef = this.slideHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseComponent>componentRef.instance).data = slideItem.data;
  }

  getSlides() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
