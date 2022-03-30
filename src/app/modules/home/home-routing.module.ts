
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tracks', // TODO: http://localhost:4200/
    loadChildren: () =>
      import('@modules/tracks/tracks.module').then((m) => m.TracksModule),
  },
  {
    path: 'favorites', // TODO: http://localhost:4200/
    loadChildren: () =>
      import('@modules/favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'history', // TODO: http://localhost:4200/
    loadChildren: () =>
      import('@modules/history/history.module').then((m) => m.HistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
