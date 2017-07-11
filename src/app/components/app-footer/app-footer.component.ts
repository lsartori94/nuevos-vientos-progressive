import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppfooterComponent {
    social: Array<any> = [
        {'logo': 'face'},
        {'logo': 'fingerprint'},
        {'logo': 'grade'}
    ]
    disclaimer: string = "ESTO ES UN DISCLAIMER";
}
