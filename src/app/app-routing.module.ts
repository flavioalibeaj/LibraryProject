import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/auth/pages/login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CollectionsComponent } from './home-page/pages/collections/collections.component';

const routes: Routes = [
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "auth", component: LoginComponent },
  { path: "collection", component: CollectionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
