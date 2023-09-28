import * as Hapi from "@hapi/hapi";
import * as Jwt from "@hapi/jwt";

// Plugin definitions

const server = Hapi.server({ port: 8000 });

server.register(Jwt);

server.auth.strategy("my_jwt_stategy", "jwt", {
    keys: "some_shared_secret",
    verify: {
        aud: "urn:audience:test",
        iss: "urn:issuer:test",
        sub: false,
        nbf: true,
        exp: true,
        maxAgeSec: 14400, // 4 hours
        timeSkewSec: 15,
    },
    validate: (artifacts, _, __) => {
        return {
            isValid: true,
            credentials: { user: artifacts.decoded.payload.user },
        };
    },
});

server.auth.default("my_jwt_stategy");

// Token definitions

const encodedToken = Jwt.token.generate(
    {
        aud: "urn:audience:test",
        iss: "urn:issuer:test",
        user: "some_user_name",
        group: "hapi_community",
    },
    {
        key: "some_shared_secret",
        algorithm: "HS512",
    },
    {
        ttlSec: 14400, // 4 hours
    },
);

const token = Jwt.token.decode(encodedToken);

Jwt.token.verify(token, "some_shared_secret");

Jwt.token.verifySignature(token, "some_shared_secret");

Jwt.token.verifyPayload(token);

Jwt.token.verifyTime(token);

Jwt.token.signature.generate(token.token, "HS512", "some_shared_secret");

Jwt.token.signature.verify(token.raw, "HS512", "some_shared_secret");

// Crypto definitions

Jwt.crypto.rsaPublicKeyToPEM("00:aa:18:ab:a4:3b:50:de:ef:38:59:8f:af:87:d2", "65537");

// Utils definitions

Jwt.utils.toHex(2020);

Jwt.utils.b64stringify({ foo: "bar" });
