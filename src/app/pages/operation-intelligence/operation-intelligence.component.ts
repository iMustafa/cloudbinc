import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-operation-intelligence',
  templateUrl: './operation-intelligence.component.html',
  styleUrls: ['./operation-intelligence.component.css']
})
export class OperationIntelligenceComponent implements OnInit {

  public options: CloudOptions = {
    width: 1,
    height: 400,
    overflow: false
  }

  public data: CloudData[] = [
    { text: 'Time series investigation', weight: 6, color: '#535C8A' },
    { text: 'Data center management', weight: 6, color: '#02FF07' },
    { text: 'Ingest any logs', weight: 7, color: '#18ACEB' },
    { text: 'Live CPU RAM HDD monitoring', weight: 4, color: '#EBA716' },
    { text: 'Event correlation for root cause analysis investigation', weight: 4, color: '#FF0005' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
