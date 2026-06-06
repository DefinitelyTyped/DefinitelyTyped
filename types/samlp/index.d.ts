/// <reference types="express" />
/// <reference types="passport" />

declare module "samlp" {
    import * as express from "express";
    import * as passport from "passport";

    export function auth(options: IdPOptions): express.Handler;
    export function logout(options: IdPOptions): express.Handler;
    export function parseRequest(req: express.Request, callback: (err: any, data: SamlRequest) => void): void;
    export function getSamlResponse(
        options: IdPOptions,
        user: any,
        callback: (err: any, samlResponse: string) => void,
    ): void;
    export function sendError(options: IdPOptions): express.Handler;
    export function metadata(options: IdPMetadataOptions): express.Handler;

    export type DigestAlgorithmType = "sha1" | "sha256";
    export type SignatureAlgorithmType = "rsa-sha1" | "rsa-sha256";

    export interface IdPOptions {
        issuer: string;
        cert: string | Buffer;
        key: string | Buffer;
        audience?: string | undefined;
        recipient?: string | undefined;
        destination?: string | undefined;
        RelayState?: string | undefined;
        digestAlgorithm?: DigestAlgorithmType | undefined;
        signatureAlgorithm?: SignatureAlgorithmType | undefined;
        signResponse?: boolean | undefined;
        encryptionCert?: string | Buffer | undefined;
        encryptionPublicKey?: string | Buffer | undefined;
        encryptionAlgorithm?: string | undefined;
        keyEncryptionAlgorighm?: string | undefined;
        lifetimeInSeconds?: number | undefined;
        authnContextClassRef?: string | undefined;
        inResponseTo?: string | undefined;
        profileMapper?: ProfileMapperConstructor | undefined;
        getUserFromRequest?: ((req: express.Request) => any) | undefined;
        getPostURL: (
            audience: string,
            authnRequestDom: any,
            req: express.Request,
            callback: (err: any, url: string) => void,
        ) => void;
    }

    export interface IdPMetadataOptions {
        issuer: string;
        cert: string | Buffer;
        profileMapper?: ProfileMapperConstructor | undefined;
        redirectEndpointPath?: string | undefined;
        postEndpointPath?: string | undefined;
        logoutEndpointPaths?: {
            redirect?: string | undefined;
            post?: string | undefined;
        } | undefined;
    }

    export interface SamlRequest {
        id?: string | undefined;
        issuer?: string | undefined;
        assertionConsumerServiceURL?: string | undefined;
        destination?: string | undefined;
        forceAuthn?: string | undefined;
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
