import { Component, OnInit,Input } from '@angular/core';
import { Order } from 'src/app/Shared/Order';
import{ orderData, SalesDataServiceService} from 'src/app/ApiServices/sales-data-service.service'
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

constructor(private _SalesService: SalesDataServiceService) { }
dataSource: orderData =null;
columnsToDisplay:['id','customerId','total','placed','completed']

CurrentPage = 1;
PageSize = 10;
total:0;

  ngOnInit(): void {
    this.GetOrder();
  }
GetOrder(){
this._SalesService.GetOrders(this.CurrentPage,this.PageSize).subscribe(res => {this.dataSource= res,console.log(this.dataSource = res)})
}


goToPrevious(): void{
console.log("go to previous")
this.CurrentPage --;
this.GetOrder();
}
goToNext(): void{
  console.log("go to next")
this.CurrentPage ++;  
this.GetOrder();

}





}
