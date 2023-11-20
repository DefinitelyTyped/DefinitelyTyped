import passport = require("passport");
import express = require("express");

export interface CacheItem {
    createdAt: Date;
    value: any;
}

export interface CacheProvider {
    save(key: string | null, value: any, callback: (err: Error | null, cacheItem: CacheItem) => void | null): void;
    get(key: string, callback: (err: Error | null, value: any) => void | null): void;
    remove(key: string, callback: (err: Error | null, key: string) => void | null): void;
}

export type VerifiedCallback = (err: Error | null, user?: object, info?: object) => void;

export type VerifyWithRequest = (req: express.Request, profile: Profile, done: VerifiedCallback) => void;

export type VerifyWithoutRequest = (profile: Profile, done: VerifiedCallback) => void;

export class Strategy extends passport.Strategy {
    constructor(config: SamlConfig, verify: VerifyWithRequest | VerifyWithoutRequest);
    authenticate(req: express.Request, options: AuthenticateOptions | AuthorizeOptions): void;
    logout(req: express.Request, callback: (err: Error | null, url?: string) => void): void;
    generateServiceProviderMetadata(decryptionCert: string | null, signingCert?: string | null): string;
}

export type CertCallback = (callback: (err: Error | null, cert?: string | string[]) => void) => void;

export interface SamlConfig {
    // Core
    callbackUrl?: string | undefined;
    path?: string | undefined;
    protocol?: string | undefined;
    host?: string | undefined;
    entryPoint?: string | undefined;
    issuer?: string | undefined;
    privateCert?: string | undefined;
    cert?: string | string[] | CertCallback | undefined;
    decryptionPvk?: string | undefined;
    signatureAlgorithm?: "sha1" | "sha256" | "sha512" | undefined;

    // Additional SAML behaviors
    additionalParams?: any;
    additionalAuthorizeParams?: any;
    identifierFormat?: string | undefined;
    acceptedClockSkewMs?: number | undefined;
    attributeConsumingServiceIndex?: string | undefined;
    disableRequestedAuthnContext?: boolean | undefined;
    authnContext?: string | undefined;
    forceAuthn?: boolean | undefined;
    skipRequestCompression?: boolean | undefined;
    authnRequestBinding?: string | undefined;
    RACComparison?: "exact" | "minimum" | "maximum" | "better" | undefined;
    providerName?: string | undefined;
    passive?: boolean | undefined;
    idpIssuer?: string | undefined;
    audience?: string | undefined;

    // InResponseTo Validation
    validateInResponseTo?: boolean | undefined;
    requestIdExpirationPeriodMs?: number | undefined;
    cacheProvider?: CacheProvider | undefined;

    // Passport
    name?: string | undefined;
    passReqToCallback?: boolean | undefined;

    // Logout
    logoutUrl?: string | undefined;
    additionalLogoutParams?: any;
    logoutCallbackUrl?: string | undefined;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
    additionalParams?: object | undefined;
}

export interface AuthorizeOptions extends AuthenticateOptions {
    samlFallback?: string | undefined;
}

export type Profile = {
    issuer?: string | undefined;
    sessionIndex?: string | undefined;
    nameID?: string | undefined;
    nameIDFormat?: string | undefined;
    nameQualifier?: string | undefined;
    spNameQualifier?: string | undefined;
    ID?: string | undefined;
    mail?: string | undefined; // InCommon Attribute urn:oid:0.9.2342.19200300.100.1.3
    email?: string | undefined; // `mail` if not present in the assertion
    getAssertionXml(): string; // get the raw assertion XML
    getAssertion(): object; // get the assertion XML parsed as a JavaScript object
    getSamlResponseXml(): string; // get the raw SAML response XML
} & {
    [attributeName: string]: unknown; // arbitrary `AttributeValue`s
};
