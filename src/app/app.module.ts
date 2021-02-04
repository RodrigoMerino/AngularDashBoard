import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { HealthComponent } from './sections/health/health.component';
import { CommonModule } from '@angular/common';
//services
import{ServicesService} from './ServerService/services.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SalesComponent } from './Sections/sales/sales.component';
import { OrdersComponent } from './Sections/orders/orders.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ObjToArrayPipe } from './ObjToArray.pipe';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
   routingComponent,
    NavBarComponent,
    SideBarComponent,
    SalesComponent,
    OrdersComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    PaginationComponent,
    ObjToArrayPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    ServicesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
