/// <reference types="auth0-js" />

interface Auth0WidgetStatic {
    new(params: Auth0Constructor): Auth0WidgetStatic;

    getClient(): import("auth0-js").Authentication;
    getProfile(token: string, callback: Function): import("auth0-js").Auth0UserProfile;
    parseHash(hash: string): import("auth0-js").Auth0DecodedHash;
    reset(options: Auth0Options, callback?: Function): Auth0WidgetStatic;
    signin(options: Auth0Options, widgetLoadedCallback?: Function, popupCallback?: Function): Auth0WidgetStatic;
    signup(
        options: Auth0Options,
        callback: (
            error?: import("auth0-js").Auth0Error,
            profile?: import("auth0-js").Auth0UserProfile,
            id_token?: string,
            access_token?: string,
            state?: string,
        ) => any,
    ): Auth0WidgetStatic;
}

type ClientOptions = import("auth0-js").AuthOptions;
interface Auth0Constructor extends ClientOptions {
    assetsUrl?: string | undefined;
    cdn?: string | undefined;
    dict?: any;
}

interface Auth0Options {
    access_token?: string | undefined;
    connections?: string[] | undefined;
    container?: string | undefined;
    enableReturnUserExperience?: boolean | undefined;
    extraParameters?: any;
    icon?: string | undefined;
    protocol?: string | undefined;
    request_id?: string | undefined;
    scope?: string | undefined;
    showIcon?: boolean | undefined;
    showForgot?: boolean | undefined;
    showSignup?: boolean | undefined;
    state?: any;
    userPwdConnectionName?: string | undefined;
    username_style?: string | undefined;
}

declare var Auth0Widget: Auth0WidgetStatic;
