// Type definitions for package-json 4.0
// Project: https://github.com/sindresorhus/package-json#readme
// Definitions by: Jinwoo Lee <https://github.com/jinwoo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PackageJsonOptions {
    version?: string;
    fullMetadata?: boolean;
    allVersions?: boolean;
}

type PackageJson = (name: string, options?: PackageJsonOptions) => {};

declare const packageJson: PackageJson;
export = packageJson;
