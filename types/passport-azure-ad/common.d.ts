import { Request } from "express";

export interface IBaseStrategyOption {
    identityMetadata: string;
    clientID: string;
    isB2C?: boolean | undefined;
    validateIssuer?: boolean | undefined;
    issuer?: string | string[] | undefined;
    loggingLevel?: "info" | "warn" | "error" | undefined;
    loggingNoPII?: boolean | undefined;
    clockSkew?: number | undefined;
    proxy?: { port: string; host: string; protocol: "http" | "https" };
}

export interface ITokenPayload {
    /** An App ID URI. Identifies the intended recipient of the token. */
    aud?: string | undefined;
    /** A security token service(STS) URI. Identifies the STS that constructs and returns the token,
     * and the Azure AD tenant in which the user was authenticated. */
    iss?: string | undefined;
    /** The identity provider that authenticated the subject of the token*/
    idp?: string | undefined;
    /** "Issued At" indicates when the authentication for this token occurred. */
    iat?: number | undefined;
    /** The "nbf" (not before) claim identifies the time before which the JWT must not be accepted for processing. */
    nbf?: number | undefined;
    /** The "exp" (expiration time) claim identifies the expiration time on or after which the JWT must not be accepted for processing. */
    exp?: number | undefined;
    /** An internal claim used by Azure AD to record data for token reuse. */
    aio?: string | undefined;
    /** Only present in v1.0 tokens. The "Authentication context class" claim. A value of "0" indicates the end-user authentication did not meet the requirements of ISO/IEC 29115. */
    acr?: "0" | "1" | undefined;
    /** Only present in v1.0 tokens. Identifies how the subject of the token was authenticated.  */
    amr?: string[] | undefined;
    /** Only present in v1.0 tokens. GUID represents the application ID of the client using the token. */
    appid?: string | undefined;
    /** Only present in v2.0 tokens. The application ID of the client using the token. */
    azp?: string | undefined;
    /** Only present in v1.0 tokens. Indicates how the client was authenticated. For a public client, the value is "0".
     * If client ID and client secret are used, the value is "1". If a client certificate was used for authentication, the value is "2". */
    appidacr?: "0" | "1" | "2" | undefined;
    /** Only present in v2.0 tokens. Indicates how the client was authenticated.
     * For a public client, the value is "0". If client ID and client secret are used, the value is "1". If a client certificate was used for authentication, the value is "2". */
    azpacr?: "0" | "1" | "2" | undefined;
    /** Only present in v2.0 tokens. The primary username that represents the user. It could be an email address, phone number, or a generic username without a specified format */
    preferred_username?: string | undefined;
    /** Provides a human-readable value that identifies the subject of the token.
     * The value is not guaranteed to be unique, it is mutable, and it's designed to be used only for display purposes. The profile scope is required in order to receive this claim. */
    name?: string | undefined;
    /** The set of scopes exposed by your application for which the client application has requested (and received) consent. */
    scp?: string | undefined;
    /** The set of permissions exposed by your application that the requesting application has been given permission to call. */
    roles?: string[] | undefined;
    /** Provides object IDs that represent the subject's group memberships. */
    groups?: string | string[] | undefined;
    /** Denoting the user is in at least one group. */
    hasgroups?: true | undefined;
    /** The principal about which the token asserts information, such as the user of an app. This value is immutable and cannot be reassigned or reused.
     * It can be used to perform authorization checks safely, such as when the token is used to access a resource,
     * and can be used as a key in database tables. Because the subject is always present in the tokens that Azure AD issues,
     * we recommend using this value in a general-purpose authorization system. The subject is, however, a pairwise identifier - it is unique to a particular application ID.   */
    sub?: string | undefined;
    /** GUID represents a user. This ID uniquely identifies the user across applications. */
    oid?: string | undefined;
    /** Represents the Azure AD tenant that the user is from. */
    tid?: string | undefined;
    /** Only present in v1.0 tokens. Provides a human readable value that identifies the subject of the token.  */
    unique_name?: string | undefined;
    /** An internal claim used by Azure to revalidate tokens. */
    uti?: string | undefined;
    /** An internal claim used by Azure to revalidate tokens. */
    rh?: string | undefined;
    /** Indicates the version of the access token. */
    ver?: "1.0" | "2.0" | undefined;

    /** v1.0 basic claims */

    /** The IP address the user authenticated from. */
    ipaddr?: string | undefined;
    /** In cases where the user has an on-premises authentication, this claim provides their SID. */
    onprem_sid?: string | undefined;
    /** Indicates when the user's password expires. */
    pwd_exp?: number | undefined;
    /** A URL where users can be sent to reset their password. */
    pwd_url?: string | undefined;
    /** Signals if the client is logging in from the corporate network. If they aren't, the claim isn't included. */
    in_corp?: string | undefined;
    /** An additional name for the user, separate from first or last name */
    nickname?: string | undefined;
    /** Provides the last name, surname, or family name of the user as defined on the user object. */
    family_name?: string | undefined;
    /** Provides the first or given name of the user, as set on the user object. */
    given_name?: string | undefined;
    /** The username of the user. May be a phone number, email address, or unformatted string. */
    upn?: string | undefined;
}

export interface VerifyCallback {
    (error: any, user?: any, info?: any): void;
}
