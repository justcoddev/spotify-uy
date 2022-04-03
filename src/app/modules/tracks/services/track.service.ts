import { TrackModel } from '@core/models/tracks.model';
import { environment } from './../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}
  /**
   *
   * @returns Devuelve todas las canciones !! 💥💥
   */
  private skipById(
    listTracks: TrackModel[],
    id: number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, rejects) => {
      const listTmp = listTracks.filter((a) => a._id !== id);
      resolve(listTmp);
    });
  }

  /**
   * // TODO: {data:[..1,..2,..3]}
   */
  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }
  /**
   *
   * @returns Devolver canciones random
   */
  getAllRandom$(): Observable<any> {
    // TODO: uso de pipe para filtar
    return this.http.get(`${this.URL}/tracks`).pipe(
      tap(data => console.log('-->❌📛', data)),
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      tap((data) => console.log('-->📛📛', data)),
      catchError((err) => {
        const {status, statusText}= err;
        console.log('Algo paso revisame 💥💥💥',[status, statusText])
        return of([]);
      })
      // map((dataRevertida)=> { //aplica filtro comun de array
      //   return dataRevertida.filter((track:TrackModel)=> track._id !==1)
      // })
      //
    );
  }
}
