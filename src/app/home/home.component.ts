import { Component, OnInit } from '@angular/core';
import { Parallax, ParallaxConfig  } from '../parallax.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    parallaxConfig: ParallaxConfig = {
        initialValue: 0,
        ratio: .3
    };

  constructor() { }

  ngOnInit() {
  }

}
