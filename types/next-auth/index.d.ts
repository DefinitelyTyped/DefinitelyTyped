// Type definitions for next-auth 3.13
// Project: https://github.com/iaincollins/next-auth#readme
// Definitions by: Lluis <https://github.com/lluia>
//                 Iain <https://github.com/iaincollins>
//                 Juan <https://github.com/JuanM04>
//                 Balázs <https://github.com/balazsorban44>
//                 Euxn <https://github.com/euxn23>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

/// <reference types="node" />

import { ConnectionOptions } from "typeorm";
import { Adapter, Profile, VerificationRequest, Session as DBSession } from "./adapters";
import { JWTEncodeParams, JWTDecodeParams, JWTOptions, JWT } from "./jwt";
import { AppProvider, Providers } from "./providers";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "./_next";
import { NonNullParams, WithAdditionalParams } from "./_utils";

export interface NextAuthOptions<
    TUser extends User = User,
    TProfile extends Profile = Profile,
    TSession extends DBSession = DBSession,
    TVerificationRequest extends VerificationRequest = VerificationRequest
> {
    providers: Providers;
    database?: string | Record<string, any> | ConnectionOptions;
    secret?: string;
    session?: SessionOptions;
    jwt?: JWTOptions;
    pages?: PagesOptions;
    callbacks?: CallbacksOptions;
    debug?: boolean;
    adapter?: Adapter<TUser, TProfile, TSession, TVerificationRequest>;
    events?: Partial<JWTEventOptions<TUser> | SessionEventsOptions<TUser, TSession>>;
    useSecureCookies?: boolean;
    cookies?: CookiesOptions;
    logger?: LoggerInstance;
    theme?: "light" | "dark" | "auto";
}

export interface LoggerInstance {
    warn: (code?: string, ...message: unknown[]) => void;
    error: (code?: string, ...message: unknown[]) => void;
    debug: (code?: string, ...message: unknown[]) => void;
}

interface InternalOptions extends Omit<NextAuthOptions, "providers" | "database" | "session" | "useSecureCookie"> {
    pkce: {
        code_verifier?: string;
        code_challenge_method?: "S256";
    };
    provider?: string;
    baseUrl?: string;
    basePath?: string;
    action?: "providers" | "session" | "csrf" | "signin" | "signout" | "callback" | "verify-request" | "error";
    csrfToken?: string;
}

export interface AppOptions extends Omit<NextApiRequest, "cookies">, NonNullParams<InternalOptions> {
    providers: AppProvider[];
}

export interface CallbacksOptions {
    signIn?:
        | (() => true)
        | ((
              user: User,
              account: Record<string, unknown>,
              profile: Record<string, unknown>,
          ) => Promise<never | string | boolean>);
    redirect?: (url: string, baseUrl: string) => Promise<string>;
    session?:
        | ((session: Session) => WithAdditionalParams<Session>)
        | ((session: Session, userOrToken: User | JWT) => Promise<WithAdditionalParams<Session>>);
    jwt?:
        | ((token: JWT) => WithAdditionalParams<JWT>)
        | ((
              token: JWT,
              user: User,
              account: Record<string, unknown>,
              profile: Record<string, unknown>,
              isNewUser: boolean,
          ) => Promise<WithAdditionalParams<JWT>>);
}

export interface CookieOption {
    name: string;
    options: {
        httpOnly: boolean;
        sameSite: true | "strict" | "lax" | "none";
        path?: string;
        secure: boolean;
        maxAge?: number;
        domain?: string;
    };
}

export interface CookiesOptions {
    sessionToken?: CookieOption;
    callbackUrl?: CookieOption;
    csrfToken?: CookieOption;
    pkceCodeVerifier?: CookieOption;
}

export type EventCallback<MessageType = any> = (message: MessageType) => Promise<void>;

export interface SessionEventMessage {
    session: WithAdditionalParams<Session>;
    jwt?: JWT;
}

// If using a `credentials` type auth, the user is the raw response from your
// credential provider.
// For other providers, you'll get the User object from your adapter, the account,
// and an indicator if the user was new to your Adapter.
export interface SignInEventMessage<TUser> {
    user: TUser;
    account: Record<string, unknown>;
    isNewUser?: boolean;
}

export interface LinkAccountEventMessage<TUser> {
    user: TUser;
    providerAccount: Record<string, unknown>;
}

export interface EventOptions<TUser> {
    signIn: EventCallback<SignInEventMessage<TUser>>;
    signOut: EventCallback;
    createUser: EventCallback<TUser>;
    updateUser: EventCallback<TUser>;
    linkAccount: EventCallback<LinkAccountEventMessage<TUser>>;
    session: EventCallback;
    error: EventCallback;
}

export interface JWTEventOptions<TUser> extends EventOptions<TUser> {
    signOut: EventCallback<WithAdditionalParams<JWT>>;
    session: EventCallback<{
        session: WithAdditionalParams<Session>;
        jwt: JWT;
    }>;
}

export interface SessionEventsOptions<TUser, TAdapterSession> extends EventOptions<TUser> {
    signOut: EventCallback<TAdapterSession | null>;
    session: EventCallback<{
        session: WithAdditionalParams<Session>;
    }>;
}

export type EventType = keyof EventOptions<any>;

export interface PagesOptions {
    signIn?: string;
    signOut?: string;
    error?: string;
    verifyRequest?: string;
    newUser?: string | null;
}

export interface Session {
    user: WithAdditionalParams<User>;
    accessToken?: string;
    expires: string;
}

export interface SessionOptions {
    jwt?: boolean;
    maxAge?: number;
    updateAge?: number;
}

export interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

export interface NextAuthRequest extends NextApiRequest {
    options: InternalOptions;
}
export type NextAuthResponse = NextApiResponse;

declare function NextAuthHandler(
    req: NextApiRequest,
    res: NextApiResponse,
    options?: NextAuthOptions,
): ReturnType<NextApiHandler>;
declare function NextAuth(
    req: NextApiRequest,
    res: NextApiResponse,
    options?: NextAuthOptions,
): ReturnType<NextApiHandler>;
declare function NextAuth(options: NextAuthOptions): ReturnType<typeof NextAuthHandler>;

export { NextAuthHandler, NextAuth };
export default NextAuth;
