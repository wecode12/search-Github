import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api-service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  user1;
  repos;
  userName: string;
  apiKey: string = 'environment.apiKey';

  constructor(public apiservice: ApiService, private router: Router) {

    this.apiservice.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  findUser() {
    this.apiservice.updateUserName(this.userName);
    this.apiservice.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.apiservice.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  ngOnInit() {
    

  }

}