import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    NgxSkeletonLoaderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
