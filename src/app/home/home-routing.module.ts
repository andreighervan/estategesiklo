import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalStylesComponent } from '../global-styles/global-styles.component';

import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'global', component: GlobalStylesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
