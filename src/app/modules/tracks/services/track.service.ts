import { Observable, of, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {

  datatracksTrending$:Observable<TrackModel[]> = of([])
  datatracksRandom$:Observable<any> = of([])

  constructor() {
    const {data}: any  = (dataRaw as any).default;
    this.datatracksTrending$ = of(data)

    this.datatracksRandom$ =new Observable((observer)=>{
      const trackExample: TrackModel = {
        _id: 9,
        name: 'Leve',
        album: 'Cartel de Santa',
        url:'https://',
        cover: 'https://www.whosampled.com/static/track_images_200/lr179341_20161118_23200534156.jpg',
      };
      setTimeout(()=>{
        observer.next([trackExample]);
      },3500)
    })
  }
}
