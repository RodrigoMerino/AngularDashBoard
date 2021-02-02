import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }
public pieChartData: number[] =[132,314,500];
public pieChartLabels: string[] =['McDonald','Pizza','Joans']
public pieChartType: string ='doughnut';
  ngOnInit(): void {
  }

}
