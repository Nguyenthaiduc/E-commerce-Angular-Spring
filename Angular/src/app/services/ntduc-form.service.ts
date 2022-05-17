import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NtducFormService {

  private countriesUrl = 'http://localhost:8080/api/countries';
  private stateUrl = 'http://localhost:8080/api/states';


  constructor(private httpClient : HttpClient) { }

  getCreditCardMonths(startMonth: number): Observable<number[]> {

    let data: number[] = [];

    //build an array for "Month" dropdown list
    //-start at current month and loop until

    for(let theMonth = startMonth; theMonth <=12 ; theMonth++){
      data.push(theMonth)
    }
    return of(data)
  }


  getCreditCardYear() : Observable<number[]>{

    let data : number[] = []

    //build array for "Year" downlist list
    // start an current year and next 10 year

    const startYear : number = new Date().getFullYear();
    const endYear : number = startYear + 10

    for(let theYear = startYear; theYear<= endYear; theYear++){
      data.push(theYear);
    }
    return of(data);
  }
}
