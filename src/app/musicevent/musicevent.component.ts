import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicEvent } from '../MusicEvent';

@Component({
  selector: 'app-musicevent',
  templateUrl: './musicevent.component.html',
  styleUrls: ['./musicevent.component.sass']
})
export class MusiceventComponent implements OnInit {
  @Input() event: MusicEvent;

  constructor() { }

  ngOnInit() {
  }

}
