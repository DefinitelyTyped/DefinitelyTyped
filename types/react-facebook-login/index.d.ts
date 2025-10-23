import * as React from "react";

export interface ReactFacebookLoginProps {
    appId: string;
    callback(userInfo: ReactFacebookLoginInfo | ReactFacebookFailureResponse): void;
    onFailure?(response: ReactFacebookFailureResponse): void;

    autoLoad?: boolean | undefined;
    buttonStyle?: React.CSSProperties | undefined;
    containerStyle?: React.CSSProperties | undefined;
    cookie?: boolean | undefined;
    cssClass?: string | undefined;
    disableMobileRedirect?: boolean | undefined;
    fields?: string | undefined;
    icon?: React.ReactNode | undefined;
    isDisabled?: boolean | undefined;
    language?: string | undefined;
    onClick?(event: React.MouseEvent<HTMLDivElement>): void;
    reAuthenticate?: boolean | undefined;
    redirectUri?: string | undefined;
    scope?: string | undefined;
    size?: "small" | "medium" | "metro" | undefined;
    textButton?: string | undefined;
    typeButton?: string | undefined;
    version?: string | undefined;
    xfbml?: boolean | undefined;
    isMobile?: boolean | undefined;
    tag?: Node | React.Component<any> | undefined;
    returnScopes?: boolean | undefined;
    state?: string | undefined;
    authType?: string | undefined;
    responseType?: string | undefined;
}

export interface ReactFacebookFailureResponse {
    status?: string | undefined;
}

export interface ReactFacebookLoginInfo {
    id: string;
    userID: string;
    accessToken: string;
    name?: string | undefined;
    email?: string | undefined;
    picture?:
        | {
            data: {
                height?: number | undefined;
                is_silhouette?: boolean | undefined;
                url?: string | undefined;
                width?: number | undefined;
            };
        }
        | undefined;
}

export interface ReactFacebookLoginState {
    isSdkLoaded?: boolean | undefined;
    isProcessing?: boolean | undefined;
}

export default class ReactFacebookLogin extends React.Component<ReactFacebookLoginProps, ReactFacebookLoginState> {}
