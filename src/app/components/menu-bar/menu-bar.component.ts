import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', './menu-bar.responsive.component.css']
})
export class MenuBarComponent implements OnInit {

  checkboxValue: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
    this.checkboxValue = true
  }

  closeMenu() {
    this.checkboxValue = false
  }
}
