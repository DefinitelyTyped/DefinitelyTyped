// Type definitions for SAMLP 1.0.0
// Project: https://github.com/auth0/node-samlp
// Definitions by: horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../passport/passport.d.ts" />

declare module "samlp" {

    import * as express from 'express';
    import * as passport from 'passport';

    export function auth(options: IdPOptions): express.Handler;
    export function logout(options: IdPOptions): express.Handler;
    export function parseRequest(req: express.Request, callback: (err: any, data: any) => void): void;
    export function getSamlResponse(options: IdPOptions, user: any, callback: (err: any, samlResponse: any) => void): void;
    export function sendError(options: IdPOptions): express.Handler;
    export function metadata(options: IdPMetadataOptions): express.Handler;

    export interface IdPOptions {
        issuer: string;
        cert: string | Buffer;
        key: string | Buffer;
        audience?: string;
        recipient?: string;
        destination?: string;
        RelayState?: string;
        digestAlgorithm?: 'sha1' | 'sha256';
        signatureAlgorithm?: 'rsa-sha1' | 'rsa-sha256';
        signResponse?: boolean;
        encryptionCert?: string | Buffer;
        encryptionPublicKey?: string | Buffer;
        encryptionAlgorithm?: string;
        keyEncryptionAlgorighm?: string;
        lifetimeInSeconds?: number;
        authnContextClassRef?: string;
        profileMapper?: PassportProfileMapper;
        getUserFromRequest?: (req: express.Request) => any;
        getPostURL: (audience: string, authnRequestDom: any, req: express.Request, callback: (err: any, url: string) => void) => void;
    }
    export interface IdPMetadataOptions {
        issuer: string;
        cert: string | Buffer;
        profileMapper?: PassportProfileMapper;
        redirectEndpointPath?: string;
        postEndpointPath?: string;
        logoutEndpointPaths?: {
            redirect?: string;
            post?: string;
        };
    }

    export class PassportProfileMapper {
        constructor(pu: passport.Profile);
        metadata: MetadataItem[];
        getClaims(): any;
        getNameIdentifier(): any;
    }
    export interface MetadataItem {
        id: string;
        optional: boolean;
        displayName: string;
        description: string;
    }

}
