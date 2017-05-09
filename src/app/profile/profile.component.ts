import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: Auth) {

  }

  ngOnInit() {
  }

}
