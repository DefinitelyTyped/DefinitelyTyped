// Type definitions for package-json 4.0
// Project: https://github.com/sindresorhus/package-json#readme
// Definitions by: Jinwoo Lee <https://github.com/jinwoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PackageJsonOptions {
    version?: string;
    fullMetadata?: boolean;
    allVersions?: boolean;
}

declare function packageJson(name: string, options?: PackageJsonOptions): Promise<{}>;

export = packageJson;
