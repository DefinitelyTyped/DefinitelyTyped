// Type definitions for SAMLP 1.0.0
// Project: https://github.com/auth0/node-samlp
// Definitions by: horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express" />
/// <reference types="passport" />

declare module "samlp" {

    import * as express from 'express';
    import * as passport from 'passport';

    export function auth(options: IdPOptions): express.Handler;
    export function logout(options: IdPOptions): express.Handler;
    export function parseRequest(req: express.Request, callback: (err: any, data: SamlRequest) => void): void;
    export function getSamlResponse(options: IdPOptions, user: any, callback: (err: any, samlResponse: string) => void): void;
    export function sendError(options: IdPOptions): express.Handler;
    export function metadata(options: IdPMetadataOptions): express.Handler;


    export type DigestAlgorithmType = 'sha1' | 'sha256';
    export type SignatureAlgorithmType = 'rsa-sha1' | 'rsa-sha256';

    export interface IdPOptions {
        issuer: string;
        cert: string | Buffer;
        key: string | Buffer;
        audience?: string;
        recipient?: string;
        destination?: string;
        RelayState?: string;
        digestAlgorithm?: DigestAlgorithmType;
        signatureAlgorithm?: SignatureAlgorithmType;
        signResponse?: boolean;
        encryptionCert?: string | Buffer;
        encryptionPublicKey?: string | Buffer;
        encryptionAlgorithm?: string;
        keyEncryptionAlgorighm?: string;
        lifetimeInSeconds?: number;
        authnContextClassRef?: string;
        inResponseTo?: string;
        profileMapper?: ProfileMapperConstructor;
        getUserFromRequest?: (req: express.Request) => any;
        getPostURL: (audience: string, authnRequestDom: any, req: express.Request, callback: (err: any, url: string) => void) => void;
    }

    export interface IdPMetadataOptions {
        issuer: string;
        cert: string | Buffer;
        profileMapper?: ProfileMapperConstructor;
        redirectEndpointPath?: string;
        postEndpointPath?: string;
        logoutEndpointPaths?: {
            redirect?: string;
            post?: string;
        };
    }

    export interface SamlRequest {
        id?: string;
        issuer?: string;
        assertionConsumerServiceURL?: string;
        destination?: string;
        forceAuthn?: string;
    }


    export interface ProfileMapper {
        metadata: MetadataItem[];
        getClaims(): any;
        getNameIdentifier(): any;
    }
    export interface ProfileMapperConstructor {
        (pu: passport.Profile): ProfileMapper;
        prototype: ProfileMapper;
    }
    export var PassportProfileMapper: ProfileMapperConstructor;

    export interface MetadataItem {
        id: string;
        optional: boolean;
        displayName: string;
        description: string;
    }

}
