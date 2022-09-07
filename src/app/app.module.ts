import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MlbGamesComponent } from './mlb-games/mlb-games.component';
import { NbaGamesComponent } from './nba-games/nba-games.component';
import { NflGamesComponent } from './nfl-games/nfl-games.component';
import { NhlGamesComponent } from './nhl-games/nhl-games.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MlbGamesComponent,
    NbaGamesComponent,
    NflGamesComponent,
    NhlGamesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
