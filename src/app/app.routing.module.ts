import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { EnrollPageComponent } from './pages/enroll-page/enroll-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'enroll', component: EnrollPageComponent },
    { path: '**', redirectTo: 'home'}
];

export const RoutableComponents = [
    HomePageComponent,
    EnrollPageComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }