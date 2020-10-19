/**
 * Typescript definition tests for next-auth module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import * as client from 'next-auth/client';
import * as JWT from 'next-auth/jwt';
import NextAuth, * as NextAuthTypes from 'next-auth';
import { GenericObject, SessionBase, NextApiRequest, NextApiResponse } from 'next-auth/_utils';
import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';

// --------------------------------------------------------------------------
// Server
// --------------------------------------------------------------------------

const req: NextApiRequest = Object.assign(new IncomingMessage(new Socket()), {
    query: {},
    cookies: {},
    body: {},
});

const res: NextApiResponse = Object.assign(new ServerResponse(req), {
    send: () => undefined,
    json: () => undefined,
    status: (code: number) => res,
});

const pageOptions = {
    signin: 'path/to/signin',
    signout: 'path/to/signout',
    error: 'path/to/error',
    verifyRequest: 'path/to/verify',
    newUsers: 'path/to/signup',
};

const simpleConfig = {
    site: 'https://foo.com',
    providers: [
        Providers.GitHub({
            clientId: '123',
            clientSecret: '123',
            scope:
                'user public_repo repo repo_deployment repo:status read:repo_hook read:org read:public_key read:gpg_key',
        }),
    ],
};

const allConfig = {
    site: 'https://foo.com',
    providers: [
        Providers.Twitter({
            clientId: '123',
            clientSecret: '123',
        }),
    ],
    database: 'path/to/db',
    debug: true,
    secret: 'my secret',
    session: {
        jwt: true,
        maxAge: 365,
        updateAge: 60,
    },
    jwt: {
        secret: 'secret-thing',
        maxAge: 365,
        encryption: true,
        encode: () => Promise.resolve('foo'),
        decode: () => Promise.resolve('foo'),
    },
    pages: pageOptions,
    callbacks: {
        signIgn: (user: NextAuthTypes.User, account: GenericObject, profile: GenericObject) => Promise.resolve(true),
        redirect: (url: string, baseUrl: string) => Promise.resolve('path/to/foo'),
        session: (session: SessionBase, user: NextAuthTypes.User) => Promise.resolve<any>(user),
        jwt: (
            token: GenericObject,
            user: NextAuthTypes.User,
            account: GenericObject,
            profile: GenericObject,
            isNewUser: boolean,
        ) => Promise.resolve({}),
    },
    events: {
        signIn: async (message: string) => {
            return undefined;
        },
        signOut: async (message: string) => {
            return undefined;
        },
        createUser: async (message: string) => {
            return undefined;
        },
        linkAccount: async (message: string) => {
            return undefined;
        },
        session: async (message: string) => {
            return undefined;
        },
        error: async (message: string) => {
            return undefined;
        },
    },
    adapter: {
        getAdapter: (appOptions: NextAuthTypes.AppOptions) => {
            return Promise.resolve({
                createUser: (profile: any) => Promise.resolve({}),
                getUser: (id: string) => Promise.resolve({}),
                getUserByEmail: (email: string) => Promise.resolve({}),
                getUserByProviderAccountId: (providerId: string, providerAccountId: string) => Promise.resolve({}),
                updateUser: (profile: any) => Promise.resolve({}),
                linkAccount: (
                    userId: string,
                    providerId: string,
                    providerType: string,
                    providerAccountId: string,
                    refreshToken: string,
                    accessToken: string,
                    accessTokenExpires: number,
                ) => Promise.resolve(),
                createSession: (user: any) => Promise.resolve({}),
                getSession: (sessionToken: string) => Promise.resolve({}),
                updateSession: (session: any) => Promise.resolve(),
                deleteSession: (sessionToken: string) => Promise.resolve(),
            });
        },
    },
    useSecureCookies: true,
    cookies: {
        sessionToken: {
            name: `__Secure-next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: true as true,
                path: '/',
                secure: true,
            },
        },
    },
};

// $ExpectType Promise<void>
NextAuth(req, res, simpleConfig);

// $ExpectType Promise<void>
NextAuth(req, res, allConfig);

// --------------------------------------------------------------------------
// Client
// --------------------------------------------------------------------------

const baseContext = {
    req: {
        query: {
            foo: 'bar',
        },
        cookies: {
            foo: 'bar',
        },
        body: {
            foo: 'bar',
        },
        env: {
            FOO: 'FOO',
        },
    },
    triggerEvent: false,
};

const githubProvider = {
    id: '123',
    name: 'github',
    type: 'foo',
    signinUrl: 'path/to/sign-in',
    callbackUrl: 'path/to/callback',
};

const session = {
    user: {
        name: 'Bruce',
        email: 'bruce@lee.com',
        image: 'path/to/img',
    },
    accessToken: '123z',
    expires: '1234',
};

// $ExpectType [Session | null | undefined, boolean]
client.useSession();

// $ExpectType Promise<Session | null>
client.getSession({ req });

// $ExpectType Promise<Session | null>
client.session({ req });

// $ExpectType Promise<GetProvidersResponse | null>
client.getProviders();

// $ExpectType Promise<GetProvidersResponse | null>
client.providers();

// $ExpectType Promise<string | null>
client.getCsrfToken({ req });

// $ExpectType Promise<string | null>
client.csrfToken({ req });

// $ExpectType Promise<void>
client.signin('github', { data: 'foo' });

// $ExpectType Promise<void>
client.signout();

// $ExpectType Promise<void>
client.signout({ callbackUrl: 'https://foo.com/callback' });

// $ExpectType ReactElement<any, any> | null
client.Provider({
    session,
    options: {
        baseUrl: 'https://foo.com',
        basePath: '/',
        clientMaxAge: 1234,
    },
});

// $ExpectType ReactElement<any, any> | null
client.Provider({
    session,
});

// $ExpectType ReactElement<any, any> | null
client.Provider({
    session: undefined,
    options: {},
});

// $ExpectType ReactElement<any, any> | null
client.Provider({
    session: null,
    options: {
        baseUrl: 'https://foo.com',
        basePath: '/',
        clientMaxAge: 1234,
        keepAlive: 4321,
    },
});

// --------------------------------------------------------------------------
// Providers
// --------------------------------------------------------------------------

// $ExpectType GenericReturnConfig
Providers.Email({
    server: 'path/to/server',
    from: 'path/from',
});

// $ExpectType GenericReturnConfig
Providers.Email({
    server: {
        host: 'host',
        port: 123,
        auth: {
            user: 'foo',
            pass: '123',
        },
    },
    from: 'path/from',
});

// $ExpectType GenericReturnConfig
Providers.Credentials({
    id: 'login',
    name: 'account',
    credentials: {
        user: {
            label: 'Password',
            type: 'password',
        },
        password: {
            label: 'Password',
            type: 'password',
        },
    },
    authorize: async credentials => {
        const user = {
            /* fetched user */
        };
        return Promise.resolve(user);
    },
});

