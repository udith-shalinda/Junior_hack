import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwardComponent } from './award/award.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EventComponent } from './timeline/event/event.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'award',
  component:AwardComponent
},{
  path:'timeline',
  component:TimelineComponent,
  children:[{
    path:'event',
    component:EventComponent
  }]
},{
  path:'contact',
  component:ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
