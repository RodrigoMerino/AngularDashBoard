import { Component, OnInit } from '@angular/core';
import { orderData, SalesDataServiceService } from 'src/app/ApiServices/sales-data-service.service';
import {customer} from 'src/app/Shared/customer'
const SAMPLE_DATA_LINE: any[] =[
{data:[100,24,65,23,33,34],label:["testing 1"]},
{data:[21,100,65,10,94,100],label:["testing 2"]},
{data:[221,12,95,16,30,14],label:["testing 3"]},
];
const SAMPLE_LABEL_LINE:String[] =[
"asd","fas","fafs","fasdfs",
"asd","fas"
]
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
topCustomer:any;
allOrders:any
customer:customer;
  constructor(private _salesDataService: SalesDataServiceService) { }
public lineChartData= SAMPLE_DATA_LINE;
public lineChartType ='line';
public lineChartLabels= SAMPLE_LABEL_LINE;
public lineChartOptions:any ={
  responsive:true,
  maintainAspectRatio: false,

}
  ngOnInit(): void {
this.getOrders();
  }

  getOrders(){
    this._salesDataService.GetOrders(1,100).subscribe(res =>  
       {console.log(this.allOrders = res ['data'])

        
 
    this._salesDataService.GetOrdersByCustomer(3).subscribe(res => {console.log(this.topCustomer =res['data'].map(x => x['name']))
  
  
    const allChartData = this.topCustomer.reduce((result,i) =>{
      result.push(this.getChartData(this.allOrders,i) );
      return result;
          },[])  
  } );


  });
}

  getChartData(allOrders:any,name:string){
const customerallOrders = allOrders.filter(o => o.customerIdNavigation.name  === name);
console.log(customerallOrders);
  };

  
  }

