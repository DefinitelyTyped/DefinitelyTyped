// Type definitions for react-facebook-login 3.4
// Project: https://github.com/keppelen/react-facebook-login
// Definitions by: Alexandre Paré <https://github.com/apare>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from "react";

declare namespace ReactFacebookLogin {
    interface ReactFacebookLoginProps {
        appId: string;
        callback: (userInfo: ReactFacebookLoginInfo) => void;

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
        onClick?: () => void;
        reAuthenticate?: boolean;
        redirectUri?: string;
        scope?: string;
        size?: "small" | "medium" | "metro";
        textButton?: string;
        typeButton?: string;
        version?: string;
        xfbml?: boolean;
    }

    interface ReactFacebookLoginInfo {
        id: string;
        name: string;
    }

    interface ReactFacebookLoginState {
        isSdkLoaded?: boolean;
        isProcessing?: boolean;
    }
}

declare class ReactFacebookLogin extends React.Component<ReactFacebookLogin.ReactFacebookLoginProps, ReactFacebookLogin.ReactFacebookLoginState> {}

export = ReactFacebookLogin;
