import { FC } from 'react';
import { IncomingMessage } from 'http';
import { WithAdditionalParams } from './_utils';
import { Session } from '.';
import { AppProvider, DefaultProviders, Providers } from './providers';

interface ContextProviderProps {
    session: WithAdditionalParams<Session> | null | undefined;
    options?: SetOptionsParams;
}

interface SetOptionsParams {
    baseUrl?: string;
    basePath?: string;
    clientMaxAge?: number;
    keepAlive?: number;
}

interface SignInResponse {
    error: string | undefined;
    status: number;
    ok: boolean;
    url: string | null;
}

type ContextProvider = FC<ContextProviderProps>;

interface NextContext {
    req?: IncomingMessage;
    ctx?: { req: IncomingMessage };
}

declare function useSession(): [Session | null | undefined, boolean];

declare function providers(): Promise<Record<keyof DefaultProviders | string, AppProvider> | null>;
declare const getProviders: typeof providers;
declare function session(
    context?: NextContext & {
        triggerEvent?: boolean;
    },
): Promise<Session | null>;
declare const getSession: typeof session;
declare function csrfToken(context?: NextContext): Promise<string | null>;
declare const getCsrfToken: typeof csrfToken;
declare function signin(
    provider: 'credentials' | 'email',
    data?: Record<string, unknown> & {
        callbackUrl?: string;
        redirect?: false;
    },
    authorizationParams?: string | string[][] | Record<string, unknown> | URLSearchParams
  ): Promise<SignInResponse>;
declare function signin(
    provider?: string,
    data?: Record<string, unknown> & {
        callbackUrl?: string;
        redirect?: boolean;
    },
    authorizationParams?: string | string[][] | Record<string, unknown> | URLSearchParams
): Promise<void>;
declare const signIn: typeof signin;
declare function signout(data?: { callbackUrl?: string, redirect?: boolean }): Promise<void>;
declare const signOut: typeof signout;
declare function options(options: SetOptionsParams): void;
declare const setOptions: typeof options;
declare const Provider: ContextProvider;

export {
    useSession,
    session,
    getSession,
    providers,
    getProviders,
    csrfToken,
    getCsrfToken,
    signin,
    signIn,
    signout,
    signOut,
    options,
    setOptions,
    Provider,
};
