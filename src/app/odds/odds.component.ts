import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {
  @Input() game: any

  constructor() {

  }

  ngOnInit(): void {

  }

  hideButton(): void {
    let button = document.getElementById('oddsBtn')
    if(button != null){
      button.style.display = "none"
    }
  }
}
