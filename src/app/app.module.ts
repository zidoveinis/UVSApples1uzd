import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplesCompenent } from './apples-in-box/apples-in-box.component'
import { ApplesInBoxCounter } from './apples-in-box/apples-in-box-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplesCompenent,
    ApplesInBoxCounter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
