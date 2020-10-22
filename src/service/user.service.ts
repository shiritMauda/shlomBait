import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user) {
    console.log('email:' + user.username + 'password:' + user.password);
    this.url = this.baseApi + 'User';
    return this.http.post<IUser>(this.url, user);

  }
}
