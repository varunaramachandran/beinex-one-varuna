import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule,  } from 'ng2-charts';
import { NgxChartsModule }from '@swimlane/ngx-charts';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgChartsModule,
    NgxChartsModule,
    
    
  ]
})
export class HomeModule { }
