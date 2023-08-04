import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 //?Use a @Output Attribute directive to sharing data parent to child
@Input('carsInput') cars:string[] = [];

carDataUpdated(carsData:string[]){
this.cars = carsData
}

}
