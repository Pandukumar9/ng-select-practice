import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularlibrariesRoutingModule } from './angularlibraries-routing.module';
import { AngularlibrariesComponent } from './angularlibraries.component';
import { ExampleComponent } from './ng-select/example/example.component';
import { Example2Component } from './ng-select/example2/example2.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AngularlibrariesComponent,
    ExampleComponent,
    Example2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    AngularlibrariesRoutingModule
  ]
})
export class AngularlibrariesModule { }
