
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { options } from './app.options'

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('dh_MHmx5mK5h8QSLW9rZ5l_RASIXziNV', 'away.auth0.com', options, {});
  userProfile: Object;
  // Lock instance to launch a login to obtain the secondary JWT
  // lockLink = new Auth0Lock('dh_MHmx5mK5h8QSLW9rZ5l_RASIXziNV', 'away.auth0.com', {
  //   auth: {
  //     params: {
  //       state: 'linking'
  //     }
  //   },
  //   allowedConnections: ['Username-Password-Authentication', 'facebook', 'google-oauth2'],
  //   languageDictionary: { // allows to override dictionary entries
  //     title: 'Link with:'
  //   }
  // });

  constructor() {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
        // if ( authResult.state !== 'linking' ) {
        //   localStorage.setItem('id_token', authResult.idToken);
        //   this.fetchProfile(authResult.idToken);
        // }
        localStorage.setItem('id_token', authResult.idToken);
        this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          throw new Error(error);
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;

      });
    });
//     // Add callback for lockLink `authenticated` event
//      this.lockLink.on("authenticated", (authResult) => {
//   // Every lock instance listens to the same event, so you have to check if
//   // it's the linking login here.
//   if(authResult.state == "linking"){
//     // If it's the linking login, then create the link through the API.
//     this.doLinkAccounts(authResult.idToken);
//   }
// });
  }


  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('id_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;

  }
} 
