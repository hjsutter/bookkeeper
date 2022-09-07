import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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
  constructor() {

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

  viewDetails(index: any): void {
    console.log(index)
    console.log(this.oddsList[index])

  }
}
