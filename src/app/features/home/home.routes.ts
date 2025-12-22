import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default homeRoutes;
