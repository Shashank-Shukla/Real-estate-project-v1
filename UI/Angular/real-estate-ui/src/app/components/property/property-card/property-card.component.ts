import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property! : IProperty;

  // Property: any = {
  //   "Id": 1,
  //   "Type": "House",
  //   "Name": "Ash Villa",
  //   "Price": 123
  // }

  constructor() {
    // Initializing property
    // || set ! infront of variable to let compiler know it'll have values at runtime
    // || set "strictPropertyInitialization": false under "compilerOptions" in tsconfig.json file
    // this.property = {
    //     Id: 0,
    //     Type: "",
    //     Name: "",
    //     Price: 0
    //   }
  }

  ngOnInit(): void {
  }

}
