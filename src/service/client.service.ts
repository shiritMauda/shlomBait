import { Injectable } from '@angular/core';
import { IClient } from '../app/contents/client/client.model';
import { ICareLog } from '../app/contents/care-log/care-log.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  _clients: IClient[] = [
    {
      id: 1,
      familyId: 1,
      firstname: 'נחום',
      lastname: 'לנדאו',
      email: 'nachum@',
      phone: '0523934514',
      image: '',
      relative: 1
    },
    {
      id: 2,
      familyId: 1,
      firstname: 'עידית',
      lastname: 'לנדאו',
      email: 'idit@',
      phone: '0523934597',
      image: '',
      relative: 2
    },
    {
      id: 3,
      familyId: 1,
      firstname: 'שירית',
      lastname: 'לנדאו',
      email: 'shirit@',
      phone: '0524474794',
      image: '',
      relative: 3
    },
    {
      id: 4,
      familyId: 4,
      firstname: 'אבישי',
      lastname: 'מעודה',
      email: 'avishay@',
      phone: '0546698986',
      image: '',
      relative: 1
    },
  ];
  _careLogs: ICareLog[] = [
    {
      id: 1,
      date: '01/01/20',
      summary: 'זה מה שהיה',
    },
    {
      id: 1,
      date: '01/02/20',
      summary: 'עוד סיכון מעניין',
    },
    {
      id: 2,
      date: '01/01/20',
      summary: 'מהמם',
    },
  ];



  constructor() { }
  get clients(): IClient[] {
    return this._clients;
  }
  get careLogs(): ICareLog[] {
    return this._careLogs;
  }

  getcareLogForClient(thisId: number): ICareLog[] {
    return this.careLogs.filter(({ id }) => id === thisId);
  }
  getClient(thisId: number): IClient {
    return this.clients.find(({ id }) => id === thisId);
  }
}
