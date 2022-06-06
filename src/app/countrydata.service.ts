import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {
  url:any = 'https://restcountries.com/v3.1/all';
  constructor(private http:HttpClient) { }
  getpost(){
    return this.http.get(this.url);
  }
}
