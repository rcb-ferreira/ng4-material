import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent {

  post:any;

  constructor(private router: Router) { }
  types = [
    'Ad-hoc',
    'Weekly schedule'
  ];

  sites = [
    {value: 'site-0', viewValue: 'Site One'},
    {value: 'site-1', viewValue: 'Site Two'},
    {value: 'site-2', viewValue: 'Site Three'}
  ];

  siteTypes = [
    {value: 'type-0', viewValue: 'Types One'},
    {value: 'type-1', viewValue: 'Types Two'},
    {value: 'tupe-2', viewValue: 'Types Three'}
  ];

  departments = [
    {value: 'type-0', viewValue: 'Department One'},
    {value: 'type-1', viewValue: 'Department Two'},
    {value: 'tupe-2', viewValue: 'Department Three'}
  ];

  shifts = [
    {value: 'type-0', viewValue: 'Shift One'},
    {value: 'type-1', viewValue: 'Shift Two'},
    {value: 'tupe-2', viewValue: 'Shift Three'}
  ];

  userForm = new FormGroup({
    users: new FormArray([
      new FormControl(''),
    ])
  });

  get users(): FormArray { 
     return this.userForm.get('users') as FormArray; 
  }

  addUserField() { 
     this.users.push(new FormControl()); 
  }

  deleteUserField(index: number) {
     this.users.removeAt(index);
  }

  onFormSubmit() {
    console.log(this.users.value); // Gives FormArray data
    console.log(this.userForm.value); // Gives Complete form data

    //Iterate FormArray
    for(let i = 0; i < this.users.length; i++) {
      console.log(this.users.at(i).value);
    }

    this.post = true;
  }

  redirect(value) {
    this.router.navigateByUrl(`/${value}`);
  }

}

