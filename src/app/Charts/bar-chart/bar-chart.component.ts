import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { orderData, SalesDataServiceService } from 'src/app/ApiServices/sales-data-service.service';
import { pipe } from 'rxjs';
import { reduce } from 'rxjs/operators';
import * as moment from 'moment';
// const SAMPLE_BARCHART_DATA: any[] = [
//   { data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales' },
//   { data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales' }
// ];

// const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  dataSource: orderData;

  constructor(private _SalesService: SalesDataServiceService) { }
  public barChartData: any[] 
  public barChartLabels: string[] ;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  ngOnInit(): void {
    this.GetOrder();
  }

  GetOrder() {
    this._SalesService.GetOrders(1, 10).subscribe(res => {
      const localChartData = this.getChartData(res as any);
      
      this.barChartLabels = localChartData.map(x => x[0]).sort();
      this.barChartData = [{'data': localChartData.map(x=>x[1]),'label':'sales'}]
    })
  }

  getChartData(res: Response) {
    const totalData = res['data'].map(res => res.total);
   // const date = res['data'].map(res => moment(res.placed).format("YY/MM/DD"));

    const formattedArray = res['data'].reduce((placed, total) => {
      placed.push([moment(total.placed).format('YY-MM-DD'), total.total])
      return placed;
    }, []);

    console.log(formattedArray);
    //onsole.log(date);

    const p = [];

    const getTogetherCloneData = formattedArray.reduce((r,e) =>{
let key = e[0];
if (!p[key]) {
  p[key] = e;
  r.push(p[key]);
}else{
  p[key][1]  +=e[1];
}
// si no returno nada me da un error de push
return r;
    },[]);
    console.log(getTogetherCloneData);
  return getTogetherCloneData;
  }
}

// const myDATA = [2,5,6].reduce((sum,value) =>{
//   console.log(sum,value)
//   return sum + value;
// },0 )
// console.log(myDATA) ;