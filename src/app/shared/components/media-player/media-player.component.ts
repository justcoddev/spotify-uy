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

  listObservers$: Array<Subscription> = [];

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {


    // const observable1$ = this.multimediaService.myObservable1$
    // .subscribe(
    //   (responseOk)=>{
    //     // TODO: next()
    //     console.log('El agua va perfecta!',responseOk)
    //   },
    //   (responseFail)=>{
    //     // TODO: error()
    //     console.log('Se tapo la tuberia',responseFail)
    //   },
    // )
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('emoji');
  }
}
