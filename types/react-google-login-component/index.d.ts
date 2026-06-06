import * as React from "react";

export interface GoogleLoginInfo {
    getAuthResponse: () => {
        access_token: string;
    };
}

export interface GoogleLoginProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    socialId: string;
    scope?: string | undefined;
    fetchBasicProfile?: boolean | undefined;
    buttonText?: string | undefined;
    prompt?: string | undefined;
    responseHandler: (response: GoogleLoginInfo) => void;
}

export class GoogleLogin extends React.Component<GoogleLoginProps> {}
