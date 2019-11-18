import { Component, OnInit, Input } from '@angular/core';
import { MusicEvent } from '../MusicEvent';
import { MusicEventService } from '../music-event.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-music-event-details',
  templateUrl: './music-event-details.component.html',
  styleUrls: ['./music-event-details.component.sass']
})
export class MusicEventDetailsComponent implements OnInit {
  event: MusicEvent;
  constructor(private musicEventService: MusicEventService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: ParamMap)=>{
      this.event = this.musicEventService.GetMusicEvent(+param.get('id'));
    });
  }

}
