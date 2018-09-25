import { LicenseModule } from "./LicenseModule";
export declare class LicenseValidator {
    private static lastCheckTime;
    private static lic;
    private static isValid;
    private static isLicenseExpired;
    private static isSupportExpired;
    private static issuedBefore;
    private static supportExpirationDate;
    private static product;
    private static type;
    private static strIssueDate;
    private static strSupportExpirationDate;
    private static Modules;
    private static CheckValid;
    private static CheckLicenseExpired;
    private static CheckSupportExpired;
    static addDaysYears(startDate: Date, numberOfDays: number, numberOfYears?: number): Date;
    static CheckLicenseModule(module: LicenseModule): void;
    static CheckLicenseIsValid(license: string | null, productNames?: string[]): Promise<any>;
}
