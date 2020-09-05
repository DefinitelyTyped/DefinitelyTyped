import { FC } from 'react';
import { GetServerSidePropsContext, NextApiRequest } from 'next';

export interface Session {
    user: {
        name: string;
        email: string;
        image: string;
    };
    accessToken?: string;
    expires: string;
}

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

interface GenericObject {
    [key: string]: any;
}

interface ContextProviderProps {
    session: Session;
    options?: SetOptionsParams;
}

interface SetOptionsParams {
    baseUrl?: string;
    basePath?: string;
    clientMaxAge?: number;
    keepAlive?: boolean;
}

type ContextProvider = FC<ContextProviderProps>;

declare function useSession(): [Session, boolean];
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
    data?: GenericObject & {
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
};

type NextContext = {
    req?: GetServerSidePropsContext['req'] | NextApiRequest;
    ctx?: GetServerSidePropsContext;
};
