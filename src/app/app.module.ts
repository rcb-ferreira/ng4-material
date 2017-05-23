import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, 
  MdButtonModule, 
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdSelectModule,
  MdRadioModule,
  MdNativeDateModule,
  MdDatepickerModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdTabsModule } from '@angular/material';

import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { LoginComponent } from './login/login.component';
import { MyCompaniesComponent } from './my-companies/my-companies.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisitionComponent,
    LoginComponent,
    MyCompaniesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    MdRadioModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
