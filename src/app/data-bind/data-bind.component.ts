import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent {
//?component  la irunthu data view ikku pokuthu...
//!BINDING
 firstName = 'Vishnu'
 lastName = 'Rathan'

//!PROPERTY-BINDING
//title = 'Learning Angular'
isDisabled = false;

//! TWO-WAY-BINDING
 name = 'vishnu'

//!STRING INTERPOLATION
title = 'TRANSFORMERS'

getTitle(){
  return this.title
}
getMax(first:number, second:number){
return Math.max(first, second)
}

color = 'red'

}
