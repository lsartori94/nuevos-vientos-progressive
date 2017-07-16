import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppfooterComponent {

    private _assetsRoute = "../../../assets";
    private _fbURL = "https://goo.gl/VfH4dN";
    private _instURL = "https://goo.gl/tq7KFy";
    private _twURL = "https://goo.gl/xoaEF9";

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
