import { FC } from 'react';

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
    options?: ContextProviderOptions;
}

interface ContextProviderOptions {
    site?: string;
    basePath?: string;
    clientMaxAge?: number;
    keepAlive?: number;
}

interface SetOptionsParams {
    baseUrl?: string;
    basePath?: string;
    clientMaxAge?: string;
    keepAlive?: boolean;
}

type ContextProvider = FC<ContextProviderProps>;

declare function useSession(): [Session, boolean];
declare function providers(context?: NextPageContext): Promise<GetProvidersResponse | null>;
declare const getProviders: typeof providers;
declare function session(context?: NextPageContext): Promise<Session | null>;
declare const getSession: typeof session;
declare function csrfToken(context?: NextPageContext): Promise<string | null>;
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

/**
 * TODO: `dtslint` throws when parsing Next types... the following types are copied directly from `next/types` ...
 * @see https://github.com/microsoft/dtslint/issues/297
 */

interface NextApiRequest {
    query: {
        [key: string]: string | string[];
    };
    cookies: {
        [key: string]: string;
    };
    body: any;
    env: Env;
}

interface NextPageContext {
    req?: NextApiRequest;
    ctx?: NextPageContext;
    triggerEvent?: boolean;
}

interface Env {
    [key: string]: string;
}
