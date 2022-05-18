import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated : boolean = false;
  userFullName : string | any ;
  constructor(private oktaAuthSerivce : OktaAuthService) { }

  ngOnInit(): void {

    //Subciribe
    this.oktaAuthSerivce.$authenticationState.subscribe(
      (result : any) => {
        this.isAuthenticated = result;
        this.getUserDetails();
      }
    );
  }
  getUserDetails() {
    if (this.isAuthenticated) {

      this.oktaAuthSerivce.getUser().then(
        (res: any) => {
          this.userFullName = res.name;
        }
      )
    }
  }

  logout(){

    this.oktaAuthSerivce.signOut();
  }
}
