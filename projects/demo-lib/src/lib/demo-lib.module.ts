import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { DemoLibComponent } from './demo-lib.component';
import { SingleSelectSearchComponent } from './single-select-search/single-select-search.component';
import { MultipleSelectSearchComponent } from './multiple-select-search/multiple-select-search.component';




@NgModule({
  declarations: [
    DemoLibComponent,
    SingleSelectSearchComponent,
    MultipleSelectSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    NgxMatSelectSearchModule,
  ],
  exports: [
    DemoLibComponent,
    SingleSelectSearchComponent,
    MultipleSelectSearchComponent
  ]
})
export class DemoLibModule { }
