/* eslint-disable no-duplicate-imports */

import * as crypto from "node:crypto";

import Provider from "oidc-provider";
import * as oidc from "oidc-provider";

oidc.errors.AccessDenied.name;

new oidc.Provider("https://op.example.com");
new Provider("https://op.example.com");

new oidc.Provider("https://op.example.com", {
    rotateRefreshToken: true,
    formats: {
        customizers: {
            async jwt(
                ctx: oidc.KoaContextWithOIDC,
                token: oidc.AccessToken | oidc.ClientCredentials,
                parts: oidc.JWTStructured,
            ) {
                ctx.oidc.issuer.substring(0);
                token.iat.toFixed();
                parts.header = { foo: "bar" };
                parts.payload.foo = "bar";
                return parts;
            },
        },
    },
});

new oidc.Provider("https://op.example.com", {
    pkce: {
        required: () => false,
    },
});

new oidc.Provider("https://op.example.com", {
    extraParams: {
        foo: null,
        bar: (ctx: oidc.KoaContextWithOIDC, value, client: oidc.Client) => {
            ctx.oidc.issuer.substring(0);
            value?.substring(0);
            client.clientId.substring(0);
        },
    },
});

new oidc.Provider("https://op.example.com", {
    adapter: class Adapter {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        async upsert(id: string, payload: object, expiresIn: number) {}
        async consume(id: string) {}
        async destroy(id: string) {}
        async revokeByGrantId(grantId: string) {}

        async find(id: string) {
            return {
                client_id: "...",
            };
        }

        async findByUserCode(userCode: string) {}
        async findByUid(uid: string) {}
    },
});

new oidc.Provider("https://op.example.com", {
    adapter: (name: string) => ({
        name,
        async upsert(id: string, payload: object, expiresIn: number) {},
        async consume(id: string) {},
        async destroy(id: string) {},
        async revokeByGrantId(grantId: string) {},

        async find(id: string) {
            return {
                client_id: "...",
            };
        },
        async findByUserCode(userCode: string) {},
        async findByUid(uid: string) {},
    }),
});

const jwks: oidc.JWKS = {
    keys: [
        {
            kty: "RSA",
            d: "foo",
            n: "foo",
            e: "AQAB",
        },
        {
            kty: "OKP",
            x: "foo",
            d: "foo",
            crv: "Ed25519",
        },
    ],
};

new oidc.Provider("https://op.example.com", { jwks });

new oidc.Provider("https://op.example.com", {
    features: {
        mTLS: {
            getCertificate(ctx: oidc.KoaContextWithOIDC) {
                return undefined;
            },
        },
    },
});

new oidc.Provider("https://op.example.com", {
    features: {
        mTLS: {
            getCertificate(ctx: oidc.KoaContextWithOIDC) {
                return "foo";
            },
        },
    },
});

new oidc.Provider("https://op.example.com", {
    features: {
        mTLS: {
            getCertificate(ctx: oidc.KoaContextWithOIDC) {
                return new crypto.X509Certificate(Buffer.alloc(0));
            },
        },
    },
});

