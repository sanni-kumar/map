import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-newmap',
  templateUrl: './newmap.component.html',
  styleUrls: ['./newmap.component.css']
})
export class NewmapComponent implements OnInit {
lat:string = '';
lng:string = '';
location:any;
  constructor(private map:MapsService) { }

  ngOnInit(): void {
    this.map.getLocation().subscribe(data=>{
console.log(data);
this.lat=data.latitude;
this.lng=data.longitude;
console.log(this.lat);
    })
  }

}
