import { Component, trigger, transition, style, animate, state } from '@angular/core';

@Component({
    selector: 'app-shell',
    templateUrl: './app-shell.component.html',
    styleUrls: ['./app-shell.component.scss'],
    animations: [
        trigger(
        'modalAnimation',
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
export class AppShellComponent {

    private _assets = "../../../assets";
    showModal = false;

    hero = {
        "logo": `${this._assets}/icons/logo-nav.svg`,
        "title": "Nuevos Vientos"
    }

    navItems: Array<any> = [
        { "label": "home", "link": "/home"},
        { "label": "inscripciones", "link": "/enroll"},
    ]

    toggleModal() {
        this.showModal = !this.showModal;
    }

}
