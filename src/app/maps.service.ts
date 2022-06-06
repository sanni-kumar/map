import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface location {
  latitude: string;
  longitude: string;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }
  getLocation() {
    return this.http.get<location>('https://restcountries.com/v3.1/all/check?access_key=AIzaSyC4e5ZxcqXIs3t5QKS0b5xfaTb3CAyA5LA')

  }

}

