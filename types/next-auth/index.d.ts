// Type definitions for next-auth 3.1
// Project: https://github.com/iaincollins/next-auth#readme
// Definitions by: Lluis <https://github.com/lluia>
//                 Iain <https://github.com/iaincollins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="node" />

import { ConnectionOptions } from 'typeorm';
import { PossibleProviders } from './providers';
import { Adapter } from './adapters';
import { GenericObject, NextApiRequest, NextApiResponse } from './_utils';

export interface InitOptions {
    providers: Array<ReturnType<PossibleProviders>>;
    database?: string | ConnectionOptions;
    secret?: string;
    session?: Session;
    jwt?: JWTOptions;
    pages?: PageOptions;
    callbacks?: Callbacks;
    debug?: boolean;
    adapter?: Adapter;
    events?: Events;
    useSecureCookies?: boolean;
    cookies?: Cookies;
}

export interface PageOptions {
    signIn?: string;
    signOut?: string;
    error?: string;
    verifyRequest?: string;
    newUser?: string | null;
}

interface Cookies {
    [cookieKey: string]: Cookie;
}

interface Cookie {
    name: string;
    options: CookieOptions;
}

export interface CookieOptions {
    httpOnly?: boolean;
    sameSite?: true | 'strict' | 'lax' | 'none';
    path?: string;
    secure?: boolean;
    maxAge?: number;
}

interface Events {
    signIn?(message: string): Promise<void>;
    signOut?(message: string): Promise<void>;
    createUser?(message: string): Promise<void>;
    updateUser?(message: string): Promise<void>;
    linkAccount?(message: string): Promise<void>;
    session?(message: string): Promise<void>;
    error?(message: string): Promise<void>;
}

interface Session {
    jwt?: boolean;
    maxAge?: number;
    updateAge?: number;
}

interface JWTOptions {
    secret?: string;
    maxAge?: number;
    encode?(options: JWTEncodeParams): Promise<string>;
    decode?(options: JWTDecodeParams): Promise<string>;
}

interface JWTSignInOptions {
    expiresIn: string;
}

interface JWTVerificationOptions {
    maxTokenAge: string;
    algorithms: string[];
}

interface JWTDecryptionOptions {
    algorithms: string[];
}

interface JWTDecodeParams {
    secret: string;
    token: GenericObject;
    maxAge?: number;
    signingKey?: string;
    verificationKey?: string;
    verificationOptions?: JWTVerificationOptions;
    decryptionKey?: string;
    decryptionOptions?: JWTDecryptionOptions;
    encryption?: boolean;
}

interface JWTEncodeParams {
    secret: string;
    token: GenericObject;
    signingKey?: string;
    encryptionKey?: string;
    signingOptions?: JWTSignInOptions;
    encryptionOptions?: GenericObject;
    encryption?: boolean;
    maxAge?: number;
}

// TODO: Improve callback typings
export interface Callbacks {
    signIn?(user: GenericObject, account: GenericObject, profile: GenericObject): Promise<boolean>;
    redirect?(url: string, baseUrl: string): Promise<string>;
    session?(session: Session, user: GenericObject): Promise<GenericObject>;
    jwt?(
        token: GenericObject,
        user: GenericObject,
        account: GenericObject,
        profile: GenericObject,
        isNewUser: boolean,
    ): Promise<GenericObject>;
}

declare function NextAuth(req: NextApiRequest, res: NextApiResponse, options?: InitOptions): Promise<void>;
export default NextAuth;
