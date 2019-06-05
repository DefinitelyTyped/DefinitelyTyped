import { GoogleLogin, GoogleLoginInfo } from "react-google-login-component";
import * as React from "react";

const handler = (response: GoogleLoginInfo) => {
    console.log(response.getAuthResponse().access_token);
};

const ReactGoogleLoginComponent: JSX.Element = (
    <GoogleLogin
        socialId="1234567890000"
        responseHandler={handler}
    />
);

const ReactGoogleLoginComponentAllOptions: JSX.Element = (
    <GoogleLogin
        socialId="1234567890000"
        responseHandler={handler}
        scope="profile"
        fetchBasicProfile
        prompt="select_account"
        buttonText="Sign in with Google"
    />
);
