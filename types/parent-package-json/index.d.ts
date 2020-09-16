// Type definitions for parent-package-json 2.0
// Project: https://github.com/maxrimue/parent-package-json, https://github.com/maxrimue/parentpackagejson
// Definitions by: Simon McClive <https://github.com/sgmccli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = ParentPackageJson;

declare function ParentPackageJson(startPath?: string | null, ignore?: number): ParentPackageJson.ParentPackage | false;

declare namespace ParentPackageJson {
    interface ParentPackage {
        read(): string;
        path: string;
        parse(): {[key: string]: any};
    }
}
