import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-parent-four',
  templateUrl: './parent-four.component.html',
  styleUrls: ['./parent-four.component.css']
})
export class ParentFourComponent implements OnInit, 
                                            OnChanges, 
                                            DoCheck, 
                                            AfterContentInit, 
                                            AfterContentChecked,
                                            AfterViewInit, 
                                            AfterViewChecked,
                                            OnDestroy
                                            {

  message: string ='';
  customer: Customer = new Customer();
  code: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
    console.log(`This is ngOnInit - Parent`)
  }
  ngOnChanges(){
    console.log(`This is ngOnChanges - Parent`)
  }
  ngDoCheck(){
    console.log(`This is ngDoCheck - Parent`)
  }
  ngAfterContentInit(){
    console.log(`This is ngAfterContentInit - Parent`)
  }
  ngAfterContentChecked(){
    console.log(`This is ngAfterContentChecked - Parent`)
  }
  ngAfterViewInit(){
    console.log(`This is ngAfterViewInit - Parent`)
  }
  ngAfterViewChecked(){
    console.log(`This is ngAfterViewChecked - Parent`)
  }
  ngOnDestroy(){
    console.log(`This is ngOnDestroy - Parent`)
  }

  updateCustomer(){
    this.customer = new Customer();
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

}
