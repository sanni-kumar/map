import { Component, OnInit } from '@angular/core';
import { ReplayDataService } from '../replay-data.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})

export class ReplaySubjectComponent implements OnInit {
data:any;
  constructor(private postdata:ReplayDataService) { }

  ngOnInit(): void {
    this.postdata.getpost().subscribe((result) =>{
      // console.log(result);
      this.data=result;
      console.log(this.data);
    })
  }

}
