import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-five',
  templateUrl: './parent-five.component.html',
  styleUrls: ['./parent-five.component.css']
})
export class ParentFiveComponent implements OnInit {

  displayChild = true;

  constructor() { 
    console.log(`This is constructor - Parent `)
  }

  ngOnInit() {
    console.log(`This is ngOnInit - Parent `)
  }

  ngOnDestroy(){
    console.log(`This is ngOnDestroy - Parent `)
  }

  toggle(){
    this.displayChild = !this.displayChild;
  }

}
