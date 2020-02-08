// Type definitions for react-facebook-login 4.1
// Project: https://github.com/keppelen/react-facebook-login
// Definitions by: Alexandre Paré <https://github.com/apare>, Jan Karres <https://github.com/jankarres>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface ReactFacebookLoginProps {
    appId: string;
    callback(userInfo: ReactFacebookLoginInfo): void;
    onFailure?(response: ReactFacebookFailureResponse): void;

    autoLoad?: boolean;
    buttonStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    cookie?: boolean;
    cssClass?: string;
    disableMobileRedirect?: boolean;
    fields?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    language?: string;
    onClick?(event: React.MouseEvent<HTMLDivElement>): void;
    reAuthenticate?: boolean;
    redirectUri?: string;
    scope?: string;
    size?: "small" | "medium" | "metro";
    textButton?: string;
    typeButton?: string;
    version?: string;
    xfbml?: boolean;
    isMobile?: boolean;
    tag?: Node | React.Component<any>;
    returnScopes?: boolean;
    state?: string;
    authType?: string;
    responseType?: string;
}

export interface ReactFacebookFailureResponse {
    status?: string;
}

export interface ReactFacebookLoginInfo {
    id: string;
    accessToken: string;
    name?: string;
    email?: string;
    picture?: {
        data: {
          height?: number,
          is_silhouette?: boolean,
          url?: string,
          width?: number,
      },
    };
}

export interface ReactFacebookLoginState {
    isSdkLoaded?: boolean;
    isProcessing?: boolean;
}

export default class ReactFacebookLogin extends React.Component<
    ReactFacebookLoginProps,
    ReactFacebookLoginState
> {}
