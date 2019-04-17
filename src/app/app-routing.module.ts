import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AwardComponent } from './award/award.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'award',
  component:AwardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
