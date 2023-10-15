import * as React from "react";
import { FacebookLogin, FacebookLoginInfo } from "react-facebook-login-component";

const handler = (response: FacebookLoginInfo) => {
    console.log(response.accessToken);
};

const ReactFacebookLoginComponent: JSX.Element = (
    <FacebookLogin
        socialId="1234567890000"
        responseHandler={handler}
    />
);

const ReactFacebookLoginComponentAllOptions: JSX.Element = (
    <FacebookLogin
        socialId="1234567890000"
        responseHandler={handler}
        xfbml
        version="2.5"
        fields="email,username"
        buttonText="Sign in with Facebook"
    />
);
