import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressOverviewComponent } from './progress-overview.component';
import { RouterModule } from '@angular/router';

const progressOverviewRouting: ModuleWithProviders<ProgressOverviewModule> = RouterModule.forChild([
  {
    path: '',
    component: ProgressOverviewComponent
  }
])

@NgModule({
  declarations: [
    ProgressOverviewComponent
  ],
  imports: [
    CommonModule,
    progressOverviewRouting
  ]
})
export class ProgressOverviewModule { }
