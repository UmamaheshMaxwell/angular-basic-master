import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title = 'Component Communication';
  counter=5;
  message = 'Hey This is from parent';

  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter ++;
  }

  decrement(){
    this.counter --;
  }

}
