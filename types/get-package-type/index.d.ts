type PackageType = "module" | "commonjs";

interface GetPackageType {
    (filename: string): Promise<PackageType>;
    sync(filename: string): PackageType;
}

declare const getPackageType: GetPackageType;

export = getPackageType;
