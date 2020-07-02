// Type definitions for next-auth 2.2.0
// Project: https://github.com/iaincollins/next-auth#readme
// Definitions by: Lluis <https://github.com/lluia>
//                 Iain <https://github.com/iaincollins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ConnectionOptions } from 'typeorm';
import { NextApiRequest, NextApiResponse } from 'next';
import { PossibleProviders } from './providers';
import { Adapter } from './adapters';

interface InitOptions {
    site: string;
    providers: ReturnType<PossibleProviders>[];
    database?: ConnectionOptions | string;
    secret?: string;
    jwt?: boolean;
    jwtSecret?: string;
    sessionMaxAge?: number;
    sessionUpdateAge?: number;
    verificationMaxAge?: number;
    pages?: PageOptions;
    debug?: boolean;
    basePath?: string;
    callbackUrlHandler?: (url: string, options: CallbackURLOptions) => Promise<void>;
    adapter?: Adapter;
    useSecureCookies?: boolean;
    cookies?: Cookies;
}

interface PageOptions {
    signin?: string;
    signout?: string;
    error?: string;
    verifyRequest?: string;
    newUsers?: string | null;
}

interface Cookies {
    [cookieKey: string]: Cookie;
}

interface Cookie {
    name: string;
    options: CookieOptions;
}

interface CookieOptions {
    httpOnly?: boolean;
    // TODO: type available `sameSite` identifiers
    sameSite: string;
    path: string;
    secure: boolean;
}

interface CallbackURLOptions {
    site: string;
    defaultCallbackUrl?: string;
    cookies?: Cookies;
    callbacks?: Callbacks;
}

interface GenericObject {
    [key: string]: any;
}

// TODO: Improve callback typings
interface Callbacks {
    signin(profile: GenericObject, account: GenericObject, metadata: GenericObject): Promise<void>;
    redirect(url: string, baseUrl: string): Promise<string>;
    session(session: GenericObject, token: GenericObject): Promise<GenericObject>;
    jwt(token: GenericObject, oAuthProfile: GenericObject): Promise<GenericObject>;
}

declare function NextAuth(req: NextApiRequest, res: NextApiResponse, options?: InitOptions): Promise<void>;
export default NextAuth;
