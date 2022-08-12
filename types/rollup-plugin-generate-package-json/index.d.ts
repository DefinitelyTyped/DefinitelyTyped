// Type definitions for rollup-plugin-generate-package-json 3.2
// Project: https://github.com/vladshcherbin/rollup-plugin-generate-package-json
// Definitions by: Neko <https://github.com/Cattttttttt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.6

import { Plugin } from 'rollup';
import { PackageJson } from 'type-fest';

interface GeneratePackageJsonOptions {
    inputFolder?: string;
    outputFolder?: string;
    additionalDependencies?: ReadonlyArray<string> | Record<string, string>;
    baseContents?: PackageJson | ((pkg: PackageJson) => PackageJson);
}

declare function generatePackageJson(options?: GeneratePackageJsonOptions): Plugin;

export = generatePackageJson;
