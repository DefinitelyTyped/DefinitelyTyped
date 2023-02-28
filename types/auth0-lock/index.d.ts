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
    type?: "text" | undefined;
    icon?: string | undefined;
    name: string;
    options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction | undefined;
    placeholder: string;
    prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction | undefined;
    validator?: ((input: string) => { valid: boolean; hint?: string | undefined }) | undefined;
    storage?: "root" | undefined;
}

interface Auth0LockAdditionalSelectSignUpField {
    type?: "select" | undefined;
    icon?: string | undefined;
    name: string;
    options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction | undefined;
    placeholder: string;
    prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction | undefined;
    validator?: ((input: string) => { valid: boolean; hint?: string | undefined }) | undefined;
    storage?: "root" | undefined;
}

interface Auth0LockAdditionalCheckboxSignUpField {
    type?: "checkbox" | undefined;
    icon?: string | undefined;
    name: string;
    placeholder: string;
    prefill: "true" | "false";
    validator?: ((input: string) => { valid: boolean, hint?: string | undefined }) | undefined;
    storage?: "root" | undefined;
}

interface Auth0LockAdditionalHiddenSignUpField {
    type?: "hidden" | undefined;
    name: string;
    value: string;
    storage?: "root" | undefined;
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
    primaryColor?: string | undefined;
    foregroundColor?: string | undefined;
    icon?: string | undefined;
}
interface Auth0LockThemeButtonOptions {
    [provider: string]: Auth0LockThemeButton;
}

interface Auth0LockThemeOptions {
    authButtons?: Auth0LockThemeButtonOptions | undefined;
    hideMainScreenTitle?: boolean | undefined;
    labeledSubmitButton?: boolean | undefined;
    logo?: string | undefined;
    primaryColor?: string | undefined;
}

// https://auth0.com/docs/libraries/lock/v10/sending-authentication-parameters
interface Auth0LockAuthParamsOptions {
    access_token?: any;
    connection_scope?: any;
    device?: any;
    nonce?: any;
    protocol?: any;
    request_id?: any;
    scope?: string | undefined;
    state?: string | undefined;
    [key: string]: any; // Auth0 rules can use custom params.
}

interface Auth0LockAuthOptions {
    autoParseHash?: boolean | undefined;
    params?: Auth0LockAuthParamsOptions | undefined;
    redirect?: boolean | undefined;
    redirectUrl?: string | undefined;
    responseMode?: string | undefined;
    responseType?: string | undefined;
    sso?: boolean | undefined;
    audience?: string | undefined;
}

interface Auth0LockPopupOptions {
    width: number;
    height: number;
    left: number;
    top: number;
}

interface Auth0LockConstructorOptions {
    additionalSignUpFields?: Auth0LockAdditionalSignUpField[] | undefined;
    allowedConnections?: string[] | undefined;
    allowAutocomplete?: boolean | undefined;
    allowForgotPassword?: boolean | undefined;
    allowLogin?: boolean | undefined;
    allowPasswordAutocomplete?: boolean | undefined;
    allowSignUp?: boolean | undefined;
    allowShowPassword?: boolean | undefined;
    assetsUrl?: string | undefined;
    auth?: Auth0LockAuthOptions | undefined;
    autoclose?: boolean | undefined;
    autofocus?: boolean | undefined;
    avatar?: Auth0LockAvatarOptions | null | undefined;
    clientBaseUrl?: string | undefined;
    closable?: boolean | undefined;
    configurationBaseUrl?: string | undefined;
    container?: string | undefined;
    defaultADUsernameFromEmailPrefix?: boolean | undefined;
    defaultDatabaseConnection?: string | undefined;
    defaultEnterpriseConnection?: string | undefined;
    flashMessage?: Auth0LockFlashMessageOptions | undefined;
    forgotPasswordLink?: string | undefined;
    hashCleanup?: boolean | undefined;
    initialScreen?: "login" | "signUp" | "forgotPassword" | undefined;
    language?: string | undefined;
    languageBaseUrl?: string | undefined;
    languageDictionary?: any;
    leeway?: number | undefined;
    loginAfterSignUp?: boolean | undefined;
    mustAcceptTerms?: boolean | undefined;
    oidcConformant?: boolean | undefined;
    popupOptions?: Auth0LockPopupOptions | undefined;
    prefill?: { email?: string | undefined, username?: string | undefined} | undefined;
    rememberLastLogin?: boolean | undefined;
    scrollGlobalMessagesIntoView?: boolean | undefined;
    signupLink?: string | undefined;
    socialButtonStyle?: "big" | "small" | undefined;
    theme?: Auth0LockThemeOptions | undefined;
    usernameStyle?: string | undefined;
    _enableImpersonation?: boolean | undefined;
    _enableIdPInitiatedLogin?: boolean | undefined;
}

interface Auth0LockFlashMessageOptions {
    type: "success" | "error" | "info";
    text: string;
}

interface Auth0LockShowOptions {
    allowedConnections?: string[] | undefined;
    allowForgotPassword?: boolean | undefined;
    allowLogin?: boolean | undefined;
    allowSignUp?: boolean | undefined;
    auth?: Auth0LockAuthOptions | undefined;
    initialScreen?: "login" | "signUp" | "forgotPassword" | undefined;
    flashMessage?: Auth0LockFlashMessageOptions | undefined;
    rememberLastLogin?: boolean | undefined;
    languageDictionary?: any;
}

interface Auth0IdTokenPayload {
    name?: string | undefined;
    nickname?: string | undefined;
    picture?: string | undefined;
    email?: string | undefined;
    email_verified?: boolean | undefined;
    aud: string;
    exp: number;
    iat: number;
    iss: string;
    sub: string;
    acr?: string | undefined;
    amr?: string[] | undefined;
    [key: string]: any;
}

interface AuthResult {
    accessToken: string;
    appState?: any;
    expiresIn: number;
    idToken: string;
    idTokenPayload: Auth0IdTokenPayload;
    refreshToken?: string | undefined;
    scope?: string | undefined;
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

    // though not documented, these methods are inherited from EventEmitter
    // https://github.com/browserify/events/blob/48e3d18659caf72d94d319871106f089bb40002d/events.js#L321
    off(event: "show" | "hide", callback: () => void): void;
    off(event: "unrecoverable_error" | "authorization_error", callback: (error: auth0.Auth0Error) => void): void;
    off(event: "authenticated", callback: (authResult: AuthResult) => void): void;
    off(event: string, callback: (...args: any[]) => void): void;
}

interface Auth0LockStatic extends Auth0LockCore {
    new (clientId: string, domain: string, options?: Auth0LockConstructorOptions): Auth0LockStatic;
}

// additional options for passwordless mode
interface Auth0LockPasswordlessConstructorOptions extends Auth0LockConstructorOptions {
    passwordlessMethod?: string | undefined;
}

interface Auth0LockPasswordlessStatic extends Auth0LockCore {
    new (clientId: string, domain: string, options?: Auth0LockPasswordlessConstructorOptions): Auth0LockPasswordlessStatic;
}

declare module "auth0-lock" {
    export default Auth0Lock;
    export const Auth0Lock: Auth0LockStatic;
    export const Auth0LockPasswordless: Auth0LockPasswordlessStatic;
}
