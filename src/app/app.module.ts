import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Auth } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import * as d3 from 'd3';
// import { UserListComponent } from './user-list/user-list.component';
import {
  MdSidenavModule,
  MdButtonModule,
  MdToolbarModule,
  MdIconModule,
  MdGridListModule,
  MdCardModule,
  MdMenuModule,
  MdTabsModule,
  MdInputModule

} from '@angular/material';
import { SidbarnavLinksComponent } from './navbar/sidbarnav-links/sidbarnav-links.component';
import { LocationsComponent } from './locations/locations.component';
import { D3BarGraphComponent } from './d3-bar-graph/d3-bar-graph.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MapComponent } from './locations/map/map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    SidbarnavLinksComponent,
    LocationsComponent,
    D3BarGraphComponent,
    GraphsComponent,
    MapComponent
    // UserListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdCardModule,
    MdMenuModule,
    MdTabsModule,
    MdInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmBfBqrgXymd47v7N_u9dBzxLanZBi1CI'
    })
    ],
  providers: [
    appRoutingProviders,
    Auth,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
