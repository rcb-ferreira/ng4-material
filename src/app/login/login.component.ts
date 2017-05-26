import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  logoImg: string = '';

  constructor(private router: Router) {
    this.logoImg = 'assets/logo@2x.png'
  }

  redirect() {
    this.router.navigateByUrl('/requisition');
  }
}