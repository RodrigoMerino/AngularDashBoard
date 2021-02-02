import { Component, OnInit,Input } from '@angular/core';
import { Order } from 'src/app/Shared/Order';
import{SalesDataServiceService} from 'src/app/ApiServices/sales-data-service.service'
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private _SalesService: SalesDataServiceService) { }
orders: Order[];

  ngOnInit(): void {
   // this.GetOrder();
  }
//GetOrder(){
 //this._SalesService.GetOrders().subscribe(res =>{this.orders = res} );
//}


goToPrevious(): void{
console.log("go to previous")
}

}
