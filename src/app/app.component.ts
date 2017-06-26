import { Component, ViewChild } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isClosed: boolean;
  isOpen: boolean;
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
  hamburgerCross() {
    if (this.isClosed === true) {
      this.isClosed = false;
      this.isOpen = true;
    } else {
      this.isClosed = true;
      this.isOpen = false;
    }
  }
}
