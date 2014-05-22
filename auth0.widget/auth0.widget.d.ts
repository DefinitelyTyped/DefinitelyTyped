// Type definitions for Auth0Widget.js
// Project: Auth0.com
// Definitions by: Robert McLaws <https://github.com/advancedrei>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../auth0/auth0.d.ts" />


interface Auth0WidgetStatic {
    new(params: Auth0Constructor): Auth0WidgetStatic;

    getClient(): Auth0Static;
    getProfile(token: string, callback: Function): Auth0UserProfile;
    parseHash(hash: string): Auth0DecodedHash;
    reset(options: Auth0Options, callback?: Function): Auth0WidgetStatic;
    signin(options: Auth0Options, widgetLoadedCallback?: Function, popupCallback?: Function): Auth0WidgetStatic;
    signup(options: Auth0Options, callback: (error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: string) => any): Auth0WidgetStatic;
 }

interface Auth0Constructor extends Auth0ClientOptions {
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

declare module "Auth0Widget" {
    export = Auth0Widget
}