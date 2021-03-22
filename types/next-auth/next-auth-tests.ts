/**
 * Typescript definition tests for next-auth module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */
import Providers, { AppProvider, DefaultProviders } from 'next-auth/providers';
import Adapters, { Adapter, EmailAppProvider, Profile, Session, VerificationRequest } from 'next-auth/adapters';
import * as client from 'next-auth/client';
import * as JWTType from 'next-auth/jwt';
import NextAuth, * as NextAuthTypes from 'next-auth';
import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';

/* copied from next@10.0 */
export interface NextApiRequest extends IncomingMessage {
    query: {
        [key: string]: string | string[];
    };
    cookies: {
        [key: string]: string;
    };
    body: any;
    env: any;
    preview?: boolean;
    previewData?: any;
}

export type Send<T> = (body: T) => void;

export type NextApiResponse<T = any> = ServerResponse & {
    send: Send<T>;
    json: Send<T>;
    status: (statusCode: number) => NextApiResponse<T>;
    redirect(url: string): NextApiResponse<T>;
    redirect(status: number, url: string): NextApiResponse<T>;
    setPreviewData: (data: object | string, options?: {
        maxAge?: number;
    }) => NextApiResponse<T>;
    clearPreviewData: () => NextApiResponse<T>;
};
/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */

// --------------------------------------------------------------------------
// Server
// --------------------------------------------------------------------------

const req: NextApiRequest = Object.assign(new IncomingMessage(new Socket()), {
    query: {},
    cookies: {},
    body: {},
    env: {},
});

