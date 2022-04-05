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
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject(
    '-00:00'
  );

  constructor() {
    this.audio = new Audio();

    this.trackInfo$.subscribe((responseOK) => {
      if (responseOK) {
        this.setAudio(responseOK);
      }
    });
    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
   
  }

  private calculateTime = () => {
    console.log('disparando el evento');
    const { duration, currentTime } = this.audio;
    console.table([duration, currentTime]);
    this.setTimeElapsed(currentTime);
     this.setRemaining(currentTime, duration);

  };

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60); // TODO: 1,2,3
    let minutes = Math.floor((currentTime / 60) % 60);

    // TODO:   00:00 ---> 01:05 --> 10:15
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeElapsed$.next(displayFormat);
  }

  private setRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor((timeLeft / 60) % 60);
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat);
  }

  public setAudio(track: TrackModel): void {
    console.log('🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍', track);
    this.audio.src = track.url;
    this.audio.play();
  }
}
