import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boards = [];
  constructor() { }

  ngOnInit(): void {

    this.boards = [
      {
        name:"Mt. Crawford Planning Commission",
        members:[
          {name:"Tasha Hoover"},
          {name:"Xan Stevens"},
          {name:"Jennifer Frederick"},
          {name:"Chris Campbell"},
          {name:"Claire Walsh"},
        ]
      },
      {
        name:"Mt. Crawford Board of Zoning Appeals",
        members:[
          {name:"Kathy Campbell"},
          {name:"Bret Hart"},
          {name:"John Overacker"},
          {name:"Bobby Taylor"},
        ]
      },
      {
        name:"Economic Development Authority",
        members:[
          {name:"Robert Taylor"},
          {name:"Leland Stevens"},
          {name:"Toni Ray"},
        ]
      }
    ]
  }

}
