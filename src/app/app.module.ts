import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { HealthComponent } from './sections/health/health.component';
import { CommonModule } from '@angular/common';

//services
import{ServicesService} from './ServerService/services.service'
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    ServicesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
