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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent
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
    MdInputModule
    ],
  providers: [
    appRoutingProviders,
    Auth,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
