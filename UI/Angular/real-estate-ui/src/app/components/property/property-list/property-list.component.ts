import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  maxVal: number = 40000
  minVal: number = 1000
  properties: Array<any> = [
    {
      "Id": 1,
      "Type": "House",
      "Name": "Ash House",
      "Price": Math.floor(Math.random() * ((this.maxVal - this.minVal + 1) + this.minVal))
    },
    {
      "Id": 2,
      "Type": "House",
      "Name": "Kabuli House",
      "Price": Math.floor(Math.random() * ((this.maxVal - this.minVal + 1) + this.minVal))
    },
    {
      "Id": 3,
      "Type": "Villa",
      "Name": "Romeo Villa",
      "Price": Math.floor(Math.random() * ((this.maxVal - this.minVal + 1) + this.minVal))
    },
    {
      "Id": 4,
      "Type": "Hostel",
      "Name": "Ash PG/Hostel",
      "Price": Math.floor(Math.random() * ((this.maxVal - this.minVal + 1) + this.minVal))
    },
    {
      "Id": 5,
      "Type": "Hostel",
      "Name": "Burlyn Hostels",
      "Price": Math.floor(Math.random() * ((this.maxVal - this.minVal + 1) + this.minVal))
    },
    {
      "Id": 6,
      "Type": "Villa",
      "Name": "Auburn Villa",
      "Price": Math.floor(Math.random() * ((this.maxVal - this.minVal + 1) + this.minVal))
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
