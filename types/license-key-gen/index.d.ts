// Type definitions for license-key-gen 0.1
// Project: https://github.com/arunahk/license-key-gen
// Definitions by: abh80 <https://github.com/abh80>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export interface userInfo {
    company: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}
export interface licenseData {
    info: userInfo;
    prodCode: string;
    appVersion: string;
    osType: string;
}
export function createLicense(licenseData: licenseData): object;

export function validateLicense(licenseData: licenseData, serial: string): object;
