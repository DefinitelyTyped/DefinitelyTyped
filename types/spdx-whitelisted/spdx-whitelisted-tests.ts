import spdxWhitelisted = require("spdx-whitelisted");
import parse = require("spdx-expression-parse");

// $ExpectType boolean
spdxWhitelisted({ license: "MIT" }, [{ license: "MIT" }]);

// $ExpectType boolean
spdxWhitelisted(parse("MIT"), [
    parse("ISC") as parse.LicenseInfo,
    parse("MIT") as parse.LicenseInfo,
]);

// $ExpectType boolean
spdxWhitelisted({ license: "GPL-3.0" }, [{ license: "GPL-2.0", plus: true }]);

// $ExpectType boolean
spdxWhitelisted(
    { conjunction: "or", left: { license: "MIT" }, right: { license: "ISC" } },
    [{ license: "MIT" }],
);
