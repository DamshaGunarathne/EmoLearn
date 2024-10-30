import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule } from '@angular/router';

const courseRouting: ModuleWithProviders<CoursesModule> = RouterModule.forChild([
  {
    path: '',
    component: CoursesComponent
  }
]);

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    courseRouting
  ]
})
export class CoursesModule { }
