import { Component, OnInit, Input } from '@angular/core';
import { TimelineElement } from '../../classes/timelineElement.interface';

@Component({
  selector: 'app-timeline-element',
  templateUrl: './timeline-element.component.html',
  styleUrls: ['./timeline-element.component.css']
})
export class TimelineElementComponent implements OnInit {
  @Input() public data: TimelineElement;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
