import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { Parallax, ParallaxConfig  } from './parallax.directive';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Auth } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Parallax,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    Auth
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
