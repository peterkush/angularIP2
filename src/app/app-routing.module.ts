import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../app/user/user.component'
import { AboutComponent } from '../app/about/about.component'
import { NotFoundComponent } from '../app/not-found/not-found.component'


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
     