import { MultimediaService } from './../../services/multimedia.service';
import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; // TODO: programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  listObservers$: Array<Subscription> = [];
  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(
      (status) => (this.state = status)
    );
    this.listObservers$= [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach((u) => u.unsubscribe());
    console.log('emoji');
  }
}
