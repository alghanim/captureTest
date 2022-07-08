import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureEditComponent } from './capture-edit.component';
import { CaptureEditRoutingModule } from './capture-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CaptureEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CaptureEditComponent
  ]
})
export class CaptureEditModule { }
