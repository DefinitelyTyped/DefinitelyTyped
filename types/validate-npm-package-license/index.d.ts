declare namespace validateLicense {
    interface Result {
        inFile?: string | undefined;
        spdx?: true | undefined;
        unlicensed?: true | undefined;
        validForOldPackages: boolean;
        validForNewPackages: boolean;
        warnings?: string[] | undefined;
    }
}

declare function validateLicense(license: string): validateLicense.Result;

export = validateLicense;
