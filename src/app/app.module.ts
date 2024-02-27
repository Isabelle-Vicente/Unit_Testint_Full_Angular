import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './testing05_component/home/home.component';
import { CaseTestComponent } from './case-test/case-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
