import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
