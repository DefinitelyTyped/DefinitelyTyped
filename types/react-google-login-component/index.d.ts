// Type definitions for react-google-login-component 0.9
// Project: https://github.com/kennetpostigo/react-google-login-component
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactDOM from "react-dom";

export interface GoogleLoginInfo {
    getAuthResponse: () => {
        access_token: string;
    };
}

export interface GoogleLoginProps extends ReactDOM.ButtonHTMLAttributes<HTMLButtonElement> {
    socialId: string;
    scope?: string;
    fetchBasicProfile?: boolean;
    buttonText?: string;
    prompt?: string;
    responseHandler: (response: GoogleLoginInfo) => void;
}

export class GoogleLogin extends React.Component<GoogleLoginProps> {}
