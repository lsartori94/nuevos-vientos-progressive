import { Component, trigger, transition, style, animate, state, OnInit } from '@angular/core';

@Component({
  selector: 'enroll-page',
  templateUrl: './enroll-page.component.html',
  styleUrls: ['./enroll-page.component.scss'],
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
export class EnrollPageComponent implements OnInit {

  heroTitle = "nuevos vientos 2017";
  messageTitle = "convocatoria";
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  buttons: Array<any> =[
    { "link": "https://goo.gl/a1WURD", "label": "quiero tocar en vivo" },
    { "link": "https://goo.gl/RQHDz9", "label": "quiero exponer" },
    { "link": "https://goo.gl/ACCnLg", "label": "quiero vender" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