const provider = new oidc.Provider("https://op.example.com", {
    acrValues: ["urn:example:bronze"],
    adapter: class Adapter {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        async upsert(id: string, payload: object, expiresIn: number) {}
        async consume(id: string) {}
        async destroy(id: string) {}
        async revokeByGrantId(grantId: string) {}

        async find(id: string) {
            return {
                consumed: false,
            };
        }
        async findByUserCode(userCode: string) {
            return {
                consumed: false,
            };
        }
        async findByUid(uid: string) {
            return {
                consumed: false,
            };
        }
    },
    claims: {
        acr: null,
        foo: null,
        bar: ["bar"],
    },
    clientBasedCORS(ctx: oidc.KoaContextWithOIDC, origin, client: oidc.Client) {
        ctx.oidc.issuer.substring(0);
        client.clientId.substring(0);
        origin.substring(0);
        return true;
    },
    clients: [
        {
            client_id: "foo",
            token_endpoint_auth_method: "none",
            redirect_uris: ["https://rp.example.com/cb"],
        },
    ],
    clientDefaults: {
        foo: "bar",
        id_token_signed_response_alg: "EdDSA",
        token_endpoint_auth_signing_alg: "ES384",
    },
    clockTolerance: 60,
    conformIdTokenClaims: true,
    cookies: {
        names: {
            session: "_foo",
        },
        long: {
            sameSite: "none",
            secure: true,
        },
        short: {
            httpOnly: true,
            sameSite: "lax",
        },
        keys: ["foo", Buffer.from("bar")],
    },
    discovery: {
        foo: "bar",
        bar: [123],
        baz: {
            foo: "bar",
        },
    },
    extraParams: ["foo", "bar", "baz"],
    async extraTokenClaims(ctx: oidc.KoaContextWithOIDC, token: oidc.AccessToken | oidc.ClientCredentials) {
        ctx.oidc.issuer.substring(0);
        token.jti.substring(0);

        return { foo: "bar" };
    },
    formats: {
        customizers: {
            jwt(ctx: oidc.KoaContextWithOIDC, token: oidc.AccessToken | oidc.ClientCredentials, parts) {
                ctx.oidc.issuer.substring(0);
                token.iat.toFixed();
                parts.header = { foo: "bar" };
                parts.payload.foo = "bar";
                return parts;
            },
        },
    },
    httpOptions(url) {
        url.searchParams.keys();
        const c = new AbortController();
        return { signal: c.signal, "user-agent": "foo" };
    },
    async expiresWithSession(
        ctx: oidc.KoaContextWithOIDC,
        token: oidc.AuthorizationCode | oidc.AccessToken | oidc.DeviceCode,
    ) {
        ctx.oidc.issuer.substring(0);
        token.iat.toFixed();
        return false;
    },
    async issueRefreshToken(
        ctx: oidc.KoaContextWithOIDC,
        client: oidc.Client,
        token: oidc.AuthorizationCode | oidc.DeviceCode | oidc.BackchannelAuthenticationRequest,
    ) {
        ctx.oidc.issuer.substring(0);
        client.clientId.substring(0);
        token.iat.toFixed();
        return false;
    },
    jwks: {
        keys: [
            {
                kty: "RSA",
                d: "foo",
                n: "foo",
                e: "AQAB",
            },
            {
                kty: "OKP",
                x: "foo",
                d: "foo",
                crv: "Ed25519",
            },
        ],
    },
    responseTypes: ["code", "code id_token", "none"],
    pkce: {
        methods: ["plain", "S256"],
        required(ctx: oidc.KoaContextWithOIDC, client: oidc.Client) {
            ctx.oidc.issuer.substring(0);
            client.clientId.substring(0);
            return true;
        },
    },
    routes: {
        authorization: "/auth",
        code_verification: "/device",
        device_authorization: "/device/auth",
        end_session: "/session/end",
        introspection: "/token/introspection",
        jwks: "/jwks",
        registration: "/reg",
        revocation: "/token/revocation",
        token: "/token",
        userinfo: "/me",
        pushed_authorization_request: "/request",
        backchannel_authentication: "/backchannel",
    },
    scopes: ["foo", "bar"],
    subjectTypes: ["public", "pairwise"],
    clientAuthMethods: ["self_signed_tls_client_auth"],
    ttl: {
        CustomToken: 23,
        AccessToken(ctx: oidc.KoaContextWithOIDC, accessToken: oidc.AccessToken) {
            if (accessToken.resourceServer) {
                return accessToken.resourceServer.accessTokenTTL || 60 * 60;
            }
            ctx.oidc.issuer.substring(0);
            accessToken.iat.toFixed();
            return 2;
        },
        ClientCredentials(ctx: oidc.KoaContextWithOIDC, cc: oidc.ClientCredentials) {
            if (cc.resourceServer) {
                return cc.resourceServer.accessTokenTTL || 60 * 60;
            }
            ctx.oidc.issuer.substring(0);
            cc.iat.toFixed();
            return 2;
        },
        AuthorizationCode: 3,
        DeviceCode: 3,
        IdToken: 3,
        RefreshToken: 3,
        BackchannelAuthenticationRequest: 3,
    },
    extraClientMetadata: {
        properties: ["foo", "bar"],
        validator(ctx: oidc.KoaContextWithOIDC, key, value, metadata: oidc.ClientMetadata) {
            ctx.oidc.issuer.substring(0);
            metadata.client_id.substring(0);
            key.substring(0);
            metadata.foo = "bar";
        },
    },
    interactions: {
        async url(ctx: oidc.KoaContextWithOIDC, interaction: oidc.Interaction) {
            ctx.oidc.issuer.substring(0);
            interaction.cid.substring(0);
            interaction.iat.toFixed();
            interaction.returnTo.substring(0);
            JSON.stringify(interaction.params.foo);
            JSON.stringify(interaction.prompt.name);
            interaction.grantId;
            return "foo";
        },
        policy: [
            new oidc.interactionPolicy.Prompt(
                { name: "foo", requestable: true },
                new oidc.interactionPolicy.Check("foo", "bar", "baz", (ctx: oidc.KoaContextWithOIDC) => false),
                new oidc.interactionPolicy.Check(
                    "foo",
                    "bar",
                    "baz",
                    async ctx => oidc.interactionPolicy.Check.REQUEST_PROMPT,
                    async ctx => ({ foo: "bar" }),
                ),
            ),
            new oidc.interactionPolicy.Prompt(
                { name: "foo", requestable: true },
                ctx => ({ foo: "bar" }),
                new oidc.interactionPolicy.Check("foo", "bar", "baz", (ctx: oidc.KoaContextWithOIDC) => false),
                new oidc.interactionPolicy.Check(
                    "foo",
                    "bar",
                    "baz",
                    async ctx => oidc.interactionPolicy.Check.NO_NEED_TO_PROMPT,
                    async ctx => ({ foo: "bar" }),
                ),
            ),
        ],
    },
    async findAccount(ctx: oidc.KoaContextWithOIDC, sub, token) {
        ctx.oidc.issuer.substring(0);
        sub.substring(0);
        if (token !== undefined) {
            token.iat.toFixed();
        }

        if (Math.random() > 0.5) {
            return {
                accountId: sub,
                async claims() {
                    return {
                        sub,
                        foo: "bar",
                    };
                },
            };
        }
    },
    async rotateRefreshToken(ctx) {
        ctx.oidc.issuer.substring(0);
        return true;
    },
    async renderError(ctx: oidc.KoaContextWithOIDC, out, err) {
        ctx.oidc.issuer.substring(0);
        out.error.substring(0);
        err.message.substring(0);
    },
    async pairwiseIdentifier(ctx: oidc.KoaContextWithOIDC, accountId, client: oidc.Client) {
        ctx.oidc.issuer.substring(0);
        accountId.substring(0);
        client.clientId.substring(0);
        return "foo";
    },
    features: {
        rpInitiatedLogout: {
            async postLogoutSuccessSource(ctx) {
                ctx.oidc.issuer.substring(0);
            },
            async logoutSource(ctx: oidc.KoaContextWithOIDC, form) {
                ctx.oidc.issuer.substring(0);
                form.substring(0);
            },
            enabled: true,
        },
        devInteractions: { enabled: false },
        claimsParameter: { enabled: false },
        introspection: {
            enabled: false,
            async allowedPolicy(ctx: oidc.KoaContextWithOIDC, client: oidc.Client, token) {
                ctx.oidc.issuer.substring(0);
                client.clientId.substring(0);
                token.iat.toFixed();
                return false;
            },
        },
        userinfo: { enabled: false },
        jwtUserinfo: { enabled: false },
        webMessageResponseMode: { enabled: false, ack: "draft" },
        revocation: { enabled: false },
        jwtIntrospection: { enabled: false, ack: "draft" },
        jwtResponseModes: { enabled: false },
        pushedAuthorizationRequests: { enabled: false },
        registration: {
            enabled: true,
            initialAccessToken: true,
            policies: {
                async foo(ctx: oidc.KoaContextWithOIDC, metadata: oidc.ClientMetadata) {
                    ctx.oidc.issuer.substring(0);
                    metadata.client_id.substring(0);
                },
            },
            idFactory() {
                return "foo";
            },
            secretFactory() {
                return "foo";
            },
        },
        registrationManagement: {
            enabled: false,
            async rotateRegistrationAccessToken(ctx) {
                ctx.oidc.issuer.substring(0);
                return true;
            },
        },
        resourceIndicators: {
            enabled: true,
            async getResourceServerInfo(ctx: oidc.KoaContextWithOIDC, resourceIndicator, client: oidc.Client) {
                ctx.oidc.issuer.substring(0);
                resourceIndicator.substring(0);
                client.clientId.substring(0);
                return {
                    scope: "api:read",
                };
            },
            async defaultResource(ctx: oidc.KoaContextWithOIDC, client: oidc.Client, oneOf) {
                if (oneOf) {
                    return oneOf[0];
                }
                return "";
            },
        },
        requestObjects: {
            request: false,
            requestUri: false,
            requireUriRegistration: false,
            mode: "lax",
        },
        encryption: { enabled: false },
        fapi: { enabled: false, profile: "1.0 Final" },
        ciba: {
            enabled: false,
            deliveryModes: ["ping"],
            async triggerAuthenticationDevice(
                ctx: oidc.KoaContextWithOIDC,
                request: oidc.BackchannelAuthenticationRequest,
                account: oidc.Account,
                client: oidc.Client,
            ) {
                ctx.oidc.issuer.substring(0);
                request.jti.substring(0);
                account.accountId.substring(0);
                client.backchannelAuthenticationRequestSigningAlg;
                client.backchannelClientNotificationEndpoint;
                client.backchannelTokenDeliveryMode;
                client.backchannelUserCodeParameter;
            },
        },
        clientCredentials: { enabled: false },
        backchannelLogout: { enabled: false },
        dPoP: { enabled: false },
        deviceFlow: {
            enabled: false,
            charset: "digits",
            mask: "*** *** ***",
            deviceInfo(ctx) {
                ctx.oidc.issuer.substring(0);
                return {};
            },
            async userCodeInputSource(ctx: oidc.KoaContextWithOIDC, form, out, err) {
                ctx.oidc.issuer.substring(0);
                form.substring(0);
                if (out !== undefined) {
                    out.error;
                }
                if (err !== undefined) {
                    err.message.substring(0);
                }
            },
            async userCodeConfirmSource(ctx: oidc.KoaContextWithOIDC, form, client: oidc.Client, deviceInfo, userCode) {
                ctx.oidc.issuer.substring(0);
                form.substring(0);
                client.clientId.substring(0);
                JSON.stringify(deviceInfo.foo);
                userCode.substring(0);
            },
            async successSource(ctx) {
                ctx.oidc.issuer.substring(0);
            },
        },
        mTLS: {
            enabled: false,
            certificateBoundAccessTokens: true,
            selfSignedTlsClientAuth: true,
            tlsClientAuth: true,
            getCertificate(ctx) {
                ctx.oidc.issuer.substring(0);
                return "foo";
            },
            certificateAuthorized(ctx) {
                ctx.oidc.issuer.substring(0);
                return false;
            },
            certificateSubjectMatches(ctx: oidc.KoaContextWithOIDC, property: oidc.TLSClientAuthProperty, expected) {
                ctx.oidc.issuer.substring(0);
                property.substring(0);
                expected.substring(0);
                return false;
            },
        },
    },
    enabledJWA: {
        clientAuthSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA"],
        idTokenSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA"],
        requestObjectSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA"],
        userinfoSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA"],
        introspectionSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA"],
        authorizationSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA"],
        idTokenEncryptionAlgValues: ["A128KW", "A256KW", "ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A256KW", "RSA-OAEP"],
        requestObjectEncryptionAlgValues: [
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "ECDH-ES+A128KW",
            "ECDH-ES+A256KW",
            "RSA-OAEP",
        ],
        userinfoEncryptionAlgValues: ["A128KW", "A256KW", "ECDH-ES", "ECDH-ES+A128KW", "ECDH-ES+A256KW", "RSA-OAEP"],
        introspectionEncryptionAlgValues: [
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "ECDH-ES+A128KW",
            "ECDH-ES+A256KW",
            "RSA-OAEP",
        ],
        authorizationEncryptionAlgValues: [
            "A128KW",
            "A256KW",
            "ECDH-ES",
            "ECDH-ES+A128KW",
            "ECDH-ES+A256KW",
            "RSA-OAEP",
        ],
        idTokenEncryptionEncValues: ["A128CBC-HS256", "A128GCM", "A256CBC-HS512", "A256GCM"],
        requestObjectEncryptionEncValues: ["A128CBC-HS256", "A128GCM", "A256CBC-HS512", "A256GCM"],
        userinfoEncryptionEncValues: ["A128CBC-HS256", "A128GCM", "A256CBC-HS512", "A256GCM"],
        introspectionEncryptionEncValues: ["A128CBC-HS256", "A128GCM", "A256CBC-HS512", "A256GCM"],
        authorizationEncryptionEncValues: ["A128CBC-HS256", "A128GCM", "A256CBC-HS512", "A256GCM"],
        dPoPSigningAlgValues: ["RS256", "PS256", "ES256", "EdDSA"],
    },
});

