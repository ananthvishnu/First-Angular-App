import { Component,  EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
//? @Output Directive
@Output() carsAdded:EventEmitter<string[]> = new EventEmitter

//?  @Input & @Output Attribute Directive Examples
cars:string[] = []
carName = '';

addCar(){
  this.cars.push(this.carName)
  this.carName = ""
  console.log(this.cars);
  this.carsAdded.emit(this.cars)
}


}
