// Type definitions for passport-fido2-webauthn 0.1
// Project: https://github.com/jaredhanson/passport-webauthn#readme
// Definitions by: Benjamin Choi <https://github.com/benhchoi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { X509Certificate } from 'crypto';
import * as express from 'express';
import { Strategy as PassportStrategy } from 'passport-strategy';

export class Strategy extends PassportStrategy {
    name: string;

    constructor(
        options: StrategyOptions,
        verify: VerifyFunction,
        verifySignCount: VerifySignCountFunction,
        register: RegisterFunction,
    );
    constructor(verify: VerifyFunction, verifySignCount: VerifySignCountFunction, register: RegisterFunction);
    constructor(options: StrategyOptions, verify: VerifyFunction, register: RegisterFunction);
    constructor(verify: VerifyFunction, register: RegisterFunction);
}

export class SessionChallengeStore {
    constructor(options?: SessionStoreOptions);

    challenge(req: express.Request, info: { user: any }, cb: ChallengeFunction): void;
    challenge(req: express.Request, cb: ChallengeFunction): void;

    verify(req: express.Request, challenge: Buffer, validated: ValidatedFunction): void;
}

export interface StrategyOptions {
    attestationFormats?: AttestationFormats | undefined;
    store?: SessionChallengeStore | undefined;
}
export interface AttestationFormats {
    [key: string]: AttestationFormat;
}
export interface AttestationFormat {
    verify: (attStmt: any, authData: any, hash: string | Buffer) => VerifiedAttestation;
    parse?: (attStmt: any) => ParsedAttestation;
}
export interface VerifiedAttestation {
    format: string;
    trustPath: X509Certificate[];
    type?: string | undefined;
    response?: any;
}
export interface ParsedAttestation {
    trustPath: X509Certificate[];
    version?: any;
    response?: any;
    signature?: any;
    algorithm?: any;
}

export type VerifyFunction =
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
export interface AuthenticatorFlags {
    userPresent: boolean;
    userVerified: boolean;
}
export type VerifiedFunction = (err: any, user?: any, publicKey?: string | { message: string }, info?: any) => void;

export type VerifySignCountFunction = (
    id: string,
    authenticatorSignCount: number,
    infoSignCount: number,
    ok: (err: any, ok: boolean) => void,
) => void;

export type RegisterFunction =
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
    | ((user: any, id: string, publicKey: string, flags: AuthenticatorFlags, registered: RegisteredFunction) => void)
    | ((user: any, id: string, publicKey: string, registered: RegisteredFunction) => void);
export type RegisteredFunction = (err: any, user?: any, info?: any) => void;

export interface SessionStoreOptions {
    key?: string | undefined;
}

export type ChallengeFunction = (err: any, challenge?: Buffer) => void;

export type ValidatedFunction = (err: any, ok: boolean, ctx: any) => void;
