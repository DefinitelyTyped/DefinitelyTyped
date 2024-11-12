import * as oidcTokenHash from "oidc-token-hash";

oidcTokenHash.validate({ claim: "at_hash", source: "access_token" }, "x7vk7f6BvQj0jQHYFIk4ag", "token", "RS256"); // $ExpectType void
oidcTokenHash.validate({ claim: "at_hash", source: "access_token" }, "x7vk7f6BvQj0jQHYFIk4ag", "foobar", "RS256"); // $ExpectType void
oidcTokenHash.generate("token", "RS256"); // $ExpectType string
oidcTokenHash.generate("token", "HS384"); // $ExpectType string
oidcTokenHash.generate("token", "ES512"); // $ExpectType string
oidcTokenHash.generate("token", "EdDSA", "Ed25519"); // $ExpectType string
oidcTokenHash.generate("token", "EdDSA", "Ed448"); // $ExpectType string
