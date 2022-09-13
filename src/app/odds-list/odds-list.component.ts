import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odds-list',
  templateUrl: './odds-list.component.html',
  styleUrls: ['./odds-list.component.css']
})
export class OddsListComponent implements OnInit {

  @Input() oddsList: any[] = []
  @Input() sportTitle: string = ''
  @Input() oddsRetrieved: boolean | undefined
  betLines: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sportTitle = this.oddsList[0].sport_title
  }

  viewOdds(i: number): void {
    this.betLines = [this.oddsList[i]];
    this.router.navigate(['/odds'], {state: {data: this.betLines}})
  }

}
