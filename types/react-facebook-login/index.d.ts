// Type definitions for react-facebook-login 3.6
// Project: https://github.com/keppelen/react-facebook-login
// Definitions by: Alexandre Paré <https://github.com/apare>, Jan Karres <https://github.com/jankarres>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

interface ReactFacebookLoginProps {
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
    icon?: string | React.ReactNode;
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
}

export interface ReactFacebookFailureResponse {
    status?: string;
}

export interface ReactFacebookLoginInfo {
    id: string;
    accessToken: string;
    name?: string;
    email?: string;
}

interface ReactFacebookLoginState {
    isSdkLoaded?: boolean;
    isProcessing?: boolean;
}

declare class ReactFacebookLogin extends React.Component<
    ReactFacebookLoginProps,
    ReactFacebookLoginState
> {}

export default ReactFacebookLogin;
