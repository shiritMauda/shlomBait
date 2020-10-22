import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { ManageService } from 'src/service/manage.service';
import { IUser } from 'src/app/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }
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

  login() {
    console.log('login');
    
    const requestToServer = this.service.login(this.userId,this.userPassword);

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('User from server', res);
      if (res) {
        this.service.setUser(res);
      } else {
        this.msgError = 'פרטים שגויים.  נסה שנית';
      }

    });

  }
//הפונקציה הקודת לפני הכנסת פניות לHTTP
/*   onClick() {
    this.thisUser = this.manageService.getThisUser(this.userId);
    console.log(this.thisUser);
    if (!this.thisUser) {
      this.msgError = 'תעודת הזהות לא קיימת במערכת';
    } else {
      if (this.thisUser.password === this.userPassword) {
        /* כניסה למערכת */
/*         const url = 'home/' + this.thisUser.id;
        this.router.navigate([url]);
      } else {
        this.msgError = 'הסיסמא אינה נכונה';
      }
    }
  }  */

}
