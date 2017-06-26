import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-d3-bar-graph',
  templateUrl: './d3-bar-graph.component.html',
  styleUrls: ['./d3-bar-graph.component.scss']
})
export class D3BarGraphComponent implements OnInit, OnChanges {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;


  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    this.createChart();
  }

  ngOnChanges() {
    console.log('ngOnchanges');
    }

  createChart() {
    d3.select('.bar')
      .append('h1')
      .text('let\'s build a bar graph');
  }

}
