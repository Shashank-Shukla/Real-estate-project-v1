/*
  - Angular provides a service that can be injected into various components using DI.
  - Singleton objects
  - Objective: to organize and share biz logic/data/fn with different components of app
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../interfaces/IProperty';

// Services are recommended to be decorated with injectable decorator.
@Injectable({
  // providedIn property tells Angular which ngModule we're registering this service
  providedIn: 'root'
  // root means app-root level: which means we need to register it in the providers array in aap.module
})
export class HousingService {

constructor(private httpClientInjector:HttpClient) { }

/*
// Making data as any type is violating the laws of TS
getAllPropertiesList(){
  return this.httpClientInjector.get('api-response-data/properties-list.json').pipe(
    map((data: any) => {
      const propertiesList: Array<IProperty> = [];
      for (const Id in data){
        console.log(data[Id]);
        if (data.hasOwnProperty(Id)){
          propertiesList.push(data[Id]);
        }
      }
      return propertiesList;
    })
  );
}
*/

getAllPropertiesList(): Observable<IProperty[]>{
  return this.httpClientInjector.get('api-response-data/properties-list.json').pipe(
    map(data => {
      const propertiesList: Array<IProperty> = [];
      for (const id in data){
        if (data.hasOwnProperty(id)){
          propertiesList.push(data[id as keyof object]);
        }
      }
      return propertiesList;
    })
  );
}

}
