import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photo-fetcher',
  },
  {
    path: 'photo-fetcher',
    loadChildren: () =>
      import('./features/photo-fetcher/photo-fetcher.module').then(
        (m) => m.PhotoFetcherModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
