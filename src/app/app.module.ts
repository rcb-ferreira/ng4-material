import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

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
  MdChipsModule,
  MdTabsModule } from '@angular/material';

import { Component } from '@angular/core';
import { Http } from '@angular/http';

import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RequisitionComponent,
    LoginComponent,
    PageNotFoundComponent
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
    MdChipsModule,
    MdTabsModule,
    AppRoutingModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/ng4-material'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
