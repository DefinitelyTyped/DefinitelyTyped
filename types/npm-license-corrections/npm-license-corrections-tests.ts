import npmLicenseCorrections = require("npm-license-corrections");

// $ExpectType NpmLicenseCorrection[]
npmLicenseCorrections;

const correction = npmLicenseCorrections[0];

// $ExpectType string
correction.name;

// $ExpectType string
correction.version;

// $ExpectType string
correction.license;
