import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = [
                {id: 1, name: 'johngalt', email:'johngalt@ef.com'},
                {id: 2, name: 'scott', email:'scott@ef.com'},
                {id: 3, name: 'adam', email:'adam@ef.com'},
                {id: 4, name: 'tuan', email:'tuan@ef.com'},
              ]


  constructor() { }

  ngOnInit(): void {
  }

}
