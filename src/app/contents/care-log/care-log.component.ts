import { Component, OnInit } from '@angular/core';
import { ICareLog } from './care-log.model';
import { ClientService } from 'src/client.service';
import { ActivatedRoute } from '@angular/router';
import { IClient } from '../client/client.model';

@Component({
  selector: 'app-care-log',
  templateUrl: './care-log.component.html',
  styleUrls: ['./care-log.component.scss']
})
export class CareLogComponent implements OnInit {
carelogs: ICareLog[];
 id: number;
 thisClient: IClient;
 title = {
   title: 'יומן טיפול- ',
 }
  constructor(private clientService: ClientService,private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.carelogs = this.clientService.getcareLogForClient(this.id);
      this.setClientDetails(this.id);
  });
  }

  setClientDetails(id: number){
    this.thisClient =  this.clientService.getClient(this.id);
  }

}
