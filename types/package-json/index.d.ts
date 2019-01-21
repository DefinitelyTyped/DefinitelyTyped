// Type definitions for package-json 5.0
// Project: https://github.com/sindresorhus/package-json#readme
// Definitions by: Jinwoo Lee <https://github.com/jinwoo>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = packageJson;

/**
 * Get metadata of a package from the npm registry.
 *
 * @param name Name of the package.
 */
declare function packageJson(
    name: string,
    options?: packageJson.Options
): Promise<packageJson.PackageJson>;

declare namespace packageJson {
    interface Options {
        /**
         * Package version such as `1.0.0` or a [dist tag](https://docs.npmjs.com/cli/dist-tag) such as `latest`.
         *
         * The version can also be in any format supported by the [semver](https://github.com/npm/node-semver) module.
         * For example:
         * - `1` - Get the latest `1.x.x`
         * - `1.2` - Get the latest `1.2.x`
         * - `^1.2.3` - Get the latest `1.x.x` but at least `1.2.3`
         * - `~1.2.3` - Get the latest `1.2.x` but at least `1.2.3`
         *
         * @default 'latest'
         */
        version?: string;
        /**
         * By default, only an abbreviated metadata object is returned for performance reasons.
         * [Read more.](https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md)
         * @default false
         */
        fullMetadata?: boolean;
        /**
         * Return the [main entry](https://registry.npmjs.org/ava) containing all versions.
         * @default false
         */
        allVersions?: boolean;
    }

    interface PackageJson {
        [k: string]: any;
        name?: string;
        version?: string;
        files?: string[];
        bin?: { [k: string]: string };
        man?: string[];
        keywords?: string[];
        author?: Person;
        maintainers?: Person[];
        contributors?: Person[];
        bundleDependencies?: { [name: string]: string };
        dependencies?: { [name: string]: string };
        devDependencies?: { [name: string]: string };
        optionalDependencies?: { [name: string]: string };
        description?: string;
        engines?: { [type: string]: string };
        license?: string;
        repository?: { type: string; url: string };
        bugs?: { url: string; email?: string } | { url?: string; email: string };
        homepage?: string;
        scripts?: { [k: string]: string };
        readme?: string;
    }

    interface Person {
        name?: string;
        email?: string;
        url?: string;
    }
}
