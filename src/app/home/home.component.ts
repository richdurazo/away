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
    parallaxConfig1: ParallaxConfig = {
      initialValue: 0,
        ratio: .02
    };
      parallaxConfig3: ParallaxConfig = {
      initialValue: 50,
        ratio: .02
    };
  constructor() { }

  ngOnInit() {
  }

}
