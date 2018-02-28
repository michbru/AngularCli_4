import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BootTableComponent} from './boot-table/boot-table.component';
import {ProductsComponent} from './products/products.component';
import {HomeComponent} from './home/home.component';
import {SoonComponent} from './soon/soon.component';
import {StepsComponent} from './steps/steps.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'boot-table',
    component: BootTableComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'steps',
    component: StepsComponent
  },
  { path: '**', component: SoonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
