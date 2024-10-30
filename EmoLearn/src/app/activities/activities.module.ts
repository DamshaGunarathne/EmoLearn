import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { RouterModule } from '@angular/router';

const activitiesRouting: ModuleWithProviders<ActivitiesModule> = RouterModule.forChild([
  {
    path: '',
    component: ActivitiesComponent
  }
]);

@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    activitiesRouting
  ]
})
export class ActivitiesModule { }
