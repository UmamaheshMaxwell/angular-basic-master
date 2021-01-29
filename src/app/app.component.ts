import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'Mr.';
   firstName = 'Scott'
   lastName = 'Desatnick'
   fullName ='Tuan Bui'
   text = 'Welcome to Angular'
   isDisabled = false;
   url ="https://cli.angular.io/"
   target="_blank"
   counter=0;
   email="uma@ef.com"

   constructor(){
     console.log(this.fullName)
   }

   getName(){
    console.log(this.fullName)
     this.fullName = 'Adam Colson'
     console.log(this.fullName)
   }

   clickMe(){
    this.counter ++;
   }

   getEmail(){
    this.email = 'srujana@abc.com'
   }
}
