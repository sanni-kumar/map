import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})

export class ComponentOneComponent implements OnInit {
  public dt='sanni';
  public data=" ";
  constructor() {
    
   }

  ngOnInit(): void {
  }
  public display(){
    console.log("hello" + this.dt);
  }
}
