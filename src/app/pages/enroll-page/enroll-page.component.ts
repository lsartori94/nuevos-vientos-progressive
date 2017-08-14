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
  message = "Sumate a nuestra edición 2017. Si querés mostrar tu trabajo o participar en nuestro festival, podés hacerlo completando los siguientes formularios. Hay convocatorias para músicos, feriantes, fotógrafos, proyectos multimediales y más.";
  messageShout = "¡No te pierdas la oportunidad de formar parte del Festival Nuevos Vientos 2017!";

  buttons: Array<any> =[
    { "link": "https://goo.gl/a1WURD", "label": "quiero tocar en vivo" },
    { "link": "https://goo.gl/RQHDz9", "label": "quiero exponer" },
    { "link": "https://goo.gl/ACCnLg", "label": "quiero feriar" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
