// Type definitions for license-key-gen 0.1
// Project: https://github.com/arunahk/license-key-gen
// Definitions by: abh80 <https://github.com/abh80>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function createLicense(licenseData: object): object;

export function validateLicense(licenseData: object, serial: string): object;
