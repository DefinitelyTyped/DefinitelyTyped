// Type definitions for passport-saml 1.1
// Project: https://github.com/bergie/passport-saml
// Definitions by: Chris Barth <https://github.com/cjbarth>
//                 Damian Assennato <https://github.com/dassennato>
//                 Karol Samborski <https://github.com/ksamborski>
//                 Jose Colella <https://github.com/josecolella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import passport = require('passport');
import express = require('express');

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
    callbackUrl?: string;
    path?: string;
    protocol?: string;
    host?: string;
    entryPoint?: string;
    issuer?: string;
    privateCert?: string;
    cert?: string | string[] | CertCallback;
    decryptionPvk?: string;
    signatureAlgorithm?: 'sha1' | 'sha256' | 'sha512';

    // Additional SAML behaviors
    additionalParams?: any;
    additionalAuthorizeParams?: any;
    identifierFormat?: string;
    acceptedClockSkewMs?: number;
    attributeConsumingServiceIndex?: string;
    disableRequestedAuthnContext?: boolean;
    authnContext?: string;
    forceAuthn?: boolean;
    skipRequestCompression?: boolean;
    authnRequestBinding?: string;
    RACComparison?: 'exact' | 'minimum' | 'maximum' | 'better';
    providerName?: string;
    passive?: boolean;
    idpIssuer?: string;
    audience?: string;

    // InResponseTo Validation
    validateInResponseTo?: boolean;
    requestIdExpirationPeriodMs?: number;
    cacheProvider?: CacheProvider;

    // Passport
    name?: string;
    passReqToCallback?: boolean;

    // Logout
    logoutUrl?: string;
    additionalLogoutParams?: any;
    logoutCallbackUrl?: string;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
    additionalParams?: object;
}

export interface AuthorizeOptions extends AuthenticateOptions {
    samlFallback?: string;
}

export type Profile = {
  issuer?: string;
  sessionIndex?: string;
  nameID?: string;
  nameIDFormat?: string;
  nameQualifier?: string;
  spNameQualifier?: string;
  ID?: string;
  mail?: string; // InCommon Attribute urn:oid:0.9.2342.19200300.100.1.3
  email?: string; // `mail` if not present in the assertion
  getAssertionXml(): string; // get the raw assertion XML
  getAssertion(): object; // get the assertion XML parsed as a JavaScript object
  getSamlResponseXml(): string; // get the raw SAML response XML
} & {
  [attributeName: string]: unknown; // arbitrary `AttributeValue`s
};
