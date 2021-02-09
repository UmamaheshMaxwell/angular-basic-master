import {Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit, 
                                          OnChanges, 
                                          DoCheck, 
                                          AfterContentInit, 
                                          AfterContentChecked,
                                          AfterViewInit, 
                                          AfterViewChecked,
                                          OnDestroy
                                          {

  @Input() message: string =''
  @Input() customer!: Customer;
  changeLog: string[] = [];

  oldCustomer:Customer = new Customer();
  DoCheckCount = 0;

  constructor() { }

  // ngOnInit() {
  //   console.log(`This is ngOnInit`)
  //   this.oldCustomer = Object.assign({}, this.customer);
  // }

  // ngOnChanges(changes: SimpleChanges){
  //     console.log(`onChange`)
  //     console.log(JSON.stringify(changes))

  //     for(const propName in changes){
  //       const change =changes[propName];
  //       const to = JSON.stringify(change.currentValue)
  //       const from = JSON.stringify(change.previousValue)
  //       const changelog = `${propName} : changed from ${from} to ${to}`
  //       this.changeLog.push(changelog);
  //     }
  // }

  // ngDoCheck(){
  //   console.log('ngDoCheck is fired')
  //   this.DoCheckCount ++;
  //   if(this.oldCustomer.name !== this.customer.name || 
  //     this.oldCustomer.code !== this.customer.code) {
  //       const to =JSON.stringify(this.customer)
  //       const from = JSON.stringify(this.oldCustomer)
  //       const changelog = `Docheck.customer : changed from ${from} to ${to}`
  //       this.changeLog.push(changelog)
  //       this.oldCustomer = Object.assign({}, this.customer)
  //     }
  // }

  ngOnInit() {
    console.log(`This is ngOnInit - Child`)
  }
  ngOnChanges(){
    console.log(`This is ngOnChanges - Child`)
  }
  ngDoCheck(){
    console.log(`This is ngDoCheck - Child`)
  }
  ngAfterContentInit(){
    console.log(`This is ngAfterContentInit - Child`)
  }
  ngAfterContentChecked(){
    console.log(`This is ngAfterContentChecked - Child`)
  }
  ngAfterViewInit(){
    console.log(`This is ngAfterViewInit - Child`)
  }
  ngAfterViewChecked(){
    console.log(`This is ngAfterViewChecked - Child`)
  }
  ngOnDestroy(){
    console.log(`This is ngOnDestroy - Child`)
  }

}
