import totpGenerator = require('totp-generator');

// $ExpectType string
const totp = totpGenerator("key");

const totpWithExplicitDefaultOptions = totpGenerator("key", {});

// @ts-expect-error
const totpWithNumberKey = totpGenerator(0, {});

// @ts-expect-error
const totpWithStringOptions = totpGenerator("key", "");

const totpWithPeriodOption = totpGenerator("key", {
    period: 60,
});

const totpWithAlgorithmOption = totpGenerator("key", {
    algorithm: "SHA-512",
});

const totpWithDigitsOption = totpGenerator("key", {
    digits: 8,
});

const totpWithAllOptions = totpGenerator("key", {
    period: 60,
    algorithm: "SHA-512",
    digits: 8,
});
