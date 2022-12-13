import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './components/property/property-card/property-card.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HousingService } from './services/housing.service';
import { FavoritePropertiesComponent } from './components/property/favorite-properties/favorite-properties.component';
import { Route, RouterModule, Routes } from '@angular/router';

// mapping to map URLs to diff. components
// path is url path you want to be, it doesn't depend on the component selector
const appRoutes: Routes = [
  // default routing
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: 'favourite-properties',
    component: FavoritePropertiesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    FavoritePropertiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
