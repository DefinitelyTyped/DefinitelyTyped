import { Plugin } from "webpack";

export = DuplicatePackageCheckerWebpackPlugin;

declare class DuplicatePackageCheckerWebpackPlugin extends Plugin {
    constructor(options?: DuplicatePackageCheckerWebpackPlugin.Options);
}

declare namespace DuplicatePackageCheckerWebpackPlugin {
    /** The properties of the instance of a package */
    interface PackageInstanceProperties {
        /** The name of the package */
        name: string;
        /** The version of the package */
        version: string;
        /** Absolute path to the package */
        path: string;
        /** Absolute path to the module that requested the package */
        issuer?: string | undefined;
    }

    /** The configurable options for the plugin */
    interface Options {
        /** Also show module that is requiring each duplicate package (default: false) */
        verbose?: boolean | undefined;
        /** Emit errors instead of warnings (default: false) */
        emitError?: boolean | undefined;
        /** Show help message if duplicate packages are found (default: true) */
        showHelp?: boolean | undefined;
        /** Warn also if major versions differ (default: true) */
        strict?: boolean | undefined;

        /**
         * Exclude instances of packages from the results.
         * If all instances of a package are excluded, or all instances except one,
         * then the package is no longer considered duplicated and won't be emitted as a warning/error.
         * @param instance The instance of a package being evaluated for exclusion.
         * @returns true to exclude the instance, false otherwise
         */
        exclude?: ((instance: PackageInstanceProperties) => boolean) | undefined;
    }
}
