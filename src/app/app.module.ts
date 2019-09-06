import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScrollEventModule } from 'ngx-scroll-event';


import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule , MatButtonModule, MatIconModule, MatSidenavModule, MatButtonToggleModule, MatCardModule, MatStepperModule, MatInputModule, MatGridListModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AwardComponent } from './award/award.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EventComponent } from './timeline/event/event.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwardComponent,
    TimelineComponent,
    EventComponent,
    ContactComponent,
    FooterComponent,
    MainPageComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollEventModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
