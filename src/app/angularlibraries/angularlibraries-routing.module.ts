import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularlibrariesComponent } from './angularlibraries.component';
import { ExampleComponent } from './ng-select/example/example.component';
import { Example2Component } from './ng-select/example2/example2.component';

const routes: Routes = [
  { path: '', component: AngularlibrariesComponent,
children: [ 
     { path: 'example', component: ExampleComponent },
     { path: 'example2', component: Example2Component }
   ] 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularlibrariesRoutingModule { }
