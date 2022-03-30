import { MultimediaService } from './../../services/multimedia.service';
import { TrackModel } from './../../../core/models/tracks.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';  // TODO: programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover:
      'https://img1.freepng.es/20180329/jue/kisspng-angularjs-dart-front-and-back-ends-npm-escalator-5abda7d6ba62f5.4348649815223787107634.jpg',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1,
  };

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (Response: TrackModel) => {
        console.log('Recibiendo cancion....', Response);
      }
    );

    this.listObservers$ = [observer1$];
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('emoji');
  }
}