import { Request } from "express";

export interface IBaseStrategyOption {
    identityMetadata: string;
    clientID: string;
    isB2C?: boolean;
    validateIssuer?: boolean;
    issuer?: string | string[];
    loggingLevel?: "info" | "warn" | "error";
    loggingNoPII?: boolean;
    clockSkew?: number;
}

export interface ITokenPayload {
    /** An App ID URI. Identifies the intended recipient of the token. */
    aud?: string;
    /** A security token service(STS) URI. Identifies the STS that constructs and returns the token,
     * and the Azure AD tenant in which the user was authenticated.*/
    iss?: string;
    /** "Issued At" indicates when the authentication for this token occurred. */
    iat?: number;
    /** The "nbf" (not before) claim identifies the time before which the JWT must not be accepted for processing. */
    nbf?: number;
    /** The "exp" (expiration time) claim identifies the expiration time on or after which the JWT must not be accepted for processing. */
    exp?: number;
    /** The "Authentication context class" claim. A value of "0" indicates the end-user authentication did not meet the requirements of ISO/IEC 29115. */
    acr?: "0" | "1";
    /** An internal claim used by Azure AD to record data for token reuse. */
    aio?: string;
    /** Identifies how the subject of the token was authenticated.  */
    amr?: string[];
    /** GUID represents the application ID of the client using the token. */
    appid?: string;
    /** Indicates how the client was authenticated. For a public client, the value is "0".
     * If client ID and client secret are used, the value is "1". If a client certificate was used for authentication, the value is "2". */
    appidacr?: "0" | "1" | "2";
    /** Only present in v2.0 tokens. The application ID of the client using the token. */
    azp?: string;
    /** Only present in v2.0 tokens. Indicates how the client was authenticated.
     * For a public client, the value is "0". If client ID and client secret are used, the value is "1". If a client certificate was used for authentication, the value is "2". */
    azpacr?: "0" | "1" | "2";
    /** Provides object IDs that represent the subject's group memberships. */
    groups?: string | string[];
    /** Denoting the user is in at least one group. */
    hasgroups?: true;
    /** Only present in v2.0 tokens. The primary username that represents the user. It could be an email address, phone number, or a generic username without a specified format */
    preferred_name?: string;
    /** Provides a human-readable value that identifies the subject of the token.
     * The value is not guaranteed to be unique, it is mutable, and it's designed to be used only for display purposes. The profile scope is required in order to receive this claim. */
    name?: string;
    /** GUID represents a user. This ID uniquely identifies the user across applications. */
    oid?: string;
    /** An internal claim used by Azure to revalidate tokens. */
    rh?: string;
    /** The set of scopes exposed by your application for which the client application has requested (and received) consent. */
    scp?: string;
    /** The set of permissions exposed by your application that the requesting application has been given permission to call. */
    roles?: string;
    /** The principal about which the token asserts information, such as the user of an app. This value is immutable and cannot be reassigned or reused.
     * It can be used to perform authorization checks safely, such as when the token is used to access a resource,
     * and can be used as a key in database tables. Because the subject is always present in the tokens that Azure AD issues,
     * we recommend using this value in a general-purpose authorization system. The subject is, however, a pairwise identifier - it is unique to a particular application ID.   */
    sub?: string;
    /** Represents the Azure AD tenant that the user is from. */
    tid?: string;
    /** Only present in v1.0 tokens. Provides a human readable value that identifies the subject of the token.  */
    unique_name?: string;
    /** The username of the user. May be a phone number, email address, or unformatted string. */
    upn?: string;
    /** An internal claim used by Azure to revalidate tokens. */
    uti?: string;
    /** Indicates the version of the access token. */
    ver?: string;
}

export interface VerifyCallback {
    (error: any, user?: any, info?: any): void;
}
  