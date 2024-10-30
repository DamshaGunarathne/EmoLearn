import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionOverviewComponent } from './session-overview.component';
import { RouterModule } from '@angular/router';

const sessionOverViewRouting: ModuleWithProviders<SessionOverviewModule> = RouterModule.forChild([
  {
    path: '',
    component: SessionOverviewComponent
  }
])

@NgModule({
  declarations: [
    SessionOverviewComponent
  ],
  imports: [
    CommonModule,
    sessionOverViewRouting
  ]
})
export class SessionOverviewModule { }
