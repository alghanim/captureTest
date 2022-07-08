import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptureEditComponent } from './capture-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CaptureEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaptureEditRoutingModule { }
