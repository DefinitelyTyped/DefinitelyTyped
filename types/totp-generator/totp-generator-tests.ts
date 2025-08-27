import totp = require("totp-generator");

// $ExpectType string
const token = totp("key");

const totpWithExplicitDefaultOptions = totp("key", {});

// @ts-expect-error
const totpWithNumberKey = totp(0, {});

// @ts-expect-error
const totpWithStringOptions = totp("key", "");

const totpWithPeriodOption = totp("key", {
    period: 60,
});

const totpWithAlgorithmOption = totp("key", {
    algorithm: "SHA-512",
});

const totpWithWrongAlgorithmOption = totp("key", {
    // @ts-expect-error
    algorithm: "SHA-3",
});

const totpWithDigitsOption = totp("key", {
    digits: 8,
});

const totpWithAllOptions = totp("key", {
    period: 60,
    algorithm: "SHA-512",
    digits: 8,
});
