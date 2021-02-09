import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-life-cycle',
  templateUrl: './child-life-cycle.component.html',
  styleUrls: ['./child-life-cycle.component.css']
})
export class ChildLifeCycleComponent implements OnInit, OnChanges {

  @Input() message:string= '';

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit hook of child component')
  }

  ngOnChanges(){
    console.log('ngOnChanges hook of child component')
  }

}
