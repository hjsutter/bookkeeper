import { Component, OnInit } from '@angular/core';
import axios from 'axios';

let apiKey = '2a24d9b96c09d00f9b220a306b5d9f7a'
let regions ='us'
let markets = 'h2h'
let bookmakers = ['barstool', 'betus','betmgm', 'circasports', 'draftkings', 'fanduel', 'foxbet', 'mybookieag', 'pointsbetus', 'unibet']

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  oddsList: any[] = [];
  mlbList: any[] = [];
  nbaList: any[] = [];
  nflList: any[] = [];
  nhlList: any[] = [];
  sportTitle: string = ''

  constructor() { }

  ngOnInit(): void {
    this.getOdds('baseball_mlb')
    this.getOdds('basketball_nba')
    this.getOdds('americanfootball_nfl')
    this.getOdds('icehockey_nhl')
  }

  getOdds(sportKey: string){
    let returnList: any[] = []
    //Get the odds for each upcoming MLB game
    axios.get(`https://api.the-odds-api.com/v4/sports/${ sportKey }/odds/?apiKey=${ apiKey }&regions=${ regions }&markets=${ markets }&bookmakers=${ bookmakers }`)
    .then(response => {
      // console.log(response.data)
      returnList = response.data
      console.log(returnList)
      returnList.sort()
      if(sportKey == 'baseball_mlb'){
        this.mlbList = returnList
      } else if (sportKey == 'americanfootball_nfl'){
        this.nflList = returnList
      } else if (sportKey == 'basketball_nba'){
        this.nbaList = returnList
      } else {
        this.nhlList = returnList
      }
      console.log('Remaining requests', response.headers['x-requests-remaining'])
      console.log('Used requests', response.headers['x-requests-used'])
    })
    .catch(error => {
      console.log('Error stats', error.response.data)
      console.log(error.response.data)
    })
  }

  viewOddsList(league: String){
    if(league == 'mlb'){
      this.oddsList = this.mlbList
      this.sportTitle = 'MLB'
    } else if (league == 'nfl'){
      this.oddsList = this.nflList
      this.sportTitle = 'NFL'
    } else if (league == 'nba'){
      this.oddsList = this.nbaList
      this.sportTitle = 'NBA'
    } else {
      this.oddsList = this.nhlList
      this.sportTitle = 'NHL'
    }
  }
}
