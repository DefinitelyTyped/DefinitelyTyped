import { FC } from 'react';
import { IncomingMessage } from 'http';
import { SessionBase  } from './_utils';

type Session = SessionBase;

interface GetProvidersResponse {
    [provider: string]: SessionProvider;
}

interface SessionProvider {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
}

interface ContextProviderProps {
    session: Session | null | undefined;
    options?: SetOptionsParams;
}

interface SetOptionsParams {
    baseUrl?: string;
    basePath?: string;
    clientMaxAge?: number;
    keepAlive?: number;
}

type ContextProvider = FC<ContextProviderProps>;

interface NextContext {
    req?: IncomingMessage;
    ctx?: { req: IncomingMessage };
}

declare function useSession(): [Session | null | undefined, boolean];
declare function providers(): Promise<GetProvidersResponse | null>;
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
    provider?: string,
    data?: Record<string, any> & {
        callbackUrl?: string;
    },
): Promise<void>;
declare const signIn: typeof signin;
declare function signout(data?: { callbackUrl?: string }): Promise<void>;
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
    Session,
    SessionProvider,
};
