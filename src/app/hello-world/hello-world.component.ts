import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  // firstName = "vishnu";
  // color = "red"


  // clickCount = 0;
  // clickCount2 = 0;

  // clickMe() {
  //   this.clickCount++;
  // }

// event la irunthu data assign panni view pannuthal
// value = ""
// value1 = ""
// handleInput(event:any){
// this.value = (event.target as HTMLInputElement).value
// }
  
title = "List of Users";
users = [
  {
    "name": "Alice",
    "age": 25,
    "occupation": "Teacher",
    "location": "Chicago"
  },
  {
    "name": "Bob",
    "age": 32,
    "occupation": "Software Engineer",
    "location": "San Francisco"
  },
  {
    "name": "Eva",
    "age": 40,
    "occupation": "Doctor",
    "location": "London"
  },
  {
    "name": "Michael",
    "age": 28,
    "occupation": "Writer",
    "location": "Paris"
  },
  {
    "name": "Sophia",
    "age": 22,
    "occupation": "Student",
    "location": "Sydney"
  }
  
  
]


}