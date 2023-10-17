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