const res: NextApiResponse = Object.assign(new ServerResponse(req), {
    send: (body: string) => undefined,
    json: (body: string) => undefined,
    status: (code: number) => res,
    redirect: (statusOrUrl: number | string, url?: string) => res as any,
    setPreviewData: (data: object | string) => res,
    clearPreviewData: () => res,
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

const exampleUser: NextAuthTypes.User = {
    name: '',
    image: '',
    email: '',
};

const exampleSession: Session = {
    userId: '',
    accessToken: '',
    sessionToken: '',
    expires: new Date(),
};

const exampleVerificatoinRequest: VerificationRequest = {
    identifier: '',
    token: '',
    expires: new Date(),
};

const adapter: Adapter<NextAuthTypes.User, Profile, Session, VerificationRequest> = {
    getAdapter(appOptions: NextAuthTypes.AppOptions) {
        return Promise.resolve({
            createUser: (profile: Profile) => Promise.resolve(exampleUser),
            getUser: (id: string) => Promise.resolve(exampleUser),
            getUserByEmail: (email: string) => Promise.resolve(exampleUser),
            getUserByProviderAccountId: (providerId: string, providerAccountId: string) => Promise.resolve(exampleUser),
            updateUser: (user: NextAuthTypes.User) => Promise.resolve(exampleUser),
            linkAccount: (
                userId: string,
                providerId: string,
                providerType: string,
                providerAccountId: string,
                refreshToken: string,
                accessToken: string,
                accessTokenExpires: number,
            ) => Promise.resolve(),
            createSession: (user: NextAuthTypes.User) => Promise.resolve(exampleSession),
            getSession: (sessionToken: string) => Promise.resolve(exampleSession),
            updateSession: (session: Session, force?: boolean) => Promise.resolve(exampleSession),
            deleteSession: (sessionToken: string) => Promise.resolve(),
            createVerificationRequest: (
                email: string,
                url: string,
                token: string,
                secret: string,
                provider: EmailAppProvider,
                options: NextAuthTypes.AppOptions,
            ) => Promise.resolve(exampleVerificatoinRequest),
            getVerificationRequest: (
                email: string,
                verificationToken: string,
                secret: string,
                provider: AppProvider,
            ) => Promise.resolve(exampleVerificatoinRequest),
            deleteVerificationRequest: (
                email: string,
                verificationToken: string,
                secret: string,
                provider: AppProvider,
            ) => Promise.resolve(),
        });
    },
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
        signingKey: 'some-key',
        encryptionKey: 'some-key',
        encode: () => Promise.resolve('foo'),
        decode: () => Promise.resolve({}),
    },
    pages: pageOptions,
    callbacks: {
        signIn: (user: NextAuthTypes.User, account: Record<string, unknown>, profile: Record<string, unknown>) => Promise.resolve(true),
        redirect: (url: string, baseUrl: string) => Promise.resolve('path/to/foo'),
        session: (session: NextAuthTypes.Session, user: NextAuthTypes.User) => Promise.resolve<any>(user),
        jwt: (
            token: JWTType.JWT,
            user: NextAuthTypes.User,
            account: Record<string, unknown>,
            profile: Record<string, unknown>,
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
    adapter,
    useSecureCookies: true,
    cookies: {
        sessionToken: {
            name: `__Secure-next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: true as true,
                path: '/',
                secure: true,
                domain: 'foo.com',
            },
        },
    },
};

// $ExpectType void | Promise<void>
NextAuth(simpleConfig);

// $ExpectType void | Promise<void>
NextAuth(allConfig);

// $ExpectType void | Promise<void>
NextAuth(req, res, simpleConfig);

// $ExpectType void | Promise<void>
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

// $ExpectType Promise<Record<string, AppProvider> | null>
client.getProviders();

// $ExpectType Promise<Record<string, AppProvider> | null>
client.providers();

// $ExpectType Promise<string | null>
client.getCsrfToken({ req });

// $ExpectType Promise<string | null>
client.csrfToken({ req });

// $ExpectType Promise<void>
client.signin('github', { data: 'foo', redirect: false }, { login: 'username' });

// $ExpectType Promise<SignInResponse>
client.signin('credentials', { data: 'foo', redirect: false });

// $ExpectType Promise<SignInResponse>
client.signin('email', { data: 'foo', redirect: false });

// $ExpectType Promise<void>
client.signin('email', { data: 'foo', redirect: true });

// $ExpectType Promise<void>
client.signout();

// $ExpectType Promise<void>
client.signout({ callbackUrl: 'https://foo.com/callback', redirect: true });

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

// $ExpectType NonNullParams<ProviderEmailOptions> & { id: "email"; type: "email"; }
Providers.Email({
    server: 'path/to/server',
    from: 'path/from',
});

// $ExpectType NonNullParams<ProviderEmailOptions> & { id: "email"; type: "email"; }
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

// $ExpectType NonNullParams<ProviderCredentialsOptions> & { id: "credentials"; type: "credentials"; }
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

// $ExpectType Provider<"apple", "oauth"> & { protection: "none"; }
Providers.Apple({
    clientId: 'foo123',
    clientSecret: {
        appleId: 'foo@icloud.com',
        teamId: 'foo',
        privateKey: '123xyz',
        keyId: '1234',
    },
});

// $ExpectType Provider<"twitter", "oauth">
Providers.Twitter({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"facebook", "oauth">
Providers.Facebook({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"github", "oauth">
Providers.GitHub({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"github", "oauth">
Providers.GitHub({
    clientId: 'foo123',
    clientSecret: 'bar123',
    scope: 'change:thing read:that',
});

// $ExpectType Provider<"gitlab", "oauth">
Providers.GitLab({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"slack", "oauth">
Providers.Slack({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"google", "oauth">
Providers.Google({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"google", "oauth">
Providers.Google({
    clientId: 'foo123',
    clientSecret: 'bar123',
    authorizationUrl: 'https://foo.google.com',
});

// $ExpectType Provider<"auth0", "oauth"> & { domain: string; }
Providers.Auth0({
    clientId: 'foo123',
    clientSecret: 'bar123',
    domain: 'https://foo.auth0.com',
});

// $ExpectType Provider<"auth0", "oauth"> & { domain: string; }
Providers.Auth0({
    clientId: 'foo123',
    clientSecret: 'bar123',
    domain: 'https://foo.auth0.com',
    profile: () => ({
        id: 'foo123',
        name: 'foo',
        email: 'foo@bar.io',
        image: 'https://foo.auth0.com/image/1.png',
    }),
});

// $ExpectType Provider<string, "oauth"> & { domain: string; }
Providers.IdentityServer4({
    id: 'identity-server4',
    name: 'IdentityServer4',
    scope: 'change:thing read:that',
    domain: 'https://foo.is4.com',
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"discord", "oauth">
Providers.Discord({
    clientId: 'foo123',
    clientSecret: 'bar123',
    scope: 'identify',
});

// $ExpectType Provider<"twitch", "oauth">
Providers.Twitch({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"okta", "oauth"> & { domain: string; }
Providers.Okta({
    clientId: 'foo123',
    clientSecret: 'bar123',
    domain: 'https://foo.auth0.com',
});

// $ExpectType Provider<"battlenet", "oauth"> & { region: string; }
Providers.BattleNet({
    clientId: 'foo123',
    clientSecret: 'bar123',
    region: 'europe',
});

// $ExpectType Provider<"box", "oauth">
Providers.Box({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"cognito", "oauth"> & { domain: string; }
Providers.Cognito({
    clientId: 'foo123',
    clientSecret: 'bar123',
    domain: 'https://foo.auth0.com',
});

// $ExpectType Provider<"yandex", "oauth">
Providers.Yandex({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"linkedin", "oauth">
Providers.LinkedIn({
    clientId: 'foo123',
    clientSecret: 'bar123',
    scope: 'r_emailaddress r_liteprofile',
});

// $ExpectType Provider<"spotify", "oauth">
Providers.Spotify({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"spotify", "oauth">
Providers.Spotify({
    clientId: 'foo123',
    clientSecret: 'bar123',
    scope: 'user-read-email',
});

// $ExpectType Provider<"basecamp", "oauth">
Providers.Basecamp({
    clientId: 'foo123',
    clientSecret: 'bar123',
});

// $ExpectType Provider<"reddit", "oauth">
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
JWTType.encode({
    token: { key: 'value' },
    secret: 'secret',
});

// $ExpectType Promise<WithAdditionalParams<JWT>>
JWTType.decode({
    token: 'token',
    secret: 'secret',
});

// $ExpectType Promise<string>
JWTType.getToken({
    req,
    raw: true,
});

// $ExpectType Promise<WithAdditionalParams<JWT>>
JWTType.getToken({
    req,
    secret: 'secret',
});
