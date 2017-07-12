import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enroll-page',
  templateUrl: './enroll-page.component.html',
  styleUrls: ['./enroll-page.component.scss']
})
export class EnrollPageComponent implements OnInit {

  heroTitle = "nuevos vientos 2017";
  messageTitle = "convocatoria";
  message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  buttons: Array<any> =[
    { "link": "#", "label": "quiero tocar en vivo" },
    { "link": "#", "label": "quiero exponer" },
    { "link": "#", "label": "quiero vender" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
