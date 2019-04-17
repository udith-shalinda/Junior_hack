import { Component, OnInit } from '@angular/core';
import { bounceAnimation, flashAnimation, bounceInOnEnterAnimation, collapseOnLeaveAnimation, fadeInDownOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css'],
  animations:[
    bounceAnimation(),
    flashAnimation(),
    bounceInOnEnterAnimation(),
    fadeInDownOnEnterAnimation()
  ]
})
export class AwardComponent implements OnInit {
  bouncestatus=true;
  
  constructor() {
    
   }

  ngOnInit() {
    this.bouncestatus =false;
    
  }
  animate() {
    console.log("called");
    this.bouncestatus = true;
    setTimeout(() => {
      this.bouncestatus = true;
      this.bouncestatus = !this.bouncestatus;
    }, 1);
    this.bouncestatus = true;
  }

}
