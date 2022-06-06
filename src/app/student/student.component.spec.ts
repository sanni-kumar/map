import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentOneComponent } from '../component-one/component-one.component';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let fb = new FormBuilder;
  let newForm :any;
  let routing:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      imports: [ReactiveFormsModule,RouterTestingModule.withRoutes([{ path: 'one',component: ComponentOneComponent}])]
      
    })
      .compileComponents();
  });

  beforeEach(() => {

    newForm = fb.group({
      itemRows: new FormArray([
        fb.group({
          name: '',
          mob: '',
          city: '',
        })
      ])

    })
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // imports:[ReactiveFormsModule,RouterTestingModule.withRoutes([{ path: 'one' }])]


  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // component.newForm
  });
  it('should throuw the error', () => {

// Test cases create by me

  });
  it('testing data', () => {
    expect(component.dataCheck).toBe('sanni');
  });
  // it('Testing html element', () => {
  //   const data = fixture.nativeElement;
  //   expect(data.querySelector(".span-validation1").textContent).toContain("Enter Valid City");
  // });
  it('testing function', () => {
    expect(component.details()).toBe(10);
  });
  it('testing function', () => {
    expect(component.details()).toEqual(10);
  });
  it('testing function', () => {
    var tee = component.details();
    expect(tee).toEqual(10);
  });

  it('should test form array', () => {
    component.addNewDetails();
    expect(component.display).toBeTruthy();
  });

  it('should test spy On', () => {
    
    spyOn(component,'testData');
    component.addNewDetails();
    expect(component.testData).toHaveBeenCalled();
  });
it('should navigate the component one' , () =>{
  spyOn(routing,'navigate');
  expect(routing.navigate).toHaveBeenCalledWith(['/one'])
})
});
