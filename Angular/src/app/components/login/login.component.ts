import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'
// @ts-ignore
import OktaSignIn from '@okta/okta-signin-widget';
import myAppConfig from '../../config/my-app-config'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignin : any;

  constructor(private oktaAuthSerivce : OktaAuthService) {

    this.oktaSignin = new OktaSignIn({
      logo: 'assets/images/logo.png',
      features: {
        registration : true
      },
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId : myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scope: myAppConfig.oidc.scopes

      }

    });
  }

  ngOnInit(): void {
    this.oktaSignin.remove();

    this.oktaSignin.renderEl({
      el : '#okta-sign-in-widget'},
      (response: { status: string; }) => {
        if(response.status === 'SUCCESS') {
          this.oktaAuthSerivce.signInWithRedirect()
        }
      },
      (error : Error) => {
        throw error;
      }
      )
  }

}
