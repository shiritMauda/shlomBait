import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { ManageService } from 'src/service/manage.service';
import { IUser } from 'src/app/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private manageService: ManageService, private router: Router) { }
  userId: number;
  userPassword: string;
  thisUser: IUser;
  msgError: string;
  title = {
    title: 'ברוכים הבאים! איזה כיף שבאתם',
    btn: 'כניסה'
  }
  ngOnInit() {
  }
  onClick() {
    this.thisUser = this.manageService.getThisUser(this.userId);
    console.log(this.thisUser);
    if (!this.thisUser) {
      this.msgError = 'תעודת הזהות לא קיימת במערכת';
    } else {
      if (this.thisUser.password === this.userPassword) {
        /* כניסה למערכת */
        const url = 'home/' + this.thisUser.id;
        this.router.navigate([url]);
      } else {
        this.msgError = 'הסיסמא אינה נכונה';
      }
    }
  }

}
