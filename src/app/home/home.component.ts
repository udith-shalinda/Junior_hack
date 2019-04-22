import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation } from 'angular-animations';
declare var VANTA;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    fadeInDownOnEnterAnimation()
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //VANTA.BIRDS({ el: "#homebackground"})
    VANTA.CLOUDS({el:"#homebackground"})
  }

}
