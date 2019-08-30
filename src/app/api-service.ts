import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userName: string;
  apiKey: string = 'environment.apiKey';
  
  apiUrl: string = "https://api.github.com/users/";


  constructor(public http: HttpClient) {
  this.userName = "wecode12";
  }

  getUserDetails() {
    return this.http.get(this.apiUrl + this.userName + "?access_token=" + environment.apiKey)
  }
  getRepos() {
    return this.http.get(this.apiUrl + this.userName + "/repos?access_token=" + environment.apiKey)
  }
  updateUserName(userName: string) {
    this.userName = userName;

  }
}