import secrets from "k6/secrets";

await secrets.get("some"); // $ExpectType string

// @ts-expect-error
secrets.get(3);

// @ts-expect-error
secrets.get("some", true);

secrets.source("some"); // $ExpectType SecretSource

// @ts-expect-error
secrets.source(3);

await secrets.source("some").get("three"); // $ExpectType string
