import { FC } from 'react';
import { IncomingMessage } from 'http';

interface Session {
    user: {
        name: string;
        email: string;
        image: string;
    };
    accessToken: string;
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
}

type ContextProvider = FC<ContextProviderProps>;

declare function useSession(): [Session, boolean];
declare function getSession(context: NextPageContext): Promise<Session | null>;
declare function session(context: NextPageContext): Promise<Session | null>;
declare function getProviders(context: NextPageContext): Promise<GetProvidersResponse | null>;
declare function providers(context: NextPageContext): Promise<GetProvidersResponse | null>;
declare function getCsrfToken(context: NextPageContext): Promise<string | null>;
declare function csrfToken(context: NextPageContext): Promise<string | null>;
declare function signin(provider: SessionProvider, data: GenericObject): Promise<void>;
declare function signout(context: NextPageContext): Promise<void>;
declare const Provider: ContextProvider;

export { useSession, getSession, session, getProviders, providers, getCsrfToken, csrfToken, signin, signout, Provider };

/**
 * TODO: `dtslint` throws when parsing Next types... the following types are copied directly from `next/types` ...
 * @see https://github.com/microsoft/dtslint/issues/297
 */

interface NextApiRequest extends IncomingMessage {
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
    req: NextApiRequest;
}

interface Env {
    [key: string]: string;
}
