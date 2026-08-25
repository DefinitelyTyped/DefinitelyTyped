/* eslint-disable no-duplicate-imports */

import * as crypto from "node:crypto";

import KeyGrip from "keygrip";
import Provider from "oidc-provider";
import * as oidc from "oidc-provider";
import * as grantHelpers from "oidc-provider/lib/helpers/grants.js";

oidc.errors.AccessDenied.name;

Provider.ctx;

new oidc.Provider("https://op.example.com");
new Provider("https://op.example.com");

new Provider("https://op.example.com", {
    cookies: {
        keys: new KeyGrip([]),
    },
});

new Provider("https://op.example.com", {
    cookies: {
        long: {
            // @ts-expect-error Cookie priority has a finite set of supported values.
            priority: "urgent",
        },
    },
});

const getAttestationSignaturePublicKey: oidc.AttestationSignaturePublicKey = async () =>
    crypto.generateKeyPairSync(
        "ec",
        { namedCurve: "P-256" },
    ).publicKey;
const issueCredential: oidc.OpenID4VCIIssueCredential = async () => ({ credentials: ["credential"] });
const authorizationDetailsForGrantSource: oidc.AuthorizationDetailsForGrantSource = async () => undefined;
const authorizationDetailsForAccessToken: oidc.AuthorizationDetailsForAccessToken = async () => undefined;
const authorizationDetailsForIntrospection: oidc.AuthorizationDetailsForIntrospection = async () => undefined;
const paymentAuthorizationDetail = {
    validate(_ctx: oidc.KoaContextWithOIDC, detail: oidc.AuthorizationDetail) {
        detail.type.substring(0);
    },
};
const dynamicallyEnabled: boolean = true;

