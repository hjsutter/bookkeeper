import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

let apiKey = '2a24d9b96c09d00f9b220a306b5d9f7a'
let sportKey = 'icehockey_nhl'
let regions ='us'
let markets = 'h2h'
let bookmakers = ['barstool', 'betus','betmgm', 'circasports', 'draftkings', 'fanduel', 'foxbet', 'mybookieag', 'pointsbetus', 'unibet']

@Component({
  selector: 'app-nhl-games',
  templateUrl: './nhl-games.component.html',
  styleUrls: ['./nhl-games.component.css']
})
export class NhlGamesComponent implements OnInit {

  oddsList: any[] = [];
  betLines: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
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

  viewOdds(i: number): void {
    this.betLines = [this.oddsList[i]];
    this.router.navigate(['/odds'], {state: {data: this.betLines}})
  }

}
