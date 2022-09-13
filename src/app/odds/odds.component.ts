import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {
  oddsList: any[] = []
  homeTeam = '';
  awayTeam = '';
  league = '';
  date: string = '';
  bookmakers: any[] = []
  outcomes: any[] = []

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    this.oddsList = history.state.data
    this.parseOdds()
  }

  parseOdds(){
    let game = this.oddsList[0]
    this.homeTeam = game.home_team
    this.awayTeam = game.away_team
    this.league = game.sport_key
    this.date = game.commence_time
    this.bookmakers = game.bookmakers
  }

  goBack() {
    this.location.back()
  }
}
