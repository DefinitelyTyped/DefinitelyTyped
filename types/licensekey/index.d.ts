// Type definitions for licensekey 2.0
// Project: https://www.npmjs.com/package/licensekey
// Definitions by: eskelter <https://github.com/eskelter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
export interface LicenseResult {
    errorCode: number;
    message: string;
}
export interface CreateResult extends LicenseResult {
    license: string;
}
export interface CreateData {
    prodCode: string;
    info: any;
    appVersion?: string;
    osType?: OsType;
    [other: string]: any;
}
export interface ValidateData extends CreateData {
    license: string;
    osLock?: boolean;
}
export type OsType = "WIN"|"WIN7"|"WIN8"|"WIN10"|
        "OSX"|"OSX1"|"OSX2"|"OSX3"|"OSX4"|"OSX5"|"OSX6"|
        "OSX7"|"OSX8"|"OSX9"|"OSX10"|"OSX11"|"OSX12"|
        "IOS"|"IOS5"|"IOS6"|"IOS7"|"IOS8"|"IOS9"|"IOS10"|
        "ANDROID"|"ANDROID2"|"ANDROID3"|"ANDROID4"|"ANDROID43"|
        "ANDROID44"|"ANDROID5"|"ANDROID6"|"ANDROID7"|"OTHER";

/**
 * Creates a license with the provided data
 * @param licenseData Must include 'prodCode' and 'info 'fields
 */
export function createLicense(licenseData: CreateData): CreateResult;

/**
 * Validates he provided user license data
 * @param userLicense Must include 'license' field
 */
export function validateLicense(userLicense: ValidateData): LicenseResult;
