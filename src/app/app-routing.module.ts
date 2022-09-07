import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbaGamesComponent } from './nba-games/nba-games.component';
import { MlbGamesComponent } from './mlb-games/mlb-games.component';
import { NflGamesComponent } from './nfl-games/nfl-games.component';
import { NhlGamesComponent } from './nhl-games/nhl-games.component';

const routes: Routes = [
  {path: 'mlb', component: MlbGamesComponent},
  {path: 'nba', component: NbaGamesComponent},
  {path: 'nfl', component: NflGamesComponent},
  {path: 'nhl', component: NhlGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
