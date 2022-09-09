import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {
  oddsList: any[] = []
  homeTeam = '';
  awayTeam = '';
  date: string = '';
  bookmakers: any[] = []
  outcomes: any[] = []

  constructor() {
  }

  ngOnInit(): void {
    this.oddsList = history.state.data
    this.parseOdds()
  }

  parseOdds(){
    let game = this.oddsList[0]
    this.homeTeam = game.home_team
    this.awayTeam = game.away_team
    let time = new Date(game.commence_time)
    this.date = time.toDateString()
    this.bookmakers = game.bookmakers
  }
}
