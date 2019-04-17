import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule , MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AwardComponent } from './award/award.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwardComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
