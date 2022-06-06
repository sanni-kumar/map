import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReplayDataService {
url:any = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http:HttpClient) { }
  getpost(){
    return this.http.get(this.url);
  }
}
