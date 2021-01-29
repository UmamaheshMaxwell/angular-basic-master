import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList = [
    {
      name: 'Srujana',
      email: 'srujana@ef.com',
      skills: [
        {
          skill : 'Java',
          exp: '5years'
        }
      ]
    },
    {
      name: 'Gurunag',
      email: 'guru@ef.com',
      skills: [
        {
          skill : 'C#',
          exp: '6years'
        }
      ]
    },
    {
      name: 'Harsha',
      email: 'harsha@ef.com',
      skills: [
        {
          skill : 'Python',
          exp: '4years'
        }
      ]
    },
    {
      name: 'Anand',
      email: 'anand@ef.com',
      skills: [
        {
          skill : 'NodeJs',
          exp: '3years'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
