import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { ModuleComponent }      from './module.component';
import { SlideDirective }       from './components/slide/slide.directive';
import { SlideService }         from './components/slide/slide.service';
import { SlideComponent }       from './components/slide/slide.component';

@NgModule({
  imports: [ BrowserModule ],
  providers: [SlideService],
  declarations: [ AppComponent,
                  ModuleComponent,
                  SlideDirective,
                  SlideComponent ],
  entryComponents: [ SlideComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

