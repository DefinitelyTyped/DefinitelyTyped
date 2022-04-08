// Type definitions for Auth0Widget.js
// Project: http://auth0.com
// Definitions by: Robert McLaws <https://github.com/advancedrei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="auth0-js" />

interface Auth0WidgetStatic {
    new(params: Auth0Constructor): Auth0WidgetStatic;

    getClient(): import("auth0-js").Authentication;
    getProfile(token: string, callback: Function): import("auth0-js").Auth0UserProfile;
    parseHash(hash: string): import("auth0-js").Auth0DecodedHash;
    reset(options: Auth0Options, callback?: Function): Auth0WidgetStatic;
    signin(options: Auth0Options, widgetLoadedCallback?: Function, popupCallback?: Function): Auth0WidgetStatic;
    signup(options: Auth0Options, callback: (error?: import("auth0-js").Auth0Error, profile?: import("auth0-js").Auth0UserProfile, id_token?: string, access_token?: string, state?: string) => any): Auth0WidgetStatic;
 }

type ClientOptions = import("auth0-js").AuthOptions;
interface Auth0Constructor extends ClientOptions {
     assetsUrl?: string;
     cdn?: string;
     dict?: any;
 }

interface Auth0Options {
     access_token?: string;
     connections?: string[];
     container?: string;
     enableReturnUserExperience?: boolean;
     extraParameters?: any;
     icon?: string;
     protocol?: string;
     request_id?: string;
     scope?: string;
     showIcon?: boolean;
     showForgot?: boolean;
     showSignup?: boolean;
     state?: any;
     userPwdConnectionName?: string;
     username_style?: string;
}

declare var Auth0Widget: Auth0WidgetStatic;
