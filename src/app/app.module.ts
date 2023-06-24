import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { CarouselComponent } from './home-page/pages/carousel/carousel.component';
import { CategoriesComponent } from './home-page/pages/categories/categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewReleasesComponent } from './home-page/pages/new-releases/new-releases.component';
import { FeaturedComponent } from './home-page/pages/featured/featured.component';
import { ViewMoreComponent } from './home-page/shared/view-more/view-more.component';
import { OfferComponent } from './home-page/pages/offer/offer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CollectionsComponent } from './home-page/pages/collections/collections.component';
import { BooksModule } from './books/books.module';




@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    CarouselComponent,
    CategoriesComponent,
    HomePageComponent,
    NewReleasesComponent,
    FeaturedComponent,
    ViewMoreComponent,
    OfferComponent,
    HeaderComponent,
    FooterComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    BooksModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
