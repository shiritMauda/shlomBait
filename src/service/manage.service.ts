import { Injectable } from '@angular/core';

import { IUser } from 'src/app/user.model';
@Injectable({
  providedIn: 'root'
})
export class ManageService {
_users: IUser[] = [
{
  id: 1,
  firstName: 'shirit',
  lastName: 'mauda',
  password: '1234',
  email: 'shirit@',
},
{
  id: 2,
  firstName: 'avishay',
  lastName: 'mauda',
  password: '1234',
  email: 'avishay@',
},
];
  constructor() { }
  getThisUser(thisId: number): IUser{
    return this._users.find(({ id }) => id === thisId);
  }
}
