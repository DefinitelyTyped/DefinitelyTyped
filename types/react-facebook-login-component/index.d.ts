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
