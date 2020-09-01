import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component'
import { Routes, RouterModule } from '@angular/router';
import { StoreMenuResolver } from 'src/app/_guards/store-menu-resolver';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'stores/:id',
    resolve: {store: StoreMenuResolver},
    component: DashboardContainerComponent,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./restaurant-menu/restaurant-menu.module').then(m => m.RestaurantMenuModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./store-profile/store-profile.module').then(m => m.StoreProfileModule)
      },
    ],
  },
]
const dashboardRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [DashboardComponent, DashboardContainerComponent],
  imports: [
    CommonModule,
    dashboardRouting
  ],
  providers: [StoreMenuResolver]
})
export class DashboardModule { }
