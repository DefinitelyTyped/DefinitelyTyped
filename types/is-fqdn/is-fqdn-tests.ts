import isFQDN = require("is-fqdn");

// @ts-expect-error No arguments
isFQDN();

// $ExpectType boolean
isFQDN("foo");
// $ExpectType boolean
isFQDN("foo", {});
// $ExpectType boolean
isFQDN("foo", {
    requireTld: true,
    allowUnderscores: true,
    allowTrailingDot: true,
});
