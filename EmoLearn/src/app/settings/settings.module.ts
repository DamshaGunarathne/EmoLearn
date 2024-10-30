import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';

const settingsRouting: ModuleWithProviders<SettingsModule> = RouterModule.forChild([
  {
    path: '',
    component: SettingsComponent
  }
])

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    settingsRouting
  ]
})
export class SettingsModule { }
