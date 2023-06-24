import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/pages/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CollectionsComponent } from './home-page/pages/collections/collections.component';
import { SingleBookPageComponent } from './single-book-page/single-book-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "auth", component: LoginComponent },
  { path: "collection", component: CollectionsComponent },
  { path: "books/:id", component: SingleBookPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
