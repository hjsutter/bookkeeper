import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbaGamesComponent } from './nba-games/nba-games.component';
import { MlbGamesComponent } from './mlb-games/mlb-games.component';
import { NflGamesComponent } from './nfl-games/nfl-games.component';
import { NhlGamesComponent } from './nhl-games/nhl-games.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OddsComponent } from './odds/odds.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'mlb', component: MlbGamesComponent},
  {path: 'nba', component: NbaGamesComponent},
  {path: 'nfl', component: NflGamesComponent},
  {path: 'nhl', component: NhlGamesComponent},
  {path: 'odds', component: OddsComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
