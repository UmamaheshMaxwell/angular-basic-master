import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChildLifeCycleComponent } from '../child-life-cycle/child-life-cycle.component';

@Component({
  selector: 'app-parent-life-cycle',
  templateUrl: './parent-life-cycle.component.html',
  styleUrls: ['./parent-life-cycle.component.css']
})
export class ParentLifeCycleComponent implements OnInit, OnChanges {

  @Input() message: string =''
  @ViewChild(ChildLifeCycleComponent) child!: ChildLifeCycleComponent;
  constructor() { }

  ngOnInit() {
    console.log(this.child)
    console.log('ngOnInit hook of parent component')
  }

  ngOnChanges(){
    console.log('ngOnChanges hook of parent component')
  }
}
