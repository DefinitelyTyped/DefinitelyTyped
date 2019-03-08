// Type definitions for auth0-lock 11.4
// Project: http://auth0.com, https://github.com/auth0/lock
// Definitions by: Brian Caruso <https://github.com/carusology>
//                 Dan Caddigan <https://github.com/goldcaddy77>
//                 Larry Faudree <https://github.com/lfaudreejr>
//                 Will Caulfield <https://github.com/willcaul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

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
}

interface Auth0LockAdditionalSelectSignUpField {
    type?: "select";
    icon?: string;
    name: string;
    options?: Auth0LockAdditionalSignUpFieldOption[] | Auth0LockAdditionalSignUpFieldOptionsFunction;
    placeholder: string;
    prefill?: string | Auth0LockAdditionalSignUpFieldPrefillFunction;
    validator?: (input: string) => { valid: boolean; hint?: string };
}

interface Auth0LockAdditionalCheckboxSignUpField {
    type?: "checkbox";
    icon?: string;
    name: string;
    placeholder: string;
    prefill: "true" | "false";
    validator?: (input: string) => { valid: boolean, hint?: string };
}

type Auth0LockAdditionalSignUpField = Auth0LockAdditionalSelectSignUpField |Auth0LockAdditionalTextSignUpField |Auth0LockAdditionalCheckboxSignUpField;

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

interface Auth0LockLanguageDictionaryOptionsErrorForgotPassword {
    "lock.fallback"?: string;
    enterprise_email?: string;
    too_many_request?: string;
}

interface Auth0LockLanguageDictionaryOptionsErrorLogin {
    "hrd.not_matching_email"?: string;
    "lock.fallback"?: string;
    "lock.invalid_code"?: string;
    "lock.invalid_email_password"?: string;
    "lock.invalid_username_password"?: string;
    "lock.mfa_invalid_code"?: string;
    "lock.mfa_registration_required"?: string;
    "lock.network"?: string;
    "lock.popup_closed"?: string;
    "lock.unauthorized"?: string;
    blocked_user?: string;
    invalid_user_password?: string;
    password_change_required?: string;
    password_leaked?: string;
    session_missing?: string;
    too_many_attempts?: string;
}

interface Auth0LockLanguageDictionaryOptionsErrorPasswordless {
    "bad.email"?: string;
    "bad.phone_number"?: string;
    "lock.fallback"?: string;
}

interface Auth0LockLanguageDictionaryOptionsErrorSignup {
    "lock.fallback"?: string;
    invalid_password?: string;
    password_dictionary_error?: string;
    password_no_user_info_error?: string;
    password_strength_error?: string;
    user_exists?: string;
    username_exists?: string;
}

interface Auth0LockLanguageDictionaryOptionsError {
    forgotPassword?: Auth0LockLanguageDictionaryOptionsErrorForgotPassword;
    login?: Auth0LockLanguageDictionaryOptionsErrorLogin;
    passwordless?: Auth0LockLanguageDictionaryOptionsErrorPasswordless;
    signUp?: Auth0LockLanguageDictionaryOptionsErrorSignup;
}

interface Auth0LockLanguageDictionaryOptionsSuccess {
    forgotPassword?: string;
    logIn?: string;
    magicLink?: string;
    signUp?: string;
}

interface Auth0LockLanguageDictionaryOptionsPasswordStrength {
    containsAtLeast?: string;
    identicalChars?: string;
    lengthAtLeast?: string;
    lowerCase?: string;
    nonEmpty?: string;
    numbers?: string;
    shouldContain?: string;
    specialCharacters?: string;
    upperCase?: string;
}

interface Auth0LockLanguageDictionaryOptionsBasic {
    blankErrorHint?: string;
    codeInputPlaceholder?: string;
    databaseAlternativeSignUpInstructions?: string;
    databaseEnterpriseAlternativeLoginInstructions?: string;
    databaseEnterpriseLoginInstructions?: string;
    databaseSignUpInstructions?: string;
    emailInputPlaceholder?: string;
    enterpriseActiveLoginInstructions?: string;
    enterpriseLoginIntructions?: string;
    failedLabel?: string;
    forgotPasswordAction?: string;
    forgotPasswordInstructions?: string;
    forgotPasswordSubmitLabel?: string;
    forgotPasswordTitle?: string;
    invalidErrorHint?: string;
    lastLoginInstructions?: string;
    loginAtLabel?: string;
    loginLabel?: string;
    loginSubmitLabel?: string;
    loginWithLabel?: string;
    mfaCodeErrorHint?: string;
    mfaInputPlaceholder?: string;
    mfaLoginInstructions?: string;
    mfaLoginTitle?: string;
    mfaSubmitLabel?: string;
    notYourAccountAction?: string;
    passwordInputPlaceholder?: string;
    passwordlessEmailAlternativeInstructions?: string;
    passwordlessEmailCodeInstructions?: string;
    passwordlessEmailInstructions?: string;
    passwordlessSMSAlternativeInstructions?: string;
    passwordlessSMSCodeInstructions?: string;
    passwordlessSMSInstructions?: string;
    phoneNumberInputPlaceholder?: string;
    resendCodeAction?: string;
    resendLabel?: string;
    resendingLabel?: string;
    retryLabel?: string;
    sentLabel?: string;
    showPassword?: string;
    signUpLabel?: string;
    signUpSubmitLabel?: string;
    signUpTerms?: string;
    signUpTitle?: string;
    signUpWithLabel?: string;
    socialLoginInstructions?: string;
    socialSignUpInstructions?: string;
    ssoEnabled?: string;
    submitLabel?: string;
    title?: string;
    unrecoverableError?: string;
    usernameFormatErrorHint?: string;
    usernameInputPlaceholder?: string;
    usernameOrEmailInputPlaceholder?: string;
    welcome?: string;
    windowsAuthInstructions?: string;
    windowsAuthLabel?: string;
}

interface Auth0LockLanguageDictionaryOptions extends Auth0LockLanguageDictionaryOptionsBasic {
    error?: Auth0LockLanguageDictionaryOptionsError;
    success?: Auth0LockLanguageDictionaryOptionsSuccess;
    passwordStrength?: Auth0LockLanguageDictionaryOptionsPasswordStrength;
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
    languageDictionary?: Auth0LockLanguageDictionaryOptions;
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
    languageDictionary?: Auth0LockLanguageDictionaryOptions;
}

interface AuthResult {
    accessToken: string;
    appState?: any;
    expiresIn: number;
    idToken: string;
    idTokenPayload: {
        aud: string;
        exp: number;
        iat: number;
        iss: string;
        sub: string;
    };
    refreshToken?: string;
    scope?: string;
    state: string;
    tokenType: string;
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
