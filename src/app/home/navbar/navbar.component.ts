import { Component, OnInit } from '@angular/core';
export interface INav {
  path: string;
  label: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navs: INav[] = [
    { path: 'client', label: 'מטופלים' },
    { path: 'careLog', label: 'יומן טיפול' },
    { path: 'payment', label: 'מעקב תשלומים' },

  ];
  title = {
    title: 'ברוכים הבאים'
  }
  constructor() { }

  ngOnInit() {
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }






}


