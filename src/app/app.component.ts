import { Component, HostListener } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealHack';
  routeNames = [
    './award',
    '',
  ];
  index = -1;
  constructor(
    private router:Router,
  ){}
  public handleScroll(event: ScrollEvent) {
    
    // console.log('scroll occurred', event.originalEvent);
    // this.index++;
    // this.router.navigate([this.routeNames[this.index]])
    // // if (event.isReachingBottom) {
    //   console.log(`the user is reaching the bottom`);
    //   // this.router.navigate(['./contact'])

    // }
    //  if(event.isReachingTop) {
    //   console.log(`the user is reaching the top`);
    //   // this.router.navigate(['./contact'])
    //   this.router.navigate(['./award'])

    // }
    // if (event.isWindowEvent) {
    //   // console.log(event);
    //   // this.router.navigate(['./contact'])

    // }
 
  }
  // @HostListener("window:scroll", ["$event"])
  // onWindowScroll($event:Event) {
  // //In chrome and some browser scroll is given to body tag
  // let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  // console.log(document.body.scrollTop);
  // let max = document.documentElement.scrollHeight;
  // // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
  //   if(pos == max){
  //     console.log('peesfsf ssfs');
  //     this.index++;
  //     this.router.navigate([this.routeNames[this.index]])
  //     //Do your action here
  //   }
  // }
}
