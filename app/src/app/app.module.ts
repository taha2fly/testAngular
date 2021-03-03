import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches/launches.component';
import { CapsulesComponent } from './capsules/capsules/capsules.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    CapsulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
