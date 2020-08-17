import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplesInBoxCounter } from './apples-in-box/apples-in-box-counter.component';

const routes: Routes = [
  { path: '', redirectTo: '/apples', pathMatch: 'full' },
  { path: 'apples', component: ApplesInBoxCounter },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
