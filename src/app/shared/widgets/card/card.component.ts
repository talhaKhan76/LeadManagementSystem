import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;

  @Input() data=[];

  Highcharts = Highcharts;
  chartOptions ={};

  constructor() { }

  ngOnInit(): void {
    HC_exporting(Highcharts);
    
    this.chartOptions =  {
      chart: {
          type: 'area',
          backgrouncolor:null,
          borderwidth:0,
          margin:[2,2,2,2],
          height:60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside:true
      },
      legend:{
        enabled:false
      },
      credits:{
        enabled:false
      },
      exporting:{
       enabled:false
      },
      xAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOption:[]
      },
      yAxis:{
        labels:{
          enabled:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOption:[]
      },
      series: [{
        data:this.data
      }]
  };
  
  
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
      );
    },300);
  }

}
