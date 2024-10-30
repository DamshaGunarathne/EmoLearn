import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const dashboardRouting: ModuleWithProviders<DashboardModule> = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent
  }
]);

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    dashboardRouting
  ]
})
export class DashboardModule { }
