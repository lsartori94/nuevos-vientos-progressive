import { Component } from '@angular/core';

@Component({
    selector: 'app-shell',
    templateUrl: './app-shell.component.html',
    styleUrls: ['./app-shell.component.scss']
    })
export class AppShellComponent {

    private _assets = "../../../assets/";

        hero = {
        "logo": `${this._assets}/icons/logo-nav.png`,
        "title": "Nuevos Vientos"
        }
}
