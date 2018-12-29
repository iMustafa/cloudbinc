import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { TimelineElement } from '../../shared/classes/timelineElement.interface';
import { TopIncidents } from '../../shared/classes/incidents.interface';
import * as elements from '../../datasources/timelineElements.json';
import * as incidents from '../../datasources/topIncidents.json';

@Component({
  selector: 'app-security-analysis',
  templateUrl: './security-analysis.component.html',
  styleUrls: ['./security-analysis.component.css']
})
export class SecurityAnalysisComponent implements OnInit {

  public elements: TimelineElement[] = elements.default;

  public displayedTableColumns: string[] = ['name', 'severity', 'count'];
  public incidents: TopIncidents[] = incidents.default;

  public options: CloudOptions = {
    width: 1,
    height: 400,
    overflow: false
  }

  public data: CloudData[] = [
    { text: 'Live traffic analysis', weight: 6, color: '#2CD5D6' },
    { text: 'PCI-DSS', weight: 6, color: '#79B85B' },
    { text: 'Enterprise Risk', weight: 7, color: '#1C1AE0' },
    { text: 'Incident management system', weight: 4, color: '#E0781A' },
    { text: 'Log analysis', weight: 4, color: '#5A63B9' },
    { text: 'Incident investigation', weight: 5, color: '#C9D00A' },
    { text: 'SIEM', weight: 6, color: '#5A78B8' },
    { text: '200+ security usecases and correlation rules', weight: 4, color: '#626A94' },
    { text: 'Security Analytics', weight: 7, color: '#5A63B9' },
    { text: 'Vulnerability management', weight: 4, color: '#5A63B9' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
