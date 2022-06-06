import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormControlName, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  newForm: any;
  count: any;
  isTrue: boolean = true;
  display: boolean = false;
  dataCheck: string = "sanni";

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.newForm = this.fb.group({
      itemRows: new FormArray([
        this.fb.group({
          name: new FormControl('', Validators.pattern("[a-zA-Z ]*")),
          mob: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
          city: new FormControl('', Validators.pattern("[a-zA-Z ]*")),
        })
      ])

    })

  }
  details() {
    console.log(this.newForm.value);
    return 10;
  }
  addNewDetails() {
    let newContract = this.newForm.get('itemRows') as FormArray;
    let newDetails = this.fb.group({
      name: new FormControl('', Validators.pattern("[a-zA-Z ]*")),
      city: new FormControl('', Validators.pattern("[a-zA-Z ]*")),
      mob: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    })

    newContract.push(newDetails);
    this.count = newContract;


    if (this.count.length > 1) {
      this.display = true;
      this.testData();
    }

  }
  testData() {
    console.log();
  }
  add() {
    let cont: number = 0;
    this.newForm.get('itemRows').value.forEach((data: any) => {
      if (data.name == '' && data.mob == '' && data.city == '') {
        cont++;
      }

    });
    if (cont == 0) {
      this.addNewDetails()
    }
    else {
      alert("Please Enter The Data!");
    }

  }
  removeContract(i: any) {
    let itemRows = this.newForm.get('itemRows') as FormArray;
    if (this.count.length > 1) {
      itemRows.removeAt(i)
      this.display = true
    }
    if (this.count.length == 1) {
      this.display = false
    }

  }
  openNew() {
    this.router.navigateByUrl("/one");
  }
}
