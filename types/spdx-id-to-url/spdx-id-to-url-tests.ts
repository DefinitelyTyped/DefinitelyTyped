import spdxIdToUrl = require("spdx-id-to-url");

// $ExpectType string
spdxIdToUrl("MIT");

// $ExpectType string
spdxIdToUrl("Apache-2.0");
