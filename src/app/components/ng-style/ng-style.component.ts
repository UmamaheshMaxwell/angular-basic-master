import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  textColor:string ="blue";
  value = 5;
  status: string="success"

  constructor() { 

  }

  ngOnInit(): void {
  }

}
