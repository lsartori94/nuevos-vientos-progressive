import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppfooterComponent {

    private _assetsRoute = "../../../assets";
    private _fbURL = "http://google.com";
    private _instURL = "http://google.com";

    social: Array<any> = [
        {
            'logo': `${this._assetsRoute}/icons/facebook.svg`,
            'url': this._fbURL
        },
        {
            'logo': `${this._assetsRoute}/icons/instagram.svg`,
            'url': this._instURL
        }
    ]
    disclaimer: string = "®Nuevos Vientos";
}