provider.on("access_token.saved", (accessToken: oidc.AccessToken) => {
    accessToken.jti.substring(0);
});

provider.registerGrantType(
    "urn:example",
    async (ctx: oidc.KoaContextWithOIDC, next) => {
        ctx.oidc.route.substring(0);
        return next();
    },
    ["foo", "bar"],
    ["foo"],
);

provider.on("authorization.accepted", (ctx: oidc.KoaContextWithOIDC) => {
    const value = ctx.oidc.cookies.get("key");
    if (value !== undefined) {
        value.substring(0);
    }

    ctx.oidc.cookies.set("key", "value", { signed: true, sameSite: "strict" });
});

provider.on("interaction.started", (ctx: oidc.KoaContextWithOIDC, prompt: oidc.PromptDetail) => {
    ctx.oidc.route.substring(0);
    prompt.name.substring(0);
    prompt.reasons.pop();
});

provider.use((ctx: oidc.KoaContextWithOIDC, next) => {
    ctx.href.substring(0);
    return next();
});

provider.use(async (ctx: oidc.KoaContextWithOIDC, next) => {
    ctx.href.substring(0);
    await next();
    //
});

provider.backchannelResult("foo", "bar").then(console.log);
provider.backchannelResult(new provider.BackchannelAuthenticationRequest({ accountId: "foo", clientId: "bar" }), "bar")
    .then(console.log);
