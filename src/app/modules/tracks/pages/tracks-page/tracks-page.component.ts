import { Subscription } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }
  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    // this.trackService.getAllTracks$().subscribe((Response: TrackModel[]) => {
    //   this.tracksTrending = Response;
    //   // console.log('-->🛑🛑☢☢', Response);
    // });
  }
  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe((Response: TrackModel[]) => {
      this.tracksRandom = Response;
      // console.log('-->🛑🛑☢☢', Response);
    })
  }

  ngOnDestroy(): void {}
}
