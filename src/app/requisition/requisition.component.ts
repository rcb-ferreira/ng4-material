import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['./requisition.component.css']
})
export class RequisitionComponent {
  types = [
    'Ad-hoc',
    'Weekly schedule'
  ];

  sites = [
    {value: 'site-0', viewValue: 'Site One'},
    {value: 'site-1', viewValue: 'Site Two'},
    {value: 'site-2', viewValue: 'Site Three'}
  ];

  rForm: FormGroup;
  post:any;                     // A property for our submitted form                     // A property for our submitted form
  type:string = '';
  site:string = '';
  name:string = '';
  titleAlert:string = 'This field is required';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'type' : [null, Validators.required],
      'site' : [null, Validators.required],
      'name' : [null, Validators.required],
    });

  }

  addPost(post) {
    console.log(post);
    this.post = post;
  }
}

