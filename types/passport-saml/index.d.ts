// Type definitions for passport-saml 0.15
// Project: https://github.com/bergie/passport-saml
// Definitions by: Chris Barth <https://github.com/cjbarth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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

export type VerifiedCallback =	(err: Error | null, user: {}, info: {}) => void;

export type VerifyWithRequest = (req: express.Request, profile: {}, done: VerifiedCallback) => void;

export type VerifyWithoutRequest = (profile: {}, done: VerifiedCallback) => void;

export class Strategy implements passport.Strategy {
    constructor(config: SamlConfig, verify: VerifyWithRequest | VerifyWithoutRequest);
    authenticate(req: express.Request, options: AuthenticateOptions | AuthorizeOptions): void;
    logout(req: express.Request, callback: (err: Error | null, url: string) => void): void;
    generateServiceProviderMetadata(decryptionCert: string): string;
}

export interface SamlConfig {
    // Core
    callbackUrl?: string;
    path?: string;
    protocol?: string;
    host?: string;
    entryPoint: string;
    issuer: string;
    privateCert?: string;
    cert?: {};
    decryptionPvk?: string;
    signatureAlgorithm?: 'sha1' | 'sha256' | 'sha512';

    // Additional SAML behaviors
    additionalParams?: {};
    additionalAuthorizeParams?: {};
    identifierFormat?: string;
    acceptedClockSkewMs?: number;
    attributeConsumingServiceIndex?: string;
    disableRequestedAuthnContext?: boolean;
    authnContext?: string;
    forceAuthn?: boolean;
    skipRequestCompression?: boolean;
    authnRequestBinding?: string;

    // InResponseTo Validation
    validateInResponseTo?: boolean;
    requestIdExpirationPeriodMs?: number;
    cacheProvider?: CacheProvider;

    // Passport
    passReqToCallback?: boolean;

    // Logout
    logoutUrl?: string;
    additionalLogoutParams?: {};
    logoutCallbackUrl?: string;
}

export interface AuthenticateOptions extends passport.AuthenticateOptions {
    additionalParams?: {};
}

export interface AuthorizeOptions extends AuthenticateOptions {
    samlFallback?: string;
}
