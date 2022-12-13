import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/IProperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  maxVal: number = 40000
  minVal: number = 1000
  /*
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
  */
  properties: Array<IProperty> = [];

  // constructor(private httpClientInjector:HttpClient) {    // Dependency Injection
  //   //
  // }

  constructor(private housingService:HousingService) {  }

  // Before continuing, any folder that we add outside "app" folder we need to add in angular.json > "assest" also.
  ngOnInit(): void {
    /*
      The HttpClient.Get method returns an Observable, hence we need to subscribe to it.
      Observables aren't executed unless we subscribe to it.
    */
    // this.httpClientInjector.get('api-response-data/properties-list.json').subscribe(data => {
    //   // this.properties = data;
    //   console.log(data);
    // },
    // error =>{
    //   console.error(error);
    // }
    // );

    // WHATIF other components also need the properties data, INSTEAD of calling httpclient here, let's use it as a service
    this.housingService.getAllPropertiesList().subscribe(data => {
          this.properties = data;
          console.log(data);
        },
        error =>{
          console.error(error);
        }
      );
  }

}