new Provider("https://op.example.com", {
    features: {
        attestClientAuth: {
            enabled: true,
            challengeSecret: Buffer.alloc(32),
            getAttestationSignaturePublicKey,
        },
        ciba: {
            enabled: true,
            triggerAuthenticationDevice() {},
            validateRequestContext() {},
            verifyUserCode() {},
        },
        fapi: {
            enabled: true,
            profile: "2.0",
        },
        mTLS: {
            enabled: true,
            tlsClientAuth: true,
            getCertificate: () => undefined,
            certificateAuthorized: () => true,
            certificateSubjectMatches: () => true,
        },
        openid4vci: {
            enabled: true,
            nonceSecret: Buffer.alloc(32),
            credentialConfigurationsSupported: {
                credential: { format: "example" },
            },
            issueCredential,
        },
        introspection: { enabled: true },
        richAuthorizationRequests: {
            enabled: true,
            types: { payment: paymentAuthorizationDetail },
            authorizationDetailsForGrantSource,
            authorizationDetailsForAccessToken,
            authorizationDetailsForIntrospection,
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        attestClientAuth: {
            enabled: dynamicallyEnabled,
            challengeSecret: Buffer.alloc(32),
            getAttestationSignaturePublicKey,
        },
        ciba: {
            enabled: dynamicallyEnabled,
            triggerAuthenticationDevice() {},
            validateRequestContext() {},
            verifyUserCode() {},
        },
        fapi: {
            enabled: dynamicallyEnabled,
            profile: () => undefined,
        },
        mTLS: {
            enabled: dynamicallyEnabled,
            tlsClientAuth: dynamicallyEnabled,
            getCertificate: () => undefined,
            certificateAuthorized: () => true,
            certificateSubjectMatches: () => true,
        },
        openid4vci: {
            enabled: dynamicallyEnabled,
            nonceSecret: Buffer.alloc(32),
            credentialConfigurationsSupported: {
                credential: { format: "example" },
            },
            issueCredential,
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        mTLS: {
            enabled: true,
            certificateBoundAccessTokens: true,
            getCertificate: () => undefined,
        },
        richAuthorizationRequests: {
            enabled: true,
            types: {},
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        mTLS: { enabled: true },
    },
});

new Provider("https://op.example.com", {
    features: {
        mTLS: {
            enabled: dynamicallyEnabled,
            certificateBoundAccessTokens: dynamicallyEnabled,
            getCertificate: () => undefined,
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        openid4vci: {
            enabled: true,
            nonceSecret: Buffer.alloc(32),
            credentialConfigurationsSupported: {
                credential: { format: "example" },
            },
            issueCredential,
        },
        richAuthorizationRequests: {
            enabled: true,
            types: {},
            authorizationDetailsForGrantSource,
            authorizationDetailsForAccessToken,
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error enabled attestClientAuth requires its challenge secret and key resolver
        attestClientAuth: { enabled: true },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error the challenge secret does not make the attestation key resolver optional
        attestClientAuth: { enabled: true, challengeSecret: Buffer.alloc(32) },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error active RAR with introspection requires an introspection projection policy
        introspection: { enabled: true },
        richAuthorizationRequests: {
            enabled: true,
            types: { payment: paymentAuthorizationDetail },
            authorizationDetailsForGrantSource,
            authorizationDetailsForAccessToken,
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        openid4vci: {
            // @ts-expect-error OpenID4VCI activates an otherwise empty enabled RAR configuration
            enabled: true,
            nonceSecret: Buffer.alloc(32),
            credentialConfigurationsSupported: {
                credential: { format: "example" },
            },
            issueCredential,
        },
        richAuthorizationRequests: {
            enabled: true,
            types: {},
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error enabled CIBA requires its always-invoked application callbacks
        ciba: { enabled: true },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error verifyUserCode remains mandatory when the other CIBA callbacks are configured
        ciba: {
            enabled: true,
            triggerAuthenticationDevice() {},
            validateRequestContext() {},
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error enabled FAPI requires a profile
        fapi: { enabled: true },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error enabled OpenID4VCI requires a nonce secret, configurations, and issuance callback
        openid4vci: { enabled: true },
    },
});

new Provider("https://op.example.com", {
    features: {
        openid4vci: {
            // @ts-expect-error issueCredential remains mandatory when the other OpenID4VCI values are configured
            enabled: true,
            nonceSecret: Buffer.alloc(32),
            credentialConfigurationsSupported: { credential: { format: "example" } },
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error certificate-bound access tokens require a certificate resolver
        mTLS: { enabled: true, certificateBoundAccessTokens: true },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error self-signed TLS client authentication requires a certificate resolver
        mTLS: { enabled: true, selfSignedTlsClientAuth: true },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error tls_client_auth requires all three certificate callbacks
        mTLS: { enabled: true, tlsClientAuth: true, getCertificate: () => undefined },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error a dynamic certificate-bound flag still requires a certificate resolver
        mTLS: {
            enabled: dynamicallyEnabled,
            certificateBoundAccessTokens: dynamicallyEnabled,
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error a dynamic tls_client_auth flag still requires all three certificate callbacks
        mTLS: {
            enabled: dynamicallyEnabled,
            tlsClientAuth: dynamicallyEnabled,
            getCertificate: () => undefined,
        },
    },
});

new Provider("https://op.example.com", {
    features: {
        // @ts-expect-error a non-empty RAR type map requires grant-source and access-token policies
        richAuthorizationRequests: {
            enabled: true,
            types: { payment: paymentAuthorizationDetail },
        },
    },
});

new Provider("https://op.example.com", {
    assertJwtClientAuthClaimsAndHeader(ctx, claims, header, client) {
        ctx.oidc.issuer.substring(0);
        claims.sub;
        header.typ;
        client.clientId.substring(0);
    },
});

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
            },
        },
    },
});

const findAccountRefreshToken = null as unknown as oidc.RefreshToken;
const findAccountToken: Parameters<oidc.FindAccount>[2] = findAccountRefreshToken;
findAccountToken?.iat.toFixed();

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
        revocation: {
            enabled: true,
            allowedPolicy(
                ctx: oidc.KoaContextWithOIDC,
                client: oidc.Client,
                token: oidc.AccessToken | oidc.ClientCredentials | oidc.RefreshToken,
            ) {
                ctx.oidc.issuer.substring(0);
                token.jti.substring(0);
                client.clientId.substring(0);
                return true;
            },
        },
    },
});

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
        address: {
            formatted: null,
            country: null,
        },
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
            // @ts-expect-error `state` is not a configurable cookie name.
            state: "_state",
        },
        long: {
            partitioned: true,
            priority: "high",
            sameSite: "none",
            secure: true,
        },
        short: {
            httpOnly: true,
            priority: "low",
            sameSite: true,
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
            },
        },
    },
    fetch(...args) {
        return globalThis.fetch(...args);
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
        token:
            | oidc.AuthorizationCode
            | oidc.DeviceCode
            | oidc.BackchannelAuthenticationRequest
            | oidc.PreAuthorizedCode,
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
        validator(ctx, key, value, metadata: oidc.ClientMetadata) {
            const optionalContext: oidc.KoaContextWithOIDC | undefined = ctx;
            // @ts-expect-error The validator context may be undefined.
            ctx.oidc.issuer.substring(0);
            optionalContext?.oidc.issuer.substring(0);
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
        jwtIntrospection: { enabled: false },
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
            issueRegistrationAccessToken: true,
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
            enabled: false,
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
        clientAuthSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA", "ML-DSA-44"],
        idTokenSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA", "ML-DSA-44"],
        requestObjectSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA", "ML-DSA-44"],
        userinfoSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA", "ML-DSA-44"],
        introspectionSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA", "ML-DSA-44"],
        authorizationSigningAlgValues: ["HS256", "RS256", "PS256", "ES256", "EdDSA", "ML-DSA-44"],
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
    async (ctx: oidc.TokenEndpointGrantContext) => {
        ctx.oidc.route.substring(0);
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

const authorizationSuccessListener = (ctx: oidc.KoaContextWithOIDC, response?: oidc.UnknownObject) => {
    ctx.oidc.route.substring(0);
    response?.state;
};

provider.on("authorization.success", (ctx, response) => {
    ctx.oidc.route.substring(0);
    const optionalResponse: oidc.UnknownObject | undefined = response;
    optionalResponse?.state;
});
provider.addListener("authorization.success", authorizationSuccessListener);
provider.once("authorization.success", authorizationSuccessListener);
provider.prependListener("authorization.success", authorizationSuccessListener);
provider.prependOnceListener("authorization.success", authorizationSuccessListener);

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

{
    const kp = crypto.generateKeyPairSync("ed25519");
    class MyKey extends oidc.ExternalSigningKey implements oidc.ExternalSigningKey {
        get alg() {
            return "Ed25519";
        }

        sign(data: Uint8Array) {
            return crypto.sign(undefined, data, kp.privateKey);
        }
        keyObject() {
            return kp.publicKey;
        }
    }

    new Provider("", {
        features: {
            externalSigningSupport: {
                enabled: true,
                ack: "",
                // @ts-expect-error externalSigningSupport has a finite configuration schema.
                custom: true,
            },
        },
        jwks: {
            keys: [
                {} as oidc.JWK,
                new MyKey(),
            ],
        },
    });
}

new Provider("https://op.example.com", {
    fetchResponseBodyLimits: {
        "client_id metadata document": 5 * 1024,
        jwks_uri: Infinity,
        sector_identifier_uri: Infinity,
    },
    routes: {
        challenge: "/challenge",
        credential: "/credential",
    },
    ttl: {
        PreAuthorizedCode: 600,
    },
    enabledJWA: {
        attestSigningAlgValues: ["ES256", "EdDSA"],
    },
    features: {
        rpMetadataChoices: {
            enabled: true,
        },
        clientIdMetadataDocument: {
            enabled: true,
            ack: "draft-02",
            async allowFetch(ctx, clientId) {
                ctx.oidc.issuer.substring(0);
                clientId.substring(0);
                return true;
            },
            async allowClient(ctx, client) {
                ctx.oidc.issuer.substring(0);
                client.clientId.substring(0);
                return true;
            },
            cacheDuration: {
                min: 30,
                max: 86400,
            },
        },
        attestClientAuth: {
            enabled: true,
            ack: "draft-10",
            additionalSecuritySignal: "optional",
            challengeSecret: Buffer.alloc(32),
            getAttestationSignaturePublicKey(ctx, header, payload, client) {
                ctx.oidc.issuer.substring(0);
                JSON.stringify(header);
                JSON.stringify(payload);
                client.clientId.substring(0);
                return crypto.generateKeyPairSync("ed25519").publicKey;
            },
            assertAttestationJwtAndPop(ctx, attestation, pop, client) {
                ctx.oidc.issuer.substring(0);
                JSON.stringify(attestation.protectedHeader);
                JSON.stringify(pop.payload);
                client.clientId.substring(0);
            },
        },
        openid4vci: {
            enabled: true,
            ack: "experimental-01",
            nonceSecret: Buffer.alloc(32),
            preAuthorizedCodeGrant: true,
            metadata: {
                batch_credential_issuance: {
                    batch_size: 2,
                },
            },
            credentialConfigurationsSupported: {
                "org.iso.18013.5.1.mDL": {
                    format: "mso_mdoc",
                    scope: "mdl_scope",
                    cryptographic_binding_methods_supported: ["jwk"],
                    proof_types_supported: {
                        jwt: {
                            proof_signing_alg_values_supported: ["ES256"],
                            key_attestations_required: {
                                key_storage: ["iso_18045_high"],
                            },
                        },
                    },
                },
            },
            credentialEndpointExpectedAudience(ctx) {
                return ctx.oidc.urlFor("credential");
            },
            credentialConfigurationPolicy(ctx, details) {
                ctx.oidc.issuer.substring(0);
                details.credentialConfigurationId.substring(0);
                details.credentialConfiguration.format.substring(0);
                details.credentialIdentifier?.substring(0);
                details.client.clientId.substring(0);
                details.account.accountId.substring(0);
                details.grant.getOIDCScope();
                details.accessToken.scopes.has("mdl_scope");
                return true;
            },
            issueCredential(ctx, details) {
                ctx.oidc.issuer.substring(0);
                JSON.stringify(details.body);
                if (details.proofs && "jwt" in details.proofs) {
                    details.proofs.jwt?.[0].substring(0);
                    details.proofs.key_attestation?.attestedKeys[0].kty;
                }
                return {
                    credentials: [{ credential: "serialized credential" }],
                    notification_id: "notification-id",
                };
            },
            getKeyAttestationSignaturePublicKey(ctx, issuer, header, client) {
                ctx.oidc.issuer.substring(0);
                issuer.substring(0);
                JSON.stringify(header);
                client.clientId.substring(0);
                return crypto.generateKeyPairSync("ed25519").publicKey;
            },
        },
        resourceIndicators: {
            enabled: true,
            useGrantedResource(ctx, model) {
                ctx.oidc.issuer.substring(0);
                if (model.kind === "PreAuthorizedCode") {
                    model.txCode?.substring(0);
                }
                return true;
            },
        },
    },
});

const preAuthorizedCode = new provider.PreAuthorizedCode({
    accountId: "account",
    clientId: "client",
    grantId: "grant",
    resource: "https://op.example.com/credential",
    scope: "mdl_scope",
    txCode: "493536",
    rar: [{ type: "openid_credential", credential_configuration_id: "org.iso.18013.5.1.mDL" }],
});
preAuthorizedCode.txCode?.substring(0);
preAuthorizedCode.consume().then(console.log);
provider.PreAuthorizedCode.revokeByGrantId("grant").then(console.log);

const deviceCode = new provider.DeviceCode({
    client: null as unknown as oidc.Client,
    deviceInfo: {},
    grantId: "grant",
    params: {},
    userCode: "ABCD-EFGH",
    rar: [{ type: "payment", actions: ["initiate"] }],
});
deviceCode.rar?.[0].type.substring(0);

const clientCredentials = new provider.ClientCredentials({
    client: null as unknown as oidc.Client,
    scope: "api:read",
    rar: [{ type: "payment", actions: ["read"] }],
});
clientCredentials.rar?.[0].type.substring(0);

const rarGrant = new provider.Grant({ clientId: "client", accountId: "account" });
rarGrant.addRar({ type: "openid_credential", credential_configuration_id: "org.iso.18013.5.1.mDL" });

provider.backchannelResult("request", rarGrant, {
    acr: "urn:example:acr",
    amr: ["pwd"],
    authTime: Date.now(),
    sessionUid: "session",
    expiresWithSession: true,
    sid: "sid",
    rar: [{ type: "openid_credential", credential_configuration_id: "org.iso.18013.5.1.mDL" }],
});

provider.on("credential.error", (ctx, err) => {
    ctx.oidc.issuer.substring(0);
    err.error.substring(0);
    if (err.cause instanceof Error) {
        err.cause.message.substring(0);
    }
});
provider.on("pre_authorized_code.saved", code => {
    code.txCode?.substring(0);
});
new oidc.errors.InvalidAuthorizationDetails();
new oidc.errors.InvalidCredentialRequest();
new oidc.errors.InvalidNonce();
new oidc.errors.InvalidProof();
new oidc.errors.UnknownCredentialConfiguration();
new oidc.errors.UnknownCredentialIdentifier();
new oidc.errors.CredentialRequestDenied();
new oidc.errors.UseFreshAttestation();

const immutableConfiguration = {
    acrValues: ["urn:example:bronze"],
    claims: {
        profile: ["name", "family_name"],
        address: {
            formatted: null,
            country: null,
        },
    },
    clients: [
        {
            client_id: "immutable-client",
            redirect_uris: ["https://client.example.com/cb"],
            grant_types: ["authorization_code"],
            response_types: ["code"],
            contacts: ["ops@example.com"],
            default_acr_values: ["urn:example:bronze"],
            post_logout_redirect_uris: ["https://client.example.com/logout/cb"],
            authorization_details_types: ["payment"],
            dpop_bound_access_tokens: true,
            require_pushed_authorization_requests: true,
            require_signed_request_object: true,
            use_mtls_endpoint_aliases: true,
            authorization_encryption_alg_values_supported: ["RSA-OAEP"],
            authorization_encryption_enc_values_supported: ["A256GCM"],
            authorization_signing_alg_values_supported: ["PS256"],
            backchannel_authentication_request_signing_alg_values_supported: ["PS256"],
            id_token_encryption_alg_values_supported: ["RSA-OAEP"],
            id_token_encryption_enc_values_supported: ["A256GCM"],
            id_token_signing_alg_values_supported: ["PS256"],
            introspection_encryption_alg_values_supported: ["RSA-OAEP"],
            introspection_encryption_enc_values_supported: ["A256GCM"],
            introspection_signing_alg_values_supported: ["PS256"],
            request_object_encryption_alg_values_supported: ["RSA-OAEP"],
            request_object_encryption_enc_values_supported: ["A256GCM"],
            request_object_signing_alg_values_supported: ["PS256"],
            subject_types_supported: ["public"],
            token_endpoint_auth_methods_supported: ["private_key_jwt"],
            token_endpoint_auth_signing_alg_values_supported: ["PS256"],
            userinfo_encryption_alg_values_supported: ["RSA-OAEP"],
            userinfo_encryption_enc_values_supported: ["A256GCM"],
            userinfo_signing_alg_values_supported: ["PS256"],
        },
    ],
    cookies: {
        keys: ["immutable-cookie-key"],
    },
    extraParams: ["audience"],
    responseTypes: ["code"],
    scopes: ["openid", "profile"],
    subjectTypes: ["public", "pairwise"],
    clientAuthMethods: ["private_key_jwt", "none"],
    extraClientMetadata: {
        properties: ["tenant_id"],
    },
    enabledJWA: {
        authorizationEncryptionAlgValues: ["RSA-OAEP"],
        authorizationEncryptionEncValues: ["A256GCM"],
        authorizationSigningAlgValues: ["PS256"],
        dPoPSigningAlgValues: ["PS256"],
        attestSigningAlgValues: ["PS256"],
        idTokenEncryptionAlgValues: ["RSA-OAEP"],
        idTokenEncryptionEncValues: ["A256GCM"],
        idTokenSigningAlgValues: ["PS256"],
        introspectionEncryptionAlgValues: ["RSA-OAEP"],
        introspectionEncryptionEncValues: ["A256GCM"],
        introspectionSigningAlgValues: ["PS256"],
        requestObjectEncryptionAlgValues: ["RSA-OAEP"],
        requestObjectEncryptionEncValues: ["A256GCM"],
        requestObjectSigningAlgValues: ["PS256"],
        clientAuthSigningAlgValues: ["PS256"],
        userinfoEncryptionAlgValues: ["RSA-OAEP"],
        userinfoEncryptionEncValues: ["A256GCM"],
        userinfoSigningAlgValues: ["PS256"],
    },
    features: {
        ciba: {
            deliveryModes: ["poll"],
        },
        fapi: {
            enabled: false,
        },
        openid4vci: {
            credentialConfigurationsSupported: {
                credential: {
                    format: "example",
                    cryptographic_binding_methods_supported: ["jwk"],
                    proof_types_supported: {
                        jwt: {
                            proof_signing_alg_values_supported: ["PS256"],
                            key_attestations_required: {
                                key_storage: ["hardware"],
                                user_authentication: ["biometric"],
                            },
                        },
                    },
                },
            },
        },
    },
    jwks: {
        keys: [
            {
                kty: "RSA",
                key_ops: ["sign"],
                x5c: ["certificate"],
            },
        ],
    },
} as const satisfies oidc.Configuration;

new Provider("https://op.example.com", immutableConfiguration);

const readonlyValuesConfiguration: oidc.Configuration = {
    acrValues: new Set(["urn:example:bronze"]) as ReadonlySet<string>,
    clientAuthMethods: new Set(["none"]) as ReadonlySet<oidc.ClientAuthMethod>,
    extraParams: new Set(["audience"]) as ReadonlySet<string>,
    scopes: new Set(["openid"]) as ReadonlySet<string>,
    subjectTypes: new Set(["public"]) as ReadonlySet<oidc.SubjectTypes>,
    features: {
        ciba: {
            deliveryModes: new Set(["poll"]) as ReadonlySet<oidc.CIBADeliveryMode>,
        },
    },
};
new Provider("https://op.example.com", readonlyValuesConfiguration);

new Provider("https://op.example.com", {
    async revokeGrantPolicy(ctx) {
        return ctx.oidc.route !== "revocation";
    },
    sectorIdentifierUriValidate(client) {
        return client.sectorIdentifierUri !== undefined;
    },
    ttl: {
        AccessToken(ctx, token, client) {
            ctx.oidc.issuer.substring(0);
            token.jti.substring(0);
            client.clientId.substring(0);
            return 60;
        },
        Grant(ctx, grant) {
            ctx.oidc.issuer.substring(0);
            grant.getOIDCScope();
            return 60;
        },
        Interaction(ctx, interaction) {
            ctx.oidc.issuer.substring(0);
            interaction.uid.substring(0);
            return 60;
        },
        PreAuthorizedCode(ctx, code) {
            ctx.oidc.issuer.substring(0);
            code.jti.substring(0);
            return 60;
        },
        Session(ctx, session) {
            ctx.oidc.issuer.substring(0);
            session.uid.substring(0);
            return 60;
        },
    },
    features: {
        registration: {
            async secretFactory(ctx) {
                return ctx.oidc.issuer;
            },
            async issueRegistrationAccessToken(ctx) {
                return ctx.oidc.route === "registration";
            },
        },
        resourceIndicators: {
            defaultResource(ctx, client, oneOf) {
                ctx.oidc.issuer.substring(0);
                client.clientId.substring(0);
                return oneOf;
            },
            getResourceServerInfo() {
                return {
                    scope: "api:read",
                    jwt: {
                        sign: false,
                        encrypt: {
                            alg: "dir",
                            enc: "A256GCM",
                            key: null as unknown as crypto.webcrypto.CryptoKey,
                        },
                    },
                };
            },
        },
        richAuthorizationRequests: {
            enabled: true,
            types: {
                payment: {
                    async validate(ctx, detail, client) {
                        ctx.oidc.issuer.substring(0);
                        detail.type.substring(0);
                        client.clientId.substring(0);
                    },
                },
            },
            authorizationDetailsForGrantSource(ctx, source) {
                ctx.oidc.issuer.substring(0);
                if (source.kind === "DeviceCode") {
                    source.userCode.substring(0);
                } else {
                    source.redirectUri?.substring(0);
                }
                return source.rar;
            },
            authorizationDetailsForAccessToken(ctx, token, source, grantType) {
                ctx.oidc.issuer.substring(0);
                token.jti.substring(0);
                source?.jti.substring(0);
                grantType.substring(0);
                return token.rar;
            },
            authorizationDetailsForIntrospection(ctx, token) {
                ctx.oidc.issuer.substring(0);
                token.jti.substring(0);
                return token.rar;
            },
        },
    },
});

provider.urlFor("authorization").substring(0);
provider.pathFor("authorization", { mountPath: "/oidc" }).substring(0);
provider.cookieName("session").substring(0);
provider.registerResponseMode("custom", (ctx, redirectUri, payload) => {
    ctx.oidc.issuer.substring(0);
    redirectUri.substring(0);
    JSON.stringify(payload);
});
provider.registerGrantType(
    "custom",
    async ctx => {
        ctx.oidc.issuer.substring(0);
    },
    ["custom"] as const,
    new Set(["resource"]) as ReadonlySet<string>,
);

interface TokenExchangeParameters {
    subject_token: string;
    subject_token_type: string;
    actor_token?: string | undefined;
    actor_token_type?: string | undefined;
    audience?: string | string[] | undefined;
}

provider.registerGrantType<TokenExchangeParameters>(
    "urn:ietf:params:oauth:grant-type:token-exchange",
    async ctx => {
        ctx.oidc.provider.issuer.substring(0);
        ctx.oidc.client.clientId.substring(0);
        ctx.oidc.params.grant_type.substring(0);
        ctx.oidc.params.subject_token.substring(0);
        ctx.oidc.params.subject_token_type.substring(0);
        ctx.oidc.params.actor_token?.substring(0);
        ctx.oidc.params.audience?.valueOf();
        Object.values(ctx.oidc.resourceServers).map(resource => resource.identifier());

        const source = await grantHelpers.findGrantSource<oidc.AccessToken>(
            provider,
            ctx,
            provider.AccessToken,
            ctx.oidc.params.subject_token,
            "subject token",
        );
        const clientBoundSource: grantHelpers.ClientBoundGrantSource = source;
        clientBoundSource.clientId?.substring(0);
        const sourceModel: grantHelpers.GrantSourceModel<oidc.AccessToken> = provider.AccessToken;
        sourceModel.find("access-token", { ignoreExpiration: true }).then(found => found?.jti.substring(0));
        const code = await grantHelpers.findGrantSource<oidc.AuthorizationCode>(
            provider,
            ctx,
            provider.AuthorizationCode,
            "authorization-code",
            "authorization code",
        );
        const consumableSource: grantHelpers.ConsumableGrantSource = code;
        consumableSource.grantId?.substring(0);
        await grantHelpers.consumeGrantSource(provider, ctx, code, "authorization code");

        const grant = await grantHelpers.validateGrant(provider, ctx, source.grantId);
        const account = await grantHelpers.findAccount(provider, ctx, source.accountId, source);
        account?.accountId.substring(0);

        const scopes = grantHelpers.validateClientScope(provider, ctx);
        grantHelpers.validateClientScope(provider, ctx, "api:read api:write");
        grantHelpers.validateClientScope(provider, ctx, ["api:read"]);
        const resources = await grantHelpers.resolveRequestedResources(provider, ctx);
        resources.map(resource => resource.identifier());

        const accessToken = new provider.AccessToken({
            accountId: source.accountId,
            client: ctx.oidc.client,
            grantId: source.grantId,
            gty: ctx.oidc.params.grant_type,
        });
        accessToken.setAudience("https://api.example.com");
        accessToken.setAudience(["https://api.example.com"]);
        accessToken.setThumbprint("jkt", "thumbprint");
        accessToken.setThumbprint("x5t", "certificate");
        accessToken.setThumbprint("x5t", new crypto.X509Certificate(Buffer.alloc(0)));

        const resource = await grantHelpers.resolveAndApplyResource(
            provider,
            ctx,
            source,
            accessToken,
            grant,
            scopes,
        );
        resource?.substring(0);
        const resourceSource: grantHelpers.ResourceGrantSource = source;
        resourceSource.scopes.has("api:read");
        const authorizationDetailsSource: grantHelpers.AuthorizationDetailsSource = source;
        authorizationDetailsSource.rar?.[0].type.substring(0);

        const constraints: grantHelpers.SenderConstraints = await grantHelpers.validateSenderConstraints(
            provider,
            ctx,
            oidc.errors.InvalidGrant,
        );
        constraints.dPoP?.thumbprint.substring(0);
        constraints.dPoP?.jti.substring(0);
        constraints.dPoP?.iat.toFixed();
        await grantHelpers.applySenderConstraints(provider, ctx, accessToken, constraints, oidc.errors.InvalidRequest);
        await grantHelpers.applyAuthorizationDetails(provider, ctx, accessToken, source);

        const refreshToken = new provider.RefreshToken({
            accountId: source.accountId,
            client: ctx.oidc.client,
            grantId: source.grantId,
            gty: ctx.oidc.params.grant_type,
            scope: accessToken.scope || "",
        });
        if (await grantHelpers.shouldIssueRefreshToken(provider, ctx, source)) {
            await grantHelpers.applyRefreshTokenBindings(provider, ctx, accessToken, refreshToken);
        }

        const responseInput: grantHelpers.TokenResponseInput<{ transaction_id: string }> = {
            accessToken: "serialized-access-token",
            expiresIn: accessToken.expiration,
            issuedTokenType: "urn:ietf:params:oauth:token-type:access_token",
            parameters: {
                transaction_id: "transaction-id",
            },
            scope: accessToken.scope,
            tokenType: accessToken.tokenType,
        };
        const response = grantHelpers.buildTokenResponse(provider, responseInput);
        response.access_token.substring(0);
        response.token_type.substring(0);
        response.transaction_id.substring(0);
        const standardResponse: grantHelpers.TokenResponse = response;
        standardResponse.issued_token_type?.substring(0);
        const reservedMember: grantHelpers.ReservedTokenResponseParameter = "access_token";
        reservedMember.substring(0);

        const clientCredentials = new provider.ClientCredentials({ client: ctx.oidc.client });
        clientCredentials.setAudience("https://api.example.com");
        clientCredentials.setThumbprint("jkt", "thumbprint");
        await grantHelpers.applyAuthorizationDetails(provider, ctx, clientCredentials);

        const errorConstructor: grantHelpers.OIDCProviderErrorConstructor = oidc.errors.InvalidGrant;
        errorConstructor.name.substring(0);
        const dpopResult: grantHelpers.DPoPValidationResult | undefined = constraints.dPoP;
        dpopResult?.thumbprint.substring(0);

        // @ts-expect-error The provider argument must be an oidc-provider instance.
        grantHelpers.validateClientScope({}, ctx);
        grantHelpers.buildTokenResponse(provider, {
            accessToken: "serialized-access-token",
            tokenType: "Bearer",
            // @ts-expect-error Extension parameters cannot override reserved response members.
            parameters: {
                access_token: "replacement",
            },
        });
        // @ts-expect-error tokenType is required.
        grantHelpers.buildTokenResponse(provider, { accessToken: "serialized-access-token" });
    },
    [
        "subject_token",
        "subject_token_type",
        "actor_token",
        "actor_token_type",
        "audience",
    ],
    ["audience"],
);

const resourceServer = new provider.ResourceServer("https://api.example.com", {
    scope: "api:read",
});
resourceServer.identifier().substring(0);
resourceServer.scopes.has("api:read");

const claims = new provider.Claims(
    { sub: "account" },
    { client: null as unknown as oidc.Client },
);
claims.scope("openid").result().then(JSON.stringify);

provider.ReplayDetection.unique("issuer", "jti", Date.now()).then(Boolean);
const errorCause = new Error("validation failed");
const errorOptions: oidc.errors.OIDCProviderErrorOptions = {
    cause: errorCause,
    detail: "validation detail",
};

const providerError = new oidc.errors.OIDCProviderError(400, "custom_error", errorOptions);
if (providerError.cause instanceof Error) {
    providerError.cause.message.substring(0);
}

new oidc.errors.CustomOIDCProviderError("custom_error", "custom error");
new oidc.errors.CustomOIDCProviderError("custom_error", "custom error", errorOptions);

new oidc.errors.InvalidClientAuth();
new oidc.errors.InvalidClientAuth("validation detail");
new oidc.errors.InvalidClientAuth({ cause: errorCause });
new oidc.errors.InvalidGrant();
new oidc.errors.InvalidGrant("validation detail");
new oidc.errors.InvalidGrant(errorOptions);
new oidc.errors.InvalidToken();
new oidc.errors.InvalidToken("validation detail");
new oidc.errors.InvalidToken({ cause: "non-error cause" });

new oidc.errors.InvalidClientMetadata("invalid metadata", "validation detail");
new oidc.errors.InvalidClientMetadata("invalid metadata", errorOptions);
new oidc.errors.InvalidRequest("invalid request", 400, "validation detail");
new oidc.errors.InvalidRequest("invalid request", 400, errorOptions);
new oidc.errors.InvalidScope("invalid scope", "api:write", "validation detail");
new oidc.errors.InvalidScope("invalid scope", "api:write", errorOptions);
new oidc.errors.InsufficientScope("insufficient scope", "api:write", "validation detail");
new oidc.errors.InsufficientScope("insufficient scope", "api:write", errorOptions);

new oidc.errors.UnmetAuthenticationRequirements("authentication required", "validation detail");
new oidc.errors.UnmetAuthenticationRequirements("authentication required", errorOptions);
new oidc.errors.AccessDenied(undefined, { cause: errorCause });

new oidc.errors.InvalidRedirectUri();
new oidc.errors.InvalidRedirectUri({ cause: errorCause });
new oidc.errors.InvalidRedirectUri("legacy description", "legacy detail");
