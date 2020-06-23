import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManageService } from 'src/service/manage.service';
import { IUser } from 'src/app/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: number;
  thisUser: IUser;
  constructor(private activeRouter: ActivatedRoute, private router: Router, private manageService: ManageService) { }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

      if (!this.id) {
        /* login */
        const url = 'login';
        this.router.navigate([url]);
      } else {
        /* להביא את הUSER */
        this.manageService.getThisUser(this.id);
      }
    });

  }
}
