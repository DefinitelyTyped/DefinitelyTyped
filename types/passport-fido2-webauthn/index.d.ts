import { X509Certificate } from "crypto";
import express = require("express");
import { Strategy as PassportStrategy } from "passport-strategy";

declare class WebAuthnStrategy extends PassportStrategy {
    name: string;

    constructor(
        options: WebAuthnStrategy.StrategyOptions,
        verify: WebAuthnStrategy.VerifyFunction,
        verifySignCount: WebAuthnStrategy.VerifySignCountFunction,
        register: WebAuthnStrategy.RegisterFunction,
    );
    constructor(
        verify: WebAuthnStrategy.VerifyFunction,
        verifySignCount: WebAuthnStrategy.VerifySignCountFunction,
        register: WebAuthnStrategy.RegisterFunction,
    );
    constructor(
        options: WebAuthnStrategy.StrategyOptions,
        verify: WebAuthnStrategy.VerifyFunction,
        register: WebAuthnStrategy.RegisterFunction,
    );
    constructor(verify: WebAuthnStrategy.VerifyFunction, register: WebAuthnStrategy.RegisterFunction);
}

declare namespace WebAuthnStrategy {
    type Strategy = WebAuthnStrategy;
    const Strategy: typeof WebAuthnStrategy;

    class SessionChallengeStore {
        constructor(options?: SessionStoreOptions);

        challenge(req: express.Request, info: { user: any }, cb: ChallengeFunction): void;
        challenge(req: express.Request, cb: ChallengeFunction): void;

        verify(req: express.Request, challenge: Buffer, validated: ValidatedFunction): void;
    }

    interface StrategyOptions {
        attestationFormats?: AttestationFormats | undefined;
        store?: SessionChallengeStore | undefined;
    }
    interface AttestationFormats {
        [key: string]: AttestationFormat;
    }
    interface AttestationFormat {
        verify: (attStmt: any, authData: any, hash: string | Buffer) => VerifiedAttestation;
        parse?: (attStmt: any) => ParsedAttestation;
    }
    interface VerifiedAttestation {
        format: string;
        trustPath: X509Certificate[];
        type?: string | undefined;
        response?: any;
    }
    interface ParsedAttestation {
        trustPath: X509Certificate[];
        version?: any;
        response?: any;
        signature?: any;
        algorithm?: any;
    }

    type VerifyFunction =
        | ((
            req: express.Request,
            id: string,
            userHandle: Buffer,
            flags: AuthenticatorFlags,
            verified: VerifiedFunction,
        ) => void)
        | ((req: express.Request, id: string, userHandle: Buffer, verified: VerifiedFunction) => void)
        | ((id: string, userHandle: Buffer, flags: AuthenticatorFlags, verified: VerifiedFunction) => void)
        | ((id: string, userHandle: Buffer, verified: VerifiedFunction) => void);
    interface AuthenticatorFlags {
        userPresent: boolean;
        userVerified: boolean;
    }
    type VerifiedFunction = (err: any, user?: any, publicKey?: string | { message: string }, info?: any) => void;

    type VerifySignCountFunction = (
        id: string,
        authenticatorSignCount: number,
        infoSignCount: number,
        ok: (err: any, ok: boolean) => void,
    ) => void;

    type RegisterFunction =
        | ((
            user: any,
            id: string,
            publicKey: string,
            flags: AuthenticatorFlags,
            signCount: number,
            transports: any,
            attestation: VerifiedAttestation,
            registered: RegisteredFunction,
        ) => void)
        | ((
            user: any,
            id: string,
            publicKey: string,
            flags: AuthenticatorFlags,
            signCount: number,
            transports: any,
            registered: RegisteredFunction,
        ) => void)
        | ((
            user: any,
            id: string,
            publicKey: string,
            flags: AuthenticatorFlags,
            signCount: number,
            registered: RegisteredFunction,
        ) => void)
        | ((
            user: any,
            id: string,
            publicKey: string,
            flags: AuthenticatorFlags,
            registered: RegisteredFunction,
        ) => void)
        | ((user: any, id: string, publicKey: string, registered: RegisteredFunction) => void);
    type RegisteredFunction = (err: any, user?: any, info?: any) => void;

    interface SessionStoreOptions {
        key?: string | undefined;
    }

    type ChallengeFunction = (err: any, challenge?: Buffer) => void;

    type ValidatedFunction = (err: any, ok: boolean, ctx: any) => void;
}

export = WebAuthnStrategy;
