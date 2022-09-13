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
  oddsRetrieved = false

  constructor() { }

  ngOnInit(): void {
    this.getOdds('baseball_mlb')
    // this.getOdds('basketball_nba')
    // this.getOdds('americanfootball_nfl')
    // this.getOdds('icehockey_nhl')
  //   this.oddsList = [   {
  //     "id": "bda33adca828c09dc3cac3a856aef176",
  //     "sport_key": "americanfootball_nfl",
  //     "commence_time": "2021-09-10T00:20:00Z",
  //     "home_team": "Tampa Bay Buccaneers",
  //     "away_team": "Dallas Cowboys",
  //     "bookmakers": [
  //         {
  //             "key": "unibet",
  //             "title": "Unibet",
  //             "last_update": "2021-06-10T13:33:18Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -303
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -109,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -111,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "caesars",
  //             "title": "Caesars",
  //             "last_update": "2021-06-10T13:33:48Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -278
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -110,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -110,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "sugarhouse",
  //             "title": "SugarHouse",
  //             "last_update": "2021-06-10T13:34:07Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -305
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -109,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -112,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "draftkings",
  //             "title": "DraftKings",
  //             "last_update": "2021-06-10T13:33:26Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -305
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -109,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -112,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "pointsbetus",
  //             "title": "PointsBet (US)",
  //             "last_update": "2021-06-10T13:36:20Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 230
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -291
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -110,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -110,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "betonlineag",
  //             "title": "BetOnline.ag",
  //             "last_update": "2021-06-10T13:37:29Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -286
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -105,
  //                             "point": 6
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -115,
  //                             "point": -6
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "betmgm",
  //             "title": "BetMGM",
  //             "last_update": "2021-06-10T13:32:45Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 225
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -275
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -110,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -110,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "betrivers",
  //             "title": "BetRivers",
  //             "last_update": "2021-06-10T13:35:33Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -305
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -109,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -112,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "fanduel",
  //             "title": "FanDuel",
  //             "last_update": "2021-06-10T13:33:23Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 225
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -275
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -110,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -110,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "barstool",
  //             "title": "Barstool Sportsbook",
  //             "last_update": "2021-06-10T13:34:48Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -305
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -109,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -112,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "bovada",
  //             "title": "Bovada",
  //             "last_update": "2021-06-10T13:35:51Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -290
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -110,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -110,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             "key": "williamhill_us",
  //             "title": "William Hill (US)",
  //             "last_update": "2021-06-10T13:34:10Z",
  //             "markets": [
  //                 {
  //                     "key": "h2h",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": 240
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -280
  //                         }
  //                     ]
  //                 },
  //                 {
  //                     "key": "spreads",
  //                     "outcomes": [
  //                         {
  //                             "name": "Dallas Cowboys",
  //                             "price": -110,
  //                             "point": 6.5
  //                         },
  //                         {
  //                             "name": "Tampa Bay Buccaneers",
  //                             "price": -110,
  //                             "point": -6.5
  //                         }
  //                     ]
  //                 }
  //             ]
  //         }
  //     ]
  // }]
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
    this.oddsRetrieved = true
  }
}
