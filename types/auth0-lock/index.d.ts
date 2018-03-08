// Type definitions for auth0-lock 10.16
// Project: http://auth0.com
// Definitions by: Brian Caruso <https://github.com/carusology>
//                 Dan Caddigan <https://github.com/goldcaddy77>
//                 Larry Faudree <https://github.com/lfaudreejr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="auth0-js" />

declare module "auth0-lock" {
    export default class Auth0Lock {
        constructor(clientId: string, domain: string, options?: ConstructorOptions);

        // deprecated
        getProfile(token: string, callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void;
        getUserInfo(token: string, callback: (error: auth0.Auth0Error, profile: auth0.Auth0UserProfile) => void): void;
        checkSession(options: any, callback: (error: auth0.Auth0Error, authResult: AuthResult | undefined) => void): void;
        // https://github.com/auth0/lock#resumeauthhash-callback
        resumeAuth(hash: string, callback: (error: auth0.Auth0Error, authResult: AuthResult) => void): void;
        show(options?: ShowOptions): void;
        hide(): void;
        logout(query: any): void;

        on(event: "show" | "hide", callback: () => void): void;
        on(event: "unrecoverable_error" | "authorization_error", callback: (error: auth0.Auth0Error) => void): void;
        on(event: "authenticated", callback: (authResult: AuthResult) => void): void;
        on(event: string, callback: (...args: any[]) => void): void;
    }

    interface AdditionalSignUpFieldOption {
        value: string;
        label: string;
    }

    type AdditionalSignUpFieldOptionsCallback =
        (error: auth0.Auth0Error, options: AdditionalSignUpFieldOption[]) => void;

    type AdditionalSignUpFieldOptionsFunction =
        (callback: AdditionalSignUpFieldOptionsCallback) => void;

    type AdditionalSignUpFieldPrefillCallback =
        (error: auth0.Auth0Error, prefill: string) => void;

    type AdditionalSignUpFieldPrefillFunction =
        (callback: AdditionalSignUpFieldPrefillCallback) => void;

    interface AdditionalTextSignUpField {
        type?: "text";
        icon?: string;
        name: string;
        options?: AdditionalSignUpFieldOption[] | AdditionalSignUpFieldOptionsFunction;
        placeholder: string;
        prefill?: string | AdditionalSignUpFieldPrefillFunction;
        validator?: (input: string) => { valid: boolean; hint?: string };
    }

    interface AdditionalSelectSignUpField {
        type?: "select";
        icon?: string;
        name: string;
        options?: AdditionalSignUpFieldOption[] | AdditionalSignUpFieldOptionsFunction;
        placeholder: string;
        prefill?: string | AdditionalSignUpFieldPrefillFunction;
        validator?: (input: string) => { valid: boolean; hint?: string };
    }

    interface AdditionalCheckboxSignUpField {
        type?: "checkbox";
        icon?: string;
        name: string;
        placeholder: string;
        prefill: "true" | "false";
        validator?: (input: string) => { valid: boolean, hint?: string };
    }

    type AdditionalSignUpField = AdditionalSelectSignUpField | AdditionalTextSignUpField | AdditionalCheckboxSignUpField;

    type AvatarUrlCallback = (error: auth0.Auth0Error, url: string) => void;
    type AvatarDisplayNameCallback = (error: auth0.Auth0Error, displayName: string) => void;

    interface AvatarOptions {
        url: (email: string, callback: AvatarUrlCallback) => void;
        displayName: (email: string, callback: AvatarDisplayNameCallback) => void;
    }

    interface ThemeButton {
        displayName: string;
        primaryColor?: string;
        foregroundColor?: string;
        icon?: string;
    }
    interface ThemeButtonOptions {
        [provider: string]: ThemeButton;
    }

    interface ThemeOptions {
        authButtons?: ThemeButtonOptions;
        labeledSubmitButton?: boolean;
        logo?: string;
        primaryColor?: string;
    }

    // https://auth0.com/docs/libraries/lock/v10/sending-authentication-parameters
    interface AuthParamsOptions {
        access_token?: any;
        connection_scopes?: any;
        device?: any;
        nonce?: any;
        protocol?: any;
        request_id?: any;
        scope?: string;
        state?: string;
    }

    interface AuthOptions {
        params?: AuthParamsOptions;
        redirect?: boolean;
        redirectUrl?: string;
        responseType?: string;
        sso?: boolean;
        audience?: string;
    }

    interface PopupOptions {
        width: number;
        height: number;
        left: number;
        top: number;
    }

    interface ConstructorOptions {
        additionalSignUpFields?: AdditionalSignUpField[];
        allowedConnections?: string[];
        allowForgotPassword?: boolean;
        allowLogin?: boolean;
        allowSignUp?: boolean;
        assetsUrl?: string;
        auth?: AuthOptions;
        autoclose?: boolean;
        autofocus?: boolean;
        avatar?: AvatarOptions;
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
        popupOptions?: PopupOptions;
        prefill?: { email?: string, username?: string };
        rememberLastLogin?: boolean;
        signupLink?: string;
        socialButtonStyle?: "big" | "small";
        theme?: ThemeOptions;
        usernameStyle?: string;
        oidcConformant?: boolean;
    }

    interface FlashMessageOptions {
        type: "success" | "error";
        text: string;
    }

    interface ShowOptions {
        allowedConnections?: string[];
        allowForgotPassword?: boolean;
        allowLogin?: boolean;
        allowSignUp?: boolean;
        auth?: AuthOptions;
        initialScreen?: "login" | "signUp" | "forgotPassword";
        flashMessage?: FlashMessageOptions;
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
}
