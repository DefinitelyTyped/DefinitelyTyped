export = parsePackageName;

interface PackageInfo {
    name: string;
    path: string;
    version: string;
}

declare function parsePackageName(path: string): PackageInfo;
