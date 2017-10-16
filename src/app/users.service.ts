import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {
  user = [];

  constructor(private _http: Http) {}
    retrieveUser(user, callback) {
      this._http.get(`https://api.github.com/users/${user}`).subscribe(
        (response) => {
          this.user = response.json();
          console.log(this.user);
          callback(this.user);
          return this.user;
        },
        (error) => {
          this.user = error.json();
          return this.user;
        }
      );

  }

}
