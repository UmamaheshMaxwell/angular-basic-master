import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildThreeComponent } from '../child-three/child-three.component';


@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  styleUrls: ['./parent-three.component.css']
})
export class ParentThreeComponent implements OnInit {

  title: string = "Parent using @ViewChild"
  count = 0;
  @ViewChild(ChildThreeComponent) child!: ChildThreeComponent;

  constructor() { }

  ngOnInit() {
    console.log(`ngOnInit : ChildThreeComponent : `, this.child)
  }

  increment(){
    this.child.increment()
    this.count = this.child.count
  }

  decrement(){
    this.child.decrement();
    this.count = this.child.count
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit : ChildThreeComponent : `, this.child)
  }
}
