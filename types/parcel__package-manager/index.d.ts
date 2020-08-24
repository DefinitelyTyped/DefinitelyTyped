// Type definitions for @parcel/package-manager 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7
/// <reference types="node" />

// All type literals are intentional to encourage exact types
// tslint:disable:interface-over-type-literal

import { FileSystem } from '@parcel/fs';

export type ModuleRequest = Readonly<{
    name: string;
    range: string;
}>;

export type InstallerOptions = {
    modules: ModuleRequest[];
    fs: FileSystem;
    cwd: string;
    packagePath?: string;
    saveDev?: boolean;
};

export interface PackageInstaller {
    install(opts: InstallerOptions): Promise<void>;
}

export type InstallOptions = {
    installPeers?: boolean;
    saveDev?: boolean;
    packageInstaller?: PackageInstaller;
};

export type ModuleResolutionOptions = {
    range?: string;
    autoinstall?: boolean;
    saveDev?: boolean;
};

export type ResolveResult = {
    resolved: string;
    pkg?: any
};

export interface PackageManager {
    require(
        id: string,
        from: string,
        opts: ModuleResolutionOptions
    ): Promise<any>;
    resolve(
        id: string,
        from: string,
        opts: ModuleResolutionOptions
    ): Promise<ResolveResult>;
}

export const Npm: {
    new (): PackageInstaller;
};
export const Yarn: {
    new (): PackageInstaller;
};
/*
Soon:
export const Pnpm: {
    new (): PackageInstaller;
};
*/
export const MockPackageInstaller: {
    new (): PackageInstaller;
};
export const NodePackageManager: {
    new (fs: FileSystem, installer?: PackageInstaller): PackageManager;
};
