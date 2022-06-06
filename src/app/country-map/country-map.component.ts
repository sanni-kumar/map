import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CountrydataService } from '../countrydata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.css']
})
export class CountryMapComponent implements OnInit {
  isTrue: boolean = true;
  isToggle: boolean = true;
  data: any;
  cvalue: any;
  as: any;
  i: any;
  my: any;
  isCheck: boolean = true;
  countryName: any = [];
  latitude: any = '';
  longitude: any = '';
  country: any;
  indiaIndex: any;
  cutValue: any;
  lat:any;
  lot:any;
  
  // countryDetails: FormGroup | any;



  constructor(private cdata: CountrydataService) { }

  ngOnInit(): void {
    this.cdata.getpost().subscribe((result) => {
      // console.log(result);
      this.data = result;
      
      console.log(this.data);
      this.data.forEach((element: { name: { common: any; }; }) => {
        this.countryName.push(element.name.common);
      })
      this.indiaIndex = this.countryName.indexOf('India')
      this.cutValue = this.countryName.splice(this.indiaIndex, 1);
      this.countryName.sort();
      // this.countryName.unshift(this.cutValue);
      this.countryName.unshift("India");

    })
if(!navigator.geolocation){
console.log("geolocation is not supported");
}
// navigator.geolocation.getCurrentPosition((position)=>{
//   console.log(`lat:${position.coords.latitude} , lot:${position.coords.longitude}`)
// })
  }
  displayCountry() {
    // this.cvalue = document.getElementById("country1");
    this.isTrue = true
    this.as = this.country;
    console.log(this.as);
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lat=position.coords.latitude 
       this.lot=position.coords.longitude
    
    if(this.as == "India"){
      this.latitude=this.lat;
      this.longitude=this.lot;
    }
  })
    for (let i = 0; i <= this.data.length; i++) {
      if (this.data[i].name.common == this.as) {
        // console.log(this.data[i].maps.googleMaps);
        // let my = document.getElementById("yourMap")?.innerHTML;
        this.my = this.data[i].maps.googleMaps;
        this.latitude = this.data[i].latlng[0];
        this.longitude = this.data[i].latlng[1];
        console.log(this.latitude);
        console.log(this.longitude);
      }
    }
  

  }

  showData() {
    this.isTrue = false;
    this.isToggle = false
  }
  clearDetails(formData: NgForm) {
    formData.reset();
    this.latitude = '';
    this.longitude = '';
    this.isTrue = true;
    this.isToggle = true;
  }

}
