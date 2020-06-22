import { Component, OnInit } from '@angular/core';
import { IClient } from './client.model';
import { ClientService } from 'src/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: IClient[];
title = {
  title: 'רשימת מטופלים',
}
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.clients = this.getAllClient();
  }
  getAllClient(): IClient[] {
    return this.clientService.clients;
  }
  openCareLog(id) {
    console.log(id);
    const url = 'careLog/' + id;
    this.router.navigate([url]);

  }
}
