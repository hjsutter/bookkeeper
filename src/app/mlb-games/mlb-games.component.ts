import { Component, OnInit } from '@angular/core';
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
  testList = [
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]},
    { home_team: 'Milwaukee Brewers', away_team: 'St. Louis Cardinals', commence_time: '09 September 2022', bookmakers: [{title: 'FanDuel', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}, {title: 'BetMGM', markets: [{key: 'h2h', outcomes: [{name: 'Milwaukee Brewers', price: 4.2}, {name: 'St. Louis Cardinals', price: 1.5}]}]}]}
  ]
  constructor() {

  }

  ngOnInit(): void {
    //Get the odds for each upcoming MLB game
    axios.get(`https://api.the-odds-api.com/v4/sports/${ sportKey }/odds/?apiKey=${ apiKey }&regions=${ regions }&markets=${ markets }&bookmakers=${ bookmakers }`)
    .then(response => {
      console.log(response.data)
      this.oddsList = response.data
      this.oddsList.sort()
      let formattedDate = new Date();
      for(let i = 0; i < this.oddsList.length; i++){
        formattedDate = new Date(this.oddsList[i].commence_time);
        this.oddsList[i].commence_time = formattedDate.toDateString()
      }
      console.log('Remaining requests', response.headers['x-requests-remaining'])
      console.log('Used requests', response.headers['x-requests-used'])
    })
    .catch(error => {
      console.log('Error stats', error.response.data)
      console.log(error.response.data)
    })
  }

  viewOdds(index: number): void {
    console.log(index)
    if(this.oddsList.length == 0){
      console.log(this.testList[index])
    } else {
      console.log(this.oddsList[index])
    }
  }
}
