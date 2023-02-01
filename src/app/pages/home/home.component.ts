import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    //Doughnut
    public doughnutChartLabels: string[] = [ 'Chairman Office', 'DOH Sector' ];
    public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: [ 65, 35 ], label: 'Series A',
      },
      ];
  
    public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
      responsive: false
    };
  //chart 2
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
  ];
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData= [
    { data: [1, 2, 3], label: 'Approved', stack: 'a' },
    { data: [1, 2, 3], label: 'Accepted', stack: 'a' },
    { data: [1, 2, 3], label: 'Open', stack: 'a' },
    { data: [1, 2, 3], label: 'In Progress', stack: 'a' },
  ];
  public barChartLabels: string[] = ['P', 'R', 'B'];

  
  multi: any[] =[
    {
      "name": "Strategic Affairs",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 5940000
        },{
          "name":"2012",
          "value":786827
        },
        {
          "name" : "2013",
          "value": 2345678
        }
      ]
    },
  
    {
      "name": "Helthcare Workforce sector",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 3270000
        }
      ]
    },
  
    {
      "name": "Helthcare Facilities sector",
      "series": [
        {
          "name": "2010",
          "value": 6000000
        },
        {
          "name": "2011",
          "value": 580000
        }
      ]
    },
    {
      "name": "Support Service",
      "series": [
        {
          "name": "2010",
          "value": 3000000
        },
        {
          "name": "2011",
          "value": 580000
        }
      ]
    }
  ];
  ;
  view = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor(){

  }

}
