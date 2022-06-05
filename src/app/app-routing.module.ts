import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [{ path: 'angular', loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule) },
                        { path: 'angularlibraries', loadChildren: () => import('./angularlibraries/angularlibraries.module').then(m => m.AngularlibrariesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgSelectModule, FormsModule,
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
