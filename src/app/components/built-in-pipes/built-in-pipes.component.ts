import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  title:string = 'Date Pipes'
  toDate: Date = new Date();

  titleCase: string = 'Uppercase and Lowercase pipes'
  message: string = "Welcome to Angular"
  
  titleSlice: string = "Slice pipe"
  messageSlice: string = "This is a slice pipe and will be sliced"

  titleDecimal: string = "Decimal Pipe"
  decimalValue: number = 9542.14
  pi = 3.14845845848589589;

  titleCurrency: string = "Currency Pipe"
  currency: number = 175.2345;

  titlePercentage: string = "Percentage Pipe"
  percentageValue: number = .7414;

  constructor() { }

  ngOnInit(): void {
  }

}
