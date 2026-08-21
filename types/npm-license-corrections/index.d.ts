interface NpmLicenseCorrection {
    name: string;
    version: string;
    license: string;
}

declare const npmLicenseCorrections: NpmLicenseCorrection[];
export = npmLicenseCorrections;
