import { Injectable }           from '@angular/core';
import { SlideComponent }  from './slide.component';
import { SlideItem } from './slide-item';

@Injectable()
export class SlideService {
  getSlides() {
    return [
      new SlideItem(SlideComponent, { id: 1, name: 'Bombasto', body: 'Brave as they come'}),
      new SlideItem(SlideComponent, { id: 2, name: 'Dr IQ', body: 'Smart as they come'}),
      new SlideItem(SlideComponent, { id: 3, name: 'Hiring for several positions', body: 'Submit your resume today!'}),
      new SlideItem(SlideComponent, { id: 4, name: 'Openings in all departments', body: 'Apply today'}),
    ];
  }
}
