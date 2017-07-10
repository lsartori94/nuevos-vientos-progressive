import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutableComponents } from './app.routing.module';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutableComponents,
    AppShellComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'nuevos-vientos-web'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
