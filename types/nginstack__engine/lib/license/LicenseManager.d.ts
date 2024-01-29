export = LicenseManager;
declare function LicenseManager(): void;
declare class LicenseManager {
    createLicense(
        licenseInfo: {
            product: number;
            licenserKey?: number;
            licenseVersion?: number;
            licenseType: string;
            quantity: number;
            extensions: number | number[];
            expiration: Date;
            licenseeName: string;
            licenseeId: string;
        },
        userId?: string,
        password?: string
    ): string;
    addLicense(license: string, administratorPassword?: string): void;
    removeLicense(product: number, administratorPassword?: string): number;
    getIssuableLicenses(userKey: number): any[];
    setIssuableLicenses(userKey: number, productKeys: any[], passwords: any[]): void;
    getUsedProductsByUser(userKey: number): any[];
    isLicensed(product: number, opt_extension?: number): boolean;
    encryptLicensedData(
        data: string,
        requirements: {
            product: number;
            extension?: number;
            licenseeName?: string;
            licenseeId?: string;
            licenserKey?: number;
            licensedProducts?: number | number[];
        },
        productPrivateKey: string
    ): string;
    decryptLicensedData(data: string, product: number, opt_extension?: number): string;
}
declare namespace LicenseManager {
    let defaultLicenseVersion: number;
    function getInstance(): LicenseManager;
}
