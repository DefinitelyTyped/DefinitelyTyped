import totpGenerator = require('totp-generator');

// $ExpectType number
const totp = totpGenerator("key");

const totpWithExplicitDefaultOptions = totpGenerator("key", {});

// $ExpectError
const totpWithNumberKey = totpGenerator(0, {});

// $ExpectError
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
