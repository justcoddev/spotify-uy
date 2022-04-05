import { Observable, Observer } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  myObservable1$: Observable<any> = new Observable();
  constructor() {
    this.myObservable1$ = new Observable((observer: Observer<any>) => {
      observer.next('💦');

      setTimeout(() => {
        observer.complete();
      }, 1000);
      setTimeout(() => {
        observer.next('💦');
      }, 2500);
      setTimeout(() => {
        observer.error('💦');
      }, 3500);
    });
  }

  private listenAllEventes(): void {}
}
