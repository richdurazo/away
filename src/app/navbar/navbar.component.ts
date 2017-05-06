import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    profile: any;

  constructor(private auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }

  ngOnInit() {
  }

}
