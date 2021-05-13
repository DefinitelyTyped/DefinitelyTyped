// Type definitions for auth0-lock 11.27
// Project: http://auth0.com, https://github.com/auth0/lock
// Definitions by: Brian Caruso <https://github.com/carusology>
//                 Dan Caddigan <https://github.com/goldcaddy77>
//                 Larry Faudree <https://github.com/lfaudreejr>
//                 Will Caulfield <https://github.com/willcaul>
//                 Thomas Pearson <https://github.com/xsv24>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

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

interface Auth0LockAdditionalTextSignUpField {
    type?: "text";
    icon?: string;
    name: string;
    options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction;
    placeholder: string;
    prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction;
    validator?: (input: string) => { valid: boolean; hint?: string };
    storage?: "root";
}

interface Auth0LockAdditionalSelectSignUpField {
    type?: "select";
    icon?: string;
    name: string;
    options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction;
    placeholder: string;
    prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction;
    validator?: (input: string) => { valid: boolean; hint?: string };
    storage?: "root";
}

interface Auth0LockAdditionalCheckboxSignUpField {
    type?: "checkbox";
    icon?: string;
    name: string;
    placeholder: string;
    prefill: "true" | "false";
    validator?: (input: string) => { valid: boolean, hint?: string };
    storage?: "root";
}

interface Auth0LockAdditionalHiddenSignUpField {
    type?: "hidden";
    name: string;
    value: string;
    storage?: "root";
}

type Auth0LockAdditionalSignUpField = Auth0LockAdditionalSelectSignUpField |Auth0LockAdditionalTextSignUpField |Auth0LockAdditionalCheckboxSignUpField |Auth0LockAdditionalHiddenSignUpField;

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
    hideMainScreenTitle?: boolean;
    labeledSubmitButton?: boolean;
    logo?: string;
    primaryColor?: string;
}

// https://auth0.com/docs/libraries/lock/v10/sending-authentication-parameters
interface Auth0LockAuthParamsOptions {
    access_token?: any;
    connection_scope?: any;
    device?: any;
    nonce?: any;
    protocol?: any;
    request_id?: any;
    scope?: string;
    state?: string;
    [key: string]: any; // Auth0 rules can use custom params.
}

interface Auth0LockAuthOptions {
    autoParseHash?: boolean;
    params?: Auth0LockAuthParamsOptions;
    redirect?: boolean;
    redirectUrl?: string;
    responseMode?: string;
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
    allowAutocomplete?: boolean;
    allowForgotPassword?: boolean;
    allowLogin?: boolean;
    allowPasswordAutocomplete?: boolean;
    allowSignUp?: boolean;
    allowShowPassword?: boolean;
    assetsUrl?: string;
    auth?: Auth0LockAuthOptions;
    autoclose?: boolean;
    autofocus?: boolean;
    avatar?: Auth0LockAvatarOptions | null;
    clientBaseUrl?: string;
    closable?: boolean;
    configurationBaseUrl?: string;
    container?: string;
    defaultADUsernameFromEmailPrefix?: boolean;
    defaultDatabaseConnection?: string;
    defaultEnterpriseConnection?: string;
    flashMessage?: Auth0LockFlashMessageOptions;
    forgotPasswordLink?: string;
    hashCleanup?: boolean;
    initialScreen?: "login" | "signUp" | "forgotPassword";
    language?: string;
    languageBaseUrl?: string;
    languageDictionary?: any;
    leeway?: number;
    loginAfterSignUp?: boolean;
    mustAcceptTerms?: boolean;
    oidcConformant?: boolean;
    popupOptions?: Auth0LockPopupOptions;
    prefill?: { email?: string, username?: string};
    rememberLastLogin?: boolean;
    scrollGlobalMessagesIntoView?: boolean;
    signupLink?: string;
    socialButtonStyle?: "big" | "small";
    theme?: Auth0LockThemeOptions;
    usernameStyle?: string;
    _enableImpersonation?: boolean;
    _enableIdPInitiatedLogin?: boolean;
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
    languageDictionary?: any;
}

interface Auth0IdTokenPayload {
    name?: string;
    nickname?: string;
    picture?: string;
    email?: string;
    email_verified?: boolean;
    aud: string;
    exp: number;
    iat: number;
    iss: string;
    sub: string;
    acr?: string;
    amr?: string[];
    [key: string]: any;
}

interface AuthResult {
    accessToken: string;
    appState?: any;
    expiresIn: number;
    idToken: string;
    idTokenPayload: Auth0IdTokenPayload;
    refreshToken?: string;
    scope?: string;
    state: string;
    tokenType: string;
}

interface Auth0LockCore {
    // deprecated
    getProfile(token: string, callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void;
    getUserInfo(token: string, callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void;
    checkSession(options: Auth0LockAuthParamsOptions, callback: (error: auth0.Auth0Error, authResult: AuthResult | undefined) => void): void;
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

interface Auth0LockStatic extends Auth0LockCore {
    new (clientId: string, domain: string, options?: Auth0LockConstructorOptions): Auth0LockStatic;
}

// additional options for passwordless mode
interface Auth0LockPasswordlessConstructorOptions extends Auth0LockConstructorOptions {
    passwordlessMethod?: string;
}

interface Auth0LockPasswordlessStatic extends Auth0LockCore {
    new (clientId: string, domain: string, options?: Auth0LockPasswordlessConstructorOptions): Auth0LockPasswordlessStatic;
}

declare module "auth0-lock" {
    export default Auth0Lock;
    export const Auth0Lock: Auth0LockStatic;
    export const Auth0LockPasswordless: Auth0LockPasswordlessStatic;
}
