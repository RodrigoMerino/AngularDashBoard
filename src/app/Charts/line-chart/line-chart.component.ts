import { Component, OnInit } from '@angular/core';

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

  constructor() { }
public lineChartData= SAMPLE_DATA_LINE;
public lineChartType ='line';
public lineChartLabels= SAMPLE_LABEL_LINE;
public lineChartOptions:any ={
  responsive:true,
  maintainAspectRatio: false,

}
  ngOnInit(): void {
  }

}
