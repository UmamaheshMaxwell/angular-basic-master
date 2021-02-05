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
  @ViewChild(ChildThreeComponent) child: ChildThreeComponent = new ChildThreeComponent();

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.child.increment()
  }

  decrement(){
    this.child.decrement();
  }

}
