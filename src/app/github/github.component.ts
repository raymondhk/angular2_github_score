import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  current_user = [];
  user = {
    username: '',
  };
  score;
  error;


  constructor(private _userService: UsersService) {
  }
    userName(myForm) {
      const self = this;
      // console.log(this.current_user);
      this._userService.retrieveUser(this.user.username, function(user){
        console.log(user);
        self.error = false;
        self.score = user.public_repos + user.followers;
        self.current_user.push(user);
      });
      this.error = true;
      this.score = null;

      // console.log(self.user);
      // this.current_user.push(this._userService.user);
      // console.log(this._userService.user);
      // console.log(this.current_user);
      // console.log(this.score);

      myForm.reset();
      myForm.form.markAsPristine();
      myForm.form.markAsUntouched();
    }

  ngOnInit() {
  }

}
