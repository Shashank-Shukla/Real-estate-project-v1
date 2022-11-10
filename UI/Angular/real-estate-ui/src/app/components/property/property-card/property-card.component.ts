import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property : any

  // Property: any = {
  //   "Id": 1,
  //   "Type": "House",
  //   "Name": "Ash Villa",
  //   "Price": 123
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
