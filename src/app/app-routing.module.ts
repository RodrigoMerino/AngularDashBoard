import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthComponent } from './sections/health/health.component';
import { SalesComponent } from './Sections/sales/sales.component';
import { OrdersComponent } from './Sections/orders/orders.component';

const routes: Routes = [
  {path:'health',component: HealthComponent},
  {path:'sales',component: SalesComponent},
  {path:'orders',component: OrdersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponent = [HealthComponent,SalesComponent,OrdersComponent];