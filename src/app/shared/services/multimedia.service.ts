import { TrackModel } from './../../core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();


  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;

  constructor() {
     this.audio = new Audio();

     this.trackInfo$.subscribe((responseOK) => {
       if (responseOK) {
         this.setAudio(responseOK);
       }
     });
  }

  private listenAllEventes(): void {}

  public setAudio(track: TrackModel): void {
    console.log('🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍', track);
    this.audio.src = track.url;
    this.audio.play();
  }
}
