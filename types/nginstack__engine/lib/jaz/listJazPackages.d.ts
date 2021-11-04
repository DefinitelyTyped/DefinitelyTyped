export = listJazPackages;
declare function listJazPackages(): JazPackageInfo[];
declare namespace listJazPackages {
    export { JazPackageInfo };
}
interface JazPackageInfo {
    name: string;
    version: string;
    ufsPath: string;
}
