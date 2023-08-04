import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  //? ngDoCheck hook ikkaka change panninathu....
  //@Input() text = ""
  @Input() text:string[] = []
  noOfTitles = 0;
  ngOnChanges(changes: SimpleChanges): void {

   // if (!changes['text'].isFirstChange()) {

      //console.log('You are modifying original value');
      // console.log('ngOnChanges Called!', changes['text'].currentValue);
       console.log('ngOnChanges Called!');

    // }
    //property call seiyekka change akum 
    // console.log('ngOnChanges Called!',changes['text'].currentValue);

  }
ngOnInit(): void {
  console.log("ngOninit called");
  this.text.push('First Title');
  this.noOfTitles = 1;
}

ngDoCheck(): void {
  //console.log('ngDoCheck called!');
  if (this.text.length > this.noOfTitles){
      console.log('You are modifying original value');
      console.log('ngDoCheck called!');
      this.noOfTitles ++;
  }
}

ngOnDestroy(): void {
  console.log('ngOnDestroy called!');
  
}

}
