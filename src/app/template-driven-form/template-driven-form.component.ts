import { Component,OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
countryList:Country[] = [
  new Country('1', 'india'),
  new Country('2', 'USA'),
  new Country('3', 'China'),
]



contact!: Contact;

ngOnInit(): void {
this.contact = {
  firstName:'',
  lastName:'',
  email:'',
  gender:'',
  isMarried:false,
  country:'',
  address: {city:'',street:'',pincode:''}
  }
}

onSubmit(form:NgForm){
  console.log(form.value);
  
}
}

class Country {
id:string;
name:string;

constructor(id:string,name:string){
  this.id = id;
  this.name = name;
}
}

class Contact {
  firstName!:string;
  lastName!:string;
  email!:string;
  gender!:string;
  isMarried!:boolean;
  country!:string;
  address!: {
    city:string;
    street:string;
    pincode:string;
  }
}