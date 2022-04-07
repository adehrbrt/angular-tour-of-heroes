import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Mao root path, redirect to /dashboard path and match the redirect in full.
  { path: 'dashboard', component: DashboardComponent }, // Map path dashboard to DashboardComponent.
  { path: 'detail/:id', component: HeroDetailComponent }, // Map path detail/:id to HeroDetailComponent.
  { path: 'heroes', component: HeroesComponent } // Map heroes path to HeroesComponent.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
