import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomePageComponent } from './home-page.component';
import { NewReleasesComponent } from './pages/new-releases/new-releases.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { ViewMoreComponent } from './shared/view-more/view-more.component';
import { OfferComponent } from './pages/offer/offer.component';


@NgModule({
  declarations: [
    CarouselComponent,
    CategoriesComponent,
    HomePageComponent,
    NewReleasesComponent,
    FeaturedComponent,
    ViewMoreComponent,
    OfferComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