provider.backchannelResult("foo", new provider.Grant({ clientId: "foo", accountId: "bar" })).then(console.log);
provider.backchannelResult("foo", new oidc.errors.AccessDenied()).then(console.log);

const _clientJwtAuthExpectedAudience = provider.OIDCContext.prototype.clientJwtAuthExpectedAudience;
provider.OIDCContext.prototype.clientJwtAuthExpectedAudience = function clientJwtAuthExpectedAudience() {
    const acceptedAudiences = _clientJwtAuthExpectedAudience.call(this);
    acceptedAudiences.add("https://as.example.com/token");
    return acceptedAudiences;
};

(async () => {
    const client = await provider.Client.find("foo");
    if (client !== undefined) {
        client.clientId.substring(0);
        client.backchannelPing(new provider.BackchannelAuthenticationRequest({ accountId: "foo", clientId: "bar" }));
    }
    const accessToken = await provider.AccessToken.find("foo");
    if (accessToken !== undefined) {
        accessToken.jti.substring(0);
    }

    try {
        await Promise.all([
            provider.AccessToken.revokeByGrantId("grantId"),
            provider.AuthorizationCode.revokeByGrantId("grantId"),
            provider.DeviceCode.revokeByGrantId("grantId"),
            provider.RefreshToken.revokeByGrantId("grantId"),
            provider.BackchannelAuthenticationRequest.revokeByGrantId("grantId"),
        ]);
    } catch (e) {}
})();
