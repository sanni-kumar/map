import { GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('search')
  public searchElementRef!: ElementRef;
 zoom :any;
 lattitude:any;
longtitude:any;
latlongs:any = []; 
latlong:any = {};
  searchControl!: FormControl;


  constructor(private MapsAPILoader:MapsAPILoader , private NgZone:NgZone) { }

  ngOnInit(): void {
    this.zoom=8;
    this.lattitude=39.8282;
    this.longtitude=-98.5795;
    this.searchControl=new FormControl();
    this.MapsAPILoader.load().then(()=>{
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement , {
        types:[],
        componentRestrictions: {'country' : 'IN'}
      });
      autocomplete.addListener('place_changed' , ()=>{
        this.NgZone.run(()=>{
          const place: google.maps.places.PlaceResult=autocomplete.getPlace();
          if(place.geometry === undefined || place.geometry === null){
            return;
          }
          const latlong = {
            lattitude:place.geometry.location?.lat,
            longtitude:place.geometry.location?.lng
          };
          this.latlongs.push(latlong);
          this.searchControl.reset();
        })
      })
    })
  }
private setCurrentPosition(){
  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lattitude=position.coords.latitude;
      this.longtitude = position.coords.longitude;
      this.zoom=8;
    });
  }
}
}