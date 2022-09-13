import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OddsComponent } from './odds/odds.component';
import { OddsListComponent } from './odds-list/odds-list.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'odds', component: OddsComponent},
  {path: 'odds-list', component: OddsListComponent},
  {path: '**', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
