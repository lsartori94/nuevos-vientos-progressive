import { Component, trigger, transition, style, animate, state, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
        trigger(
        'pageAnimation',
        [
            transition(
                ':enter', [
                    style({opacity: 0}),
                    animate('250ms', style({'opacity': 1}))
            ]),
            transition(
                ':leave', [
                    style({'opacity': 1}),
                    animate('250ms', style({'opacity': 0}))
            ])]
        )
    ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
