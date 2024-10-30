import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule } from '@angular/router';

const reportsRouting: ModuleWithProviders<ReportsModule> = RouterModule.forChild([
  {
    path: '',
    component: ReportsComponent
  }
])

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    reportsRouting
  ]
})
export class ReportsModule { }
