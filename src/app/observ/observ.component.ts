import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css']
})

export class ObservComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    this.findLength()
  }
  findLength() {
    let tableShow = document.querySelectorAll('table');
    let tableRow = document.querySelectorAll('tr');
    let tableHeader = document.querySelectorAll('th');
    let tableData = document.querySelectorAll('td');
    let tableLen = tableShow.length;
    console.log("Total Table is " + tableShow.length);
    console.log("Total Table Row is " + tableRow.length);
    console.log("Total Table Header is " + tableHeader.length);
    console.log("Total Table Data is " + tableData.length);
    // for (let i = 0; i <= tableLen; i++) {
    //   console.log("td in Table " + [i + 1] + "- " + tableShow[i].getElementsByTagName('td').length);
    // }
    
      for (let j = 0; j <= tableRow.length; j++) {
        console.log("td in Row " + [j + 1] + "- " + tableRow[j].getElementsByTagName('td').length);
      }
    
  }

}
