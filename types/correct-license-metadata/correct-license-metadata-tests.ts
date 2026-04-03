import correctLicenseMetadata = require("correct-license-metadata");

// $ExpectType string | false
correctLicenseMetadata({ license: "MIT" });

// $ExpectType string | false
correctLicenseMetadata({ licenses: [{ type: "MIT" }] });

// $ExpectType string | false
correctLicenseMetadata({ license: "Apache 2" });

// $ExpectType string | false
correctLicenseMetadata({ licenses: ["MIT"] });

// @ts-expect-error
correctLicenseMetadata("MIT");
