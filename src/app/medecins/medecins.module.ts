import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMedecinComponent } from './dashboard-medecin/dashboard-medecin.component';



@NgModule({
  declarations: [
    DashboardMedecinComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardMedecinComponent,
  ]
})
export class MedecinsModule { }
