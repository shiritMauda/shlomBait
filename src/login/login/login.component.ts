import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  title = {
    title: 'ברוכים הבאים! איזה כיף שבאתם',
    btn: 'כניסה'
  }
  ngOnInit() {
  }

}
