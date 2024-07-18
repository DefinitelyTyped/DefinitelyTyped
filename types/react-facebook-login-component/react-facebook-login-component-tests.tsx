import * as React from "react";
import { FacebookLogin, FacebookLoginInfo } from "react-facebook-login-component";

const handler = (response: FacebookLoginInfo) => {
    console.log(response.accessToken);
};

const ReactFacebookLoginComponent: React.JSX.Element = (
    <FacebookLogin
        socialId="1234567890000"
        responseHandler={handler}
    />
);

const ReactFacebookLoginComponentAllOptions: React.JSX.Element = (
    <FacebookLogin
        socialId="1234567890000"
        responseHandler={handler}
        xfbml
        version="2.5"
        fields="email,username"
        buttonText="Sign in with Facebook"
    />
);
