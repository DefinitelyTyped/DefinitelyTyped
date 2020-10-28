// Type definitions for next-auth 3.1
// Project: https://github.com/iaincollins/next-auth#readme
// Definitions by: Lluis <https://github.com/lluia>
//                 Iain <https://github.com/iaincollins>
//                 Juan <https://github.com/JuanM04>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="node" />

import { ConnectionOptions } from 'typeorm';
import { PossibleProviders } from './providers';
import { Adapter } from './adapters';
import { GenericObject, SessionBase, NextApiRequest, NextApiResponse } from './_utils';
import { SessionProvider } from './client';
import { JWTEncodeParams, JWTDecodeParams } from './jwt';

interface InitOptions {
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

interface AppOptions {
    debug: boolean;
    pages: PageOptions;
    adapter: Adapter;
    baseUrl: string;
    basePath: string;
    action: 'providers' | 'session' | 'csrf' | 'signin' | 'signout' | 'callback' | 'verify-request' | 'error';
    provider?: string;
    cookies: Cookies;
    secret: string;
    csrfToken: string;
    providers: {
        [provider: string]: SessionProvider;
    };
    session: Session;
    jwt: JWTOptions;
    events: Events;
    callbacks: Callbacks;
    callbackUrl: string;
    // redirect?(redirectUrl: string): any;
}

interface PageOptions {
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
    options?: CookieOptions;
}

interface CookieOptions {
    httpOnly?: boolean;
    sameSite?: true | 'strict' | 'lax' | 'none';
    path?: string;
    secure?: boolean;
    maxAge?: number;
}

interface Events {
    signIn?(message: any): Promise<void>;
    signOut?(message: any): Promise<void>;
    createUser?(message: any): Promise<void>;
    updateUser?(message: any): Promise<void>;
    linkAccount?(message: any): Promise<void>;
    session?(message: any): Promise<void>;
    error?(message: any): Promise<void>;
}

interface Session {
    jwt?: boolean;
    maxAge?: number;
    updateAge?: number;
}

interface User {
    name: string;
    email: string;
    image: string;
}

interface JWTOptions {
    secret?: string;
    maxAge?: number;
    encryption?: boolean;
    encode?(options: JWTEncodeParams): Promise<string>;
    decode?(options: JWTDecodeParams): Promise<string>;
}

// TODO: Improve callback typings
interface Callbacks {
    signIn?(user: User, account: GenericObject, profile: GenericObject): Promise<boolean>;
    redirect?(url: string, baseUrl: string): Promise<string>;
    session?(session: SessionBase, user: User): Promise<GenericObject>;
    jwt?(
        token: GenericObject,
        user: User,
        account: GenericObject,
        profile: GenericObject,
        isNewUser: boolean,
    ): Promise<GenericObject>;
}

declare function NextAuth(req: NextApiRequest, res: NextApiResponse, options?: InitOptions): Promise<void>;
export default NextAuth;
export { InitOptions, AppOptions, PageOptions, Cookies, Events, Session, JWTOptions, User, Callbacks };
