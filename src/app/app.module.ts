import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OddsComponent } from './odds/odds.component';
import { OddsListComponent } from './odds-list/odds-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OddsComponent,
    OddsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
