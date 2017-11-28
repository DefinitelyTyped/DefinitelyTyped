// Type definitions for auth0-lock 10.16
// Project: http://auth0.com
// Definitions by: Brian Caruso <https://github.com/carusology>
//                 Dan Caddigan <https://github.com/goldcaddy77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="auth0-js" />

interface Auth0LockAdditionalSignUpFieldOption {
  value: string;
  label: string;
}

type Auth0LockAdditionalSignUpFieldOptionsCallback =
    (error: auth0.Auth0Error, options: Auth0LockAdditionalSignUpFieldOption[]) => void;

type Auth0LockAdditionalSignUpFieldOptionsFunction =
    (callback: Auth0LockAdditionalSignUpFieldOptionsCallback) => void;

type Auth0LockAdditionalSignUpFieldPrefillCallback =
    (error: auth0.Auth0Error, prefill: string) => void;

type Auth0LockAdditionalSignUpFieldPrefillFunction =
    (callback: Auth0LockAdditionalSignUpFieldPrefillCallback) => void;

interface Auth0LockAdditionalSignUpField {
    icon?: string;
    name: string;
    options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction;
    placeholder: string;
    prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction;
    type?: "select" | "text";
    validator?: (input: string) => { valid: boolean; hint?: string };
}

type Auth0LockAvatarUrlCallback = (error: auth0.Auth0Error, url: string) => void;
type Auth0LockAvatarDisplayNameCallback = (error: auth0.Auth0Error, displayName: string) => void;

interface Auth0LockAvatarOptions {
    url: (email: string, callback: Auth0LockAvatarUrlCallback) => void;
    displayName: (email: string, callback: Auth0LockAvatarDisplayNameCallback) => void;
}

interface Auth0LockThemeButton {
    displayName: string;
    primaryColor?: string;
    foregroundColor?: string;
    icon?: string;
}
interface Auth0LockThemeButtonOptions {
    [provider: string]: Auth0LockThemeButton;
}

interface Auth0LockThemeOptions {
    authButtons?: Auth0LockThemeButtonOptions;
    labeledSubmitButton?: boolean;
    logo?: string;
    primaryColor?: string;
}

// https://auth0.com/docs/libraries/lock/v10/sending-authentication-parameters
interface Auth0LockAuthParamsOptions {
    access_token?: any;
    connection_scopes?: any;
    device?: any;
    nonce?: any;
    protocol?: any;
    request_id?: any;
    scope?: string;
    state?: string;
}

interface Auth0LockAuthOptions {
    params?: Auth0LockAuthParamsOptions;
    redirect?: boolean;
    redirectUrl?: string;
    responseType?: string;
    sso?: boolean;
    audience?: string;
}

interface Auth0LockPopupOptions {
    width: number;
    height: number;
    left: number;
    top: number;
}

interface Auth0LockConstructorOptions {
    additionalSignUpFields?: Auth0LockAdditionalSignUpField[];
    allowedConnections?: string[];
    allowForgotPassword?: boolean;
    allowLogin?: boolean;
    allowSignUp?: boolean;
    assetsUrl?: string;
    auth?: Auth0LockAuthOptions;
    autoclose?: boolean;
    autofocus?: boolean;
    avatar?: Auth0LockAvatarOptions;
    closable?: boolean;
    container?: string;
    defaultADUsernameFromEmailPrefix?: string;
    defaultDatabaseConnection?: string;
    defaultEnterpriseConnection?: string;
    forgotPasswordLink?: string;
    initialScreen?: "login" | "signUp" | "forgotPassword";
    language?: string;
    languageDictionary?: any;
    loginAfterSignUp?: boolean;
    mustAcceptTerms?: boolean;
    popupOptions?: Auth0LockPopupOptions;
    prefill?: { email?: string, username?: string};
    rememberLastLogin?: boolean;
    signupLink?: string;
    socialButtonStyle?: "big" | "small";
    theme?: Auth0LockThemeOptions;
    usernameStyle?: string;
    oidcConformant?: boolean;
}

interface Auth0LockFlashMessageOptions {
    type: "success" | "error";
    text: string;
}

interface Auth0LockShowOptions {
    allowedConnections?: string[];
    allowForgotPassword?: boolean;
    allowLogin?: boolean;
    allowSignUp?: boolean;
    auth?: Auth0LockAuthOptions;
    initialScreen?: "login" | "signUp" | "forgotPassword";
    flashMessage?: Auth0LockFlashMessageOptions;
    rememberLastLogin?: boolean;
}

interface AuthResult {
    accessToken: string;
    idToken: string;
    idTokenPayload: {
        aud: string;
        exp: number;
        iat: number;
        iss: string;
        sub: string;
    };
    refreshToken?: string;
    state: string;
}

interface Auth0LockStatic {
    new (clientId: string, domain: string, options?: Auth0LockConstructorOptions): Auth0LockStatic;

    // deprecated
    getProfile(token: string, callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void;
    getUserInfo(token: string, callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void;
    checkSession(options: any, callback: (error: auth0.Auth0Error, authResult: AuthResult | undefined) => void): void;
    // https://github.com/auth0/lock#resumeauthhash-callback
    resumeAuth(hash: string, callback: (error: auth0.Auth0Error, authResult: AuthResult) => void): void;
    show(options?: Auth0LockShowOptions): void;
    hide(): void;
    logout(query: any): void;

    on(event: "show" | "hide", callback: () => void): void;
    on(event: "unrecoverable_error" | "authorization_error", callback: (error: auth0.Auth0Error) => void): void;
    on(event: "authenticated", callback: (authResult: AuthResult) => void): void;
    on(event: string, callback: (...args: any[]) => void): void;
}

declare var Auth0Lock: Auth0LockStatic;

declare module "auth0-lock" {
    export default Auth0Lock;
}
