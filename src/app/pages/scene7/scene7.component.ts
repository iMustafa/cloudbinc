import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-scene7',
  templateUrl: './scene7.component.html',
  styleUrls: ['./scene7.component.css']
})
export class Scene7Component implements OnInit {

  constructor(
  ) { }

  public options: CloudOptions = {
    width: 1,
    height: 400,
    overflow: false
  }

  public data: CloudData[] = [
    { text: 'Real time analysis', weight: 6, color: '#00BCFF' },
    { text: 'Effective search language', weight: 6, color: '#79B85B' },
    { text: 'Full stack visibility', weight: 6, color: '#5A78B8' },
    { text: 'Effective analysis', weight: 7, color: '#000' },
    { text: 'Devops & infrastructure intelligence', weight: 4, color: '#5A63B9' },
    { text: 'Unstructured data', weight: 4, color: '#5A63B9' },
    { text: 'Built for speed', weight: 5, color: '#FEA001' },
    { text: 'Live Reports', weight: 7, color: '#5A63B9' }
  ];

  public meter = {
    "chart": {
      "caption": "Customer Satisfaction Score",
      "subcaption": "Last week",
      "lowerLimit": "0",
      "upperLimit": "100",
      "theme": "fusion"
    },
    "colorRange": {
      "color": [
        {
          "minValue": "0",
          "maxValue": "50",
          "code": "#e44a00"
        },
        {
          "minValue": "50",
          "maxValue": "75",
          "code": "#f8bd19"
        },
        {
          "minValue": "75",
          "maxValue": "100",
          "code": "#6baa01"
        }
      ]
    },
    "dials": {
      "dial": [
        {
          "value": "67"
        }
      ]
    }
  }

  public pie = {
    "chart": {
      "caption": "Recommended Portfolio Split",
      "subcaption": "For a net-worth of $1M",
      "showvalues": "1",
      "showpercentintooltip": "0",
      "numberprefix": "%",
      "enablemultislicing": "1",
      "theme": "fusion"
    },
    "data": [
      {
        "label": "Security Analysis",
        "value": "25"
      },
      {
        "label": "Business Insights",
        "value": "25"
      },
      {
        "label": "Application Intelligence",
        "value": "25"
      },
      {
        "label": "Operational Visibility",
        "value": "25"
      }
    ]
  }

  ngOnInit() {
    // this._CSV.readCSV('portfolio_split.csv')
    //   .then(json => console.log(json))
  }

}
