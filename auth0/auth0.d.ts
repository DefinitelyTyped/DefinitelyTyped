// Type definitions for Auth0.js
// Project: http://auth0.com
// Definitions by: Robert McLaws <https://github.com/advancedrei>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/** Extensions to the browser Window object. */
interface Window {
    /** Allows you to pass the id_token to other APIs, as specified in https://docs.auth0.com/apps-apis */
    token: string;
}

interface Location {
    origin: string;
}

/** This is the interface for the main Auth0 client. */
interface Auth0Static {
    
    new(options: Auth0ClientOptions): Auth0Static;
    changePassword(options: any, callback?: Function): void;
    decodeJwt(jwt: string): any;
    login(options: any, callback: (error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: string) => any): void;
    loginWithPopup(options: Auth0LoginOptions, callback: (error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: string) => any): void;
    loginWithResourceOwner(options: Auth0LoginOptions, callback: (error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: any) => any): void;
    loginWithUsernamePassword(options: Auth0LoginOptions, callback: (error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: string) => any): void;
    logout(query: string): void;
    getConnections(callback?: Function): void;
    getDelegationToken(targetClientId: string, id_token: string, options: any, callback: (error?: Auth0Error, delegationResult?: Auth0DelegationToken) => any): void;
    getProfile(id_token: string, callback?: Function): Auth0UserProfile;
    getSSOData(withActiveDirectories: any, callback?: Function): void;
    parseHash(hash: string): Auth0DecodedHash;
    signup(options: Auth0SignupOptions, callback: Function): void;
    validateUser(options: any, callback: (error?: Auth0Error, valid?: any) => any): void;
}

/** Represents constructor options for the Auth0 client. */
interface Auth0ClientOptions {
    clientID: string;
    callbackURL: string;
    callbackOnLoactionHash?: boolean;
    domain: string;
    forceJSONP?: boolean;
} 

/** Represents a normalized UserProfile. */
interface Auth0UserProfile {
    email: string;
    family_name: string;
    gender: string;
    given_name: string;
    locale: string;
    name: string;
    nickname: string;
    picture: string;
    user_id: string;
    /** Represents one or more Identities that may be associated with the User. */
    identities: Auth0Identity[];
}

/** Represents an Auth0UserProfile that has a Microsoft Account as the primary identity. */
interface MicrosoftUserProfile extends Auth0UserProfile {
    emails: string[];
}

/** Represents an Auth0UserProfile that has an Office365 account as the primary identity. */
interface Office365UserProfile extends Auth0UserProfile {
    tenantid: string;
    upn: string;
}

/** Represents an Auth0UserProfile that has an Active Directory account as the primary identity. */
interface AdfsUserProfile extends Auth0UserProfile {
    issuer: string;
}

/** Represents multiple identities assigned to a user. */
interface Auth0Identity {
    access_token: string;
    connection: string;
    isSocial: boolean;
    provider: string;
    user_id: string;
}

interface Auth0DecodedHash {
    access_token: string;
    id_token: string;
    profile: Auth0UserProfile;
    state: any;
}

interface Auth0PopupOptions {
    width: number;
    height: number;
}

interface Auth0LoginOptions {
    auto_login?: boolean;
    connection?: string;
    email?: string;
    username?: string;
    password?: string;
    popup?: boolean;
    popupOptions?: Auth0PopupOptions;
}

interface Auth0SignupOptions extends Auth0LoginOptions {
    auto_login: boolean;
}

interface Auth0Error {
    code: any;
    details: any;
    name: string;
    message: string;
    status: any;
}

/** Represents the response from an API Token Delegation request. */
interface Auth0DelegationToken {
    /** The length of time in seconds the token is valid for. */
    expires_in: string;
    /** The JWT for delegated access.  */
    id_token: string;
    /** The type of token being returned. Possible values: "Bearer"  */
    token_type: string;
}

declare var Auth0: Auth0Static;

declare module "Auth0" {
    export = Auth0
}