// $ExpectType GenericReturnConfig
Providers.Apple({
    clientId: 'foo123',
    clientSecret: {
        appleId: 'foo@icloud.com',
        teamId: 'foo',
        privateKey: '123xyz',
        keyId: '1234',
    },
});

// $ExpectType GenericReturnConfig
Providers.Twitter({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Facebook({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.GitHub({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.GitHub({
    clientId: 'foo123',
    clientSecret: 'bar123',
    scope: 'change:thing read:that',
});

// $ExpectType GenericReturnConfig
Providers.GitLab({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Slack({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Google({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Google({
    clientId: 'foo123',
    clientSecret: 'bar123',
    authorizationUrl: 'https://foo.google.com',
});

// $ExpectType GenericReturnConfig
Providers.Auth0({
    clientId: 'foo123',
    clientSecret: 'bar123',
    domain: 'https://foo.auth0.com',
});

// $ExpectType GenericReturnConfig
Providers.IdentityServer4({
    id: 'identity-server4',
    name: 'IdentityServer4',
    scope: 'change:thing read:that',
    domain: 'https://foo.is4.com',
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Discord({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Twitch({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Mixer({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Okta({
    clientId: 'foo123',
    clientSecret: 'bar123',
    domain: 'https://foo.auth0.com',
});

// $ExpectType GenericReturnConfig
Providers.BattleNet({
    clientId: 'foo123',
    clientSecret: 'bar123',
    region: 'europe',
});

// $ExpectType GenericReturnConfig
Providers.Box({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Cognito({
    clientId: 'foo123',
    clientSecret: 'bar123',
    domain: 'https://foo.auth0.com',
});

// $ExpectType GenericReturnConfig
Providers.Yandex({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.LinkedIn({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Spotify({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Spotify({
    clientId: 'foo123',
    clientSecret: 'bar123',
    scope: 'user-read-email',
});

// $ExpectType GenericReturnConfig
Providers.Basecamp({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType GenericReturnConfig
Providers.Reddit({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// --------------------------------------------------------------------------
// Adapters
// --------------------------------------------------------------------------

Adapters.Default({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
});

Adapters.TypeORM.Adapter({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
});

// --------------------------------------------------------------------------
// JWT
// --------------------------------------------------------------------------

// $ExpectType Promise<string>
JWT.encode({
    token: { key: 'value' },
    secret: 'secret',
});

// $ExpectType Promise<object>
JWT.decode({
    token: 'token',
    secret: 'secret',
});

// $ExpectType Promise<string>
JWT.getToken({
    req,
    raw: true,
});

// $ExpectType Promise<object>
JWT.getToken({
    req,
    secret: 'secret',
});
