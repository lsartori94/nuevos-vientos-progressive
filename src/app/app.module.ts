import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutableComponents } from './app.routing.module';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { AppfooterComponent } from './components/app-footer/app-footer.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutableComponents,
    AppShellComponent,
    AppfooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'nuevos-vientos-web'}),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
