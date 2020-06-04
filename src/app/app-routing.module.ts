import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path:'login', component:LoginComponent
},
  {
  path:'', component:DefaultComponent,
  children:[{
    path:'', component:DashboardComponent
  },
  {
    path:'posts', component:PostsComponent
  },
  {
    path:'articles', component:ArticlesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
