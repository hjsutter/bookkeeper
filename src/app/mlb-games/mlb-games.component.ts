import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { OddsComponent } from '../odds/odds.component';

let apiKey = '2a24d9b96c09d00f9b220a306b5d9f7a'
let sportKey = 'baseball_mlb'
let regions ='us'
let markets = 'h2h'
let oddsFormat = 'decimal'
let dateFormat = 'iso'
let bookmakers = ['barstool', 'betus','betmgm', 'circasports', 'draftkings', 'fanduel', 'foxbet', 'mybookieag', 'pointsbetus', 'unibet']

@Component({
  selector: 'app-mlb-games',
  templateUrl: './mlb-games.component.html',
  styleUrls: ['./mlb-games.component.css']
})

export class MlbGamesComponent implements OnInit {

  oddsList: any[] = [];
  betLines: any = {};
  testList = [
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 5.2}, {name: 'St. Louis Cardinals', price: 2.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]}
  ]
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    //Get the odds for each upcoming MLB game
    // axios.get(`https://api.the-odds-api.com/v4/sports/${ sportKey }/odds/?apiKey=${ apiKey }&regions=${ regions }&markets=${ markets }&bookmakers=${ bookmakers }`)
    // .then(response => {
    //   console.log(response.data)
    //   this.oddsList = response.data
    //   this.oddsList.sort()
    //   let formattedDate = new Date();
    //   for(let i = 0; i < this.oddsList.length; i++){
    //     formattedDate = new Date(this.oddsList[i].commence_time);
    //     this.oddsList[i].commence_time = formattedDate.toDateString()
    //   }
    //   console.log('Remaining requests', response.headers['x-requests-remaining'])
    //   console.log('Used requests', response.headers['x-requests-used'])
    // })
    // .catch(error => {
    //   console.log('Error stats', error.response.data)
    //   console.log(error.response.data)
    // })
  }

  viewOdds(i: number): void {
    if(this.oddsList === undefined || this.oddsList.length < 1){
      this.betLines = [this.testList[i]];
    } else {
      this.betLines = [this.oddsList[i]];
    }
    this.router.navigate(['/odds'], {state: {data: this.betLines}})
  }
}
