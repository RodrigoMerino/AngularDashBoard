import { Component, OnInit } from '@angular/core';
import { SalesDataServiceService } from 'src/app/ApiServices/sales-data-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  salesDataByCustomer: any;
  salesDataByState: any;;
  constructor(private _salesDataService : SalesDataServiceService) { }

  
  ngOnInit(): void {
  this.getStates();
  this.getTopCustomers();
  }
getStates(){
  this._salesDataService.GetOrdersByState().subscribe(res => {console.log('from order component',this.salesDataByState = res)})
}
getTopCustomers(){
  this._salesDataService.GetOrdersByCustomer(5).subscribe(res => {console.log('from order component',this.salesDataByCustomer = res)})
}
}
