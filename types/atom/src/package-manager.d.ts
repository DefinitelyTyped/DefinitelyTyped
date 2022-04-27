import { Disposable, Package } from '../index';

/** Package manager for coordinating the lifecycle of Atom packages. */
export interface PackageManager {
    // Event Subscription
    /** Invoke the given callback when all packages have been loaded. */
    onDidLoadInitialPackages(callback: () => void): Disposable;

    /** Invoke the given callback when all packages have been activated. */
    onDidActivateInitialPackages(callback: () => void): Disposable;

    /** Invoke the given callback when a package is activated. */
    onDidActivatePackage(callback: (package: Package) => void): Disposable;

    /** Invoke the given callback when a package is deactivated. */
    onDidDeactivatePackage(callback: (package: Package) => void): Disposable;

    /** Invoke the given callback when a package is loaded. */
    onDidLoadPackage(callback: (package: Package) => void): Disposable;

    /** Invoke the given callback when a package is unloaded. */
    onDidUnloadPackage(callback: (package: Package) => void): Disposable;

    /** Undocumented: invoke the given callback when an activation hook is triggered */
    onDidTriggerActivationHook(hook: string, callback: () => void): Disposable;

    // Package System Data
    /** Get the path to the apm command. */
    getApmPath(): string;

    /** Get the paths being used to look for packages. */
    getPackageDirPaths(): string[];

    // General Package Data
    /** Resolve the given package name to a path on disk. */
    resolvePackagePath(name: string): string | undefined;

    /** Is the package with the given name bundled with Atom? */
    isBundledPackage(name: string): boolean;

    // Enabling and Disabling Packages
    /** Enable the package with the given name. */
    enablePackage(name: string): Package | undefined;

    /** Disable the package with the given name. */
    disablePackage(name: string): Package | undefined;

    /** Is the package with the given name disabled? */
    isPackageDisabled(name: string): boolean;

    // Accessing Active Packages
    /** Get an Array of all the active Packages. */
    getActivePackages(): Package[];

    /** Get the active Package with the given name. */
    getActivePackage(name: string): Package | undefined;

    /** Is the Package with the given name active? */
    isPackageActive(name: string): boolean;

    /** Returns a boolean indicating whether package activation has occurred. */
    hasActivatedInitialPackages(): boolean;

    // Accessing Loaded Packages
    /** Get an Array of all the loaded Packages. */
    getLoadedPackages(): Package[];

    /** Get the loaded Package with the given name. */
    getLoadedPackage(name: string): Package | undefined;

    /** Is the package with the given name loaded? */
    isPackageLoaded(name: string): boolean;

    /** Returns a boolean indicating whether package loading has occurred. */
    hasLoadedInitialPackages(): boolean;

    // Accessing Available Packages
    /** Returns an Array of strings of all the available package paths. */
    getAvailablePackagePaths(): string[];

    /** Returns an Array of strings of all the available package names.  */
    getAvailablePackageNames(): string[];

    /** Returns an Array of strings of all the available package metadata. */
    getAvailablePackageMetadata(): string[];

    /** Activate a single package by name or path. */
    activatePackage(nameOrPath: string): Promise<Package>;

    /** Deactivate a single package by name or path. */
    deactivatePackage(nameOrPath: string, suppressSerialization?: boolean): Promise<void>;

    /** Triggers the given package activation hook. */
    triggerActivationHook(hook: string): void;

    /** Trigger all queued activation hooks immediately. */
    triggerDeferredActivationHooks(): void;
}
