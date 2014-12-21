interface Auth0Identity {
    access_token: string;
    connection: string;
    expires_in: number;
    isSocial: boolean;
    provider: string;
    user_id: string;
}

interface Auth0Profile {
    _id: string;
    aud: string;
    clientID: string;
    created_at: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    gender: string;
    given_name: string;
    global_client_id: string;
    iat: number;
    identities: Auth0Identity[];
    iss: string;
    locale: string;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    user_id: string;
}


interface Auth0AuthParam {
    scope?: string;
    connection_scopes?: any;
    access_token?: string;
    protocol?: string;
    device?: string;
    request_id?: string;
    nonce?: string;
    state?: string;
}

interface Auth0LockOptions {
    connections?: string[];
    dict?: { [idx: string]: string };
    container?: string;
    icon?: string;
    closable?: boolean;
    socialBigButtons?: boolean;
    focusInput?: boolean;
    usernameStyle?: string;
    gravatar?: boolean;
    disableSignupAction?: boolean;
    signupLink?: string;
    disableResetAction?: boolean;
    resetLink?: string;
    popup?: boolean;
    popupOptions?: any;
    loginAfterSignup?: boolean;
    rememberLastLogin?: boolean;
    integratedWindowsLogin?: boolean;
    defaultUserPasswordConnection?: string;
    defaultADUsernameFromEmailPrefix?: boolean;
    theme?: string;
    callbackURL?: string;
    responseType?: string;
    forceJSONP?: boolean;
    authParams?: Auth0AuthParam;
    sso?: boolean;
}

interface Auth0LockInitOptions {
    cdn?: string;
    assetsUrl?: string;
}

interface Auth0Lock {
    show(options?: Auth0LockOptions, callback?: (err: any, profile: Auth0Profile, token: string) => void): void;
    showSignin(options?: Auth0LockOptions, callback?: (err: any, profile: Auth0Profile, token: string) => void): void;
    showSignup(options?: Auth0LockOptions, callback?: (err: any, profile: Auth0Profile, token: string) => void): void;
    showReset(options?: Auth0LockOptions, callback?: (err: any, profile: Auth0Profile, token: string) => void): void;

    on(event: string, callback: () => void): void;
    removeAllListenders(event: string): void;
    removeListener(event: string, callback: () => void): void;
}

declare var Auth0Lock: {
    new (clientid: string, domain: string, options?: Auth0LockInitOptions): Auth0Lock;
};

declare module 'auth0-lock' {
    export = Auth0Lock;
}