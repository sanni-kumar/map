import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {
  el: any;

  constructor() { }

  ngOnInit(): void {

  }
  addTable() {
    // let tableShow = document.createElement('table');
    // let tableHead = document.createElement('th');
    // let tableRows = document.createElement('tr');
    // let tableDatas = document.createElement('td');
    // let row = tableShow.insertRow();
    // let cell1 = row.insertCell();
    // let cell2 = row.insertCell();
    // let cell3 = row.insertCell();
    // cell1.innerHTML="123";
    let randomRow = Math.floor(Math.random() * 5);
    let randomCols = Math.floor(Math.random() * 5);
    let myBody = document.getElementsByTagName('body')[0];
    let tableBody = document.createElement('tbody');
    let tableShow = document.createElement('table');
    for (let i = 0; i <= randomRow; i++) {
      let rows = document.createElement('tr');
      for (let j = 0; j <= randomCols; j++) {
        let cols = document.createElement('td');
        let text = document.createTextNode('hi');
        let a = rows.appendChild(cols);
        cols.appendChild(text);
        console.log("Total Cells in Table" +  + (randomCols+1)*(randomRow+1));
      }
      tableShow.appendChild(rows);
      console.log()
    }
    myBody.appendChild(tableShow);
    tableShow.appendChild(tableBody);
    tableShow.setAttribute('border', '1');
    console.log()
  }
}
