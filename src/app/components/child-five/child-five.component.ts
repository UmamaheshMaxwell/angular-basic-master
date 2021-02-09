import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.css']
})
export class ChildFiveComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log(`This is constructor - Child `)
  }

  ngOnInit() {
    console.log(`This is ngOnInit - Child `)
  }

  ngOnDestroy(){
    console.log(`This is ngOnDestroy - Child `)
  }
}
