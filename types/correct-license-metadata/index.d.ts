declare function correctLicenseMetadata(metadata: correctLicenseMetadata.PackageMetadata): string | false;

declare namespace correctLicenseMetadata {
    interface PackageMetadata {
        license?: string | { type?: string; license?: string } | undefined;
        licenses?:
            | Array<string | { type?: string; license?: string }>
            | string
            | { type?: string; license?: string }
            | undefined;
    }
}

export = correctLicenseMetadata;
