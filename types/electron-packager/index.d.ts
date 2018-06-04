// Type definitions for electron-packager 10.1
// Project: https://github.com/electron-userland/electron-packager
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
//                 Juan Jimenez-Anca <https://github.com/cortopy>
//                 John Kleinschmidt <https://github.com/jkleinsc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = electronPackager;

/**
 * This will:
 * - Find or download the correct release of Electron
 * - Use that version of electron to create a app in <out>/<appname>-<platform>-<arch>
 *
 * You should be able to launch the app on the platform you built for. If not, check your settings and try again.
 *
 * @param opts - Options to configure packaging.
 * @param callback - Callback which is called when packaging is done or an error occured.
 */
declare function electronPackager(opts: electronPackager.Options, callback: electronPackager.finalCallback): void;

declare namespace electronPackager {
    /**
     * Callback which is called when electron-packager is done.
     *
     * @param err - Contains errors if any.
     * @param appPaths - Path(s) to the newly created application(s).
     */
    type finalCallback = (err: Error, appPaths: string|string[]) => void;

    type ignoreFunction = (path: string) => boolean;
    type onCompleteFn = (buildPath: string, electronVersion: string, platform: string, arch: string, callbackFn: () => void) => void;
    type arch = "ia32" | "x64" | "armv7l" | "arm64" |"all";
    type packageManager = "npm" | "cnpm" | "yarn" | false;
    type platform = "linux" | "win32" | "darwin" | "mas" | "all";

    interface AsarOptions {
        ordering?: string;
        unpack?: string;
        unpackDir?: string;
    }

    interface ElectronDownloadOptions {
        cache?: string;
        mirror?: string;
        quiet?: boolean;
        strictSSL?: boolean;
    }

    interface ElectronOsXSignOptions {
        identity?: string;
        entitlements?: string;
        "entitlements-inherit"?: string;
    }

    /**
     * Object (also known as a "hash") of application metadata to embed into the executable
     */
    interface Win32Metadata {
        CompanyName?: string;
        FileDescription?: string;
        OriginalFilename?: string;
        ProductName?: string;
        InternalName?: string;
        "requested-execution-level"?: "asInvoker" | "highestAvailable" | "requireAdministrator";
        "application-manifest"?: string;
    }

    /** Electron-packager Options. */
    interface Options {
        /** The source directory. */
        dir: string;
        /**
         * Optional list of methods to call on completion of each process
         */
        afterCopy?: onCompleteFn[];
        afterExtract?: onCompleteFn[];
        afterPrune?: onCompleteFn[];
        /** Shortcut for `--arch=all --platform=all`. */
        all?: boolean;
        /**
         * The human-readable copyright line for the app. Maps to the LegalCopyright metadata property on Windows, and NSHumanReadableCopyright on OS X.
         */
        appCopyright?: string;
        /**
         * The release version of the application. By default the version property in the package.json is used but it can be overridden with this argument.
         * If neither are provided, the version of Electron will be used. Maps to the ProductVersion metadata property on Windows, and CFBundleShortVersionString on OS X.
         */
        appVersion?: string;
        /**
         * The target system architecture(s) to build for. Not required if the all option is set.
         * If arch is set to all, all supported architectures for the target platforms specified by platform will be built.
         * Arbitrary combinations of individual architectures are also supported via a comma-delimited string or array of strings.
         * The non-all values correspond to the architecture names used by Electron releases. This value is not restricted to the official set if download.mirror is set.
         */
        arch?: arch | arch[];
        /**
         * Whether to package the application's source code into an archive, using Electron's archive format
         */
        asar?: boolean | AsarOptions;
        /**
         * The build version of the application. Defaults to the value of appVersion.
         * Maps to the FileVersion metadata property on Windows, and CFBundleVersion on OS X.
         */
        buildVersion?: string;
        /**
         * Whether symlinks should be dereferenced during the copying of the application source.
         */
        derefSymlinks?: boolean;
        /**
         * If present, passes custom options to electron-download
         */
        download?: ElectronDownloadOptions;
        /**
         * The Electron version with which the app is built (without the leading 'v') - for example, 1.4.13
         */
        electronVersion?: string;
        /**
         * One or more files to be copied directly into the app's Contents/Resources directory for OS X target platforms, and the resources directory for other target platforms.
         */
        extraResource?: string | string[];
        /**
         * The name of the executable file, sans file extension. Defaults to the value for the name parameter
         */
        executableName?: string;
        /**
         * The local path to the icon file, if the target platform supports setting embedding an icon.
         */
        icon?: string;
        /**
         * One or more additional regular expression patterns which specify which files to ignore when copying files to create the app bundle(s).
         * The regular expressions are matched against the absolute path of a given file/directory to be copied.
         */
        ignore?: RegExp | RegExp[] | ignoreFunction;
        /**
         * The application name. If omitted, it will use the productName or name value from the nearest package.json
         */
        name?: string;
        /** The output directory. */
        out?: string;
        /**
         * Whether to replace an already existing output directory for a given platform (true) or skip recreating it (false).
         */
        overwrite?: boolean;
        /**
         * The package manager used to prune devDependencies modules from the outputted Electron app
         */
        packageManager?: packageManager;
        /**
         * The target platform(s) to build for. Not required if the all option is set.
         */
        platform?: platform;
        /**
         * Runs the package manager command to remove all of the packages specified in the devDependencies section of package.json from the outputted Electron app.
         */
        prune?: boolean;
        /**
         * If true, disables printing informational and warning messages to the console when packaging the application. This does not disable errors.
         */
        quiet?: boolean;
        /**
         * The base directory to use as a temp directory. Set to false to disable use of a temporary directory.
         */
        tmpdir?: string | false;

        /**
         * OS X/Mac App Store targets only
         */

        /**
         * The bundle identifier to use in the application's plist.
         */
        appBundleId?: string;
        /**
         * The application category type, as shown in the Finder via View → Arrange by Application Category when viewing the Applications directory.
         */
        appCategoryType?: string;
        /**
         * When the value is a String, the filename of a plist file. Its contents are added to the app's plist.
         * When the value is an Object, an already-parsed plist data structure that is merged into the app's plist.
         */
        extendInfo?: string | {[property: string]: any};
        /**
         * The bundle identifier to use in the application helper's plist.
         */
        helperBundleId?: string;
        /**
         * If present, signs OS X target apps when the host platform is OS X and XCode is installed.
         */
        osxSign?: boolean | ElectronOsXSignOptions;

        /** The URL protocol schemes the app supports. */
        protocols?: Array<{
            name: string
            schemes: string[]
        }>;

        /**
         * Windows targets only
         */

        win32metadata?: Win32Metadata;
    }
}
