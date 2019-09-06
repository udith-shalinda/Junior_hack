import { Component } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealHack';
  constructor(
    private router:Router,
  ){}
  public handleScroll(event: ScrollEvent) {
    // console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom) {
      this.router.navigate(['./award'])
      console.log(`the user is reaching the bottom`);
    }
    if (event.isReachingTop) {
      console.log(`the user is reaching the top`);
      // this.router.navigate(['./contact'])

    }
    if (event.isWindowEvent) {
      console.log(`This event is fired on Window not on an element.`);
    }
 
  }
}
