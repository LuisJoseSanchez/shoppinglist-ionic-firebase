import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedIntoList = () => redirectLoggedInTo(['list']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module')
                          .then( m => m.ListPageModule),
                          canActivate: [AuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'create-item',
    loadChildren: () => import('./pages/form/form.module')
                          .then( m => m.FormPageModule),
                          canActivate: [AuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'edit-item/:id',
    loadChildren: () => import('./pages/form/form.module')
                          .then( m => m.FormPageModule),
                          canActivate: [AuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
                          .then( m => m.LoginPageModule),
                          canActivate: [AuthGuard],
                          data: { authGuardPipe: redirectLoggedIntoList }
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
