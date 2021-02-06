import { Component, Input, OnInit } from '@angular/core';
import{ orderData, SalesDataServiceService} from 'src/app/ApiServices/sales-data-service.service';
import _  from 'lodash'
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }
public pieChartData: number[] ;
public pieChartLabels: string[] ;
@Input() InitData;
@Input() Limit:number;


public pieChartType: string ='doughnut';
  ngOnInit(): void {
    this.ParseData(this.InitData,this.Limit)

  }
ParseData(res:Response, limit?: number){
  
const sliceData = res['data'].slice(0,limit);
this.pieChartData =sliceData.map(x => _.values(x)[1]);
this,this.pieChartLabels =sliceData.map(x => _.values(x)[0]);

console.log('slice data',sliceData)
}
}
