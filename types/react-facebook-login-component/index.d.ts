// Type definitions for react-facebook-login-component 4.1
// Project: https://github.com/kennetpostigo/react-facebook-login-component
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface FacebookLoginInfo {
    id: string;
    accessToken: string;
    name?: string | undefined;
    email?: string | undefined;
}

export interface FacebookLoginProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    socialId: string;
    xfbml?: boolean | undefined;
    version?: string | undefined;
    fields?: string | undefined;
    buttonText?: string | undefined;
    responseHandler: (response: FacebookLoginInfo) => void;
}

export class FacebookLogin extends React.Component<FacebookLoginProps> {}
