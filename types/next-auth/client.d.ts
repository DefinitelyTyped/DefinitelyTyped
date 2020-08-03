import { FC } from 'react';

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

interface SetOptionsParams {
    baseUrl?: string;
    basePath?: string;
    clientMaxAge?: string;
    keepAlive?: boolean;
}

interface DefaultExport {
    useSession: typeof useSession;
    getSession: typeof session;
    session: typeof session;
    getProviders: typeof providers;
    providers: typeof providers;
    getCsrfToken: typeof csrfToken;
    csrfToken: typeof csrfToken;
    signin: typeof signin;
    signIn: typeof signin;
    signout: typeof signout;
    signOut: typeof signout;
    options: typeof setOptions;
    setOptions: typeof setOptions;
    Provider: typeof Provider;
}

type ContextProvider = FC<ContextProviderProps>;

declare function useSession(): [Session, boolean];
declare function session(context: NextPageContext): Promise<Session | null>;
declare function providers(context: NextPageContext): Promise<GetProvidersResponse | null>;
declare function csrfToken(context: NextPageContext): Promise<string | null>;
declare function signin(provider: SessionProvider, data: GenericObject): Promise<void>;
declare function signout(context: NextPageContext): Promise<void>;
declare function setOptions(options: SetOptionsParams): void;
declare const Provider: ContextProvider;

declare const _default: DefaultExport;
export default _default;

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
