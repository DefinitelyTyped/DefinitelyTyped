// Type definitions for @lerna/package 4.0.0
// Project: https://github.com/lerna/lerna/tree/main/core/package (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: DonMahallem <https://github.com/donmahallem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { resolve } from "npm-package-arg";
type ResolveResult = ReturnType<typeof resolve>;
/**
 * Partial package.json representation
 */
export interface IRawManifest {
    name: string;
    version: string;
    private?: boolean;
    bin?: Record<string, string> | string;
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    optionalDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    publishConfig?: Record<string, string>;
    workspaces?: string[] | { packages: string[] };

}
/**
 * Lerna's internal representation of a local package, with
 * many values resolved directly from the original JSON.
 */
export class Package {
    /**
     * Create a Package instance from parameters, possibly reusing existing instance.
     * @param ref A path to a package.json file, Package instance, or JSON object
     * @param If `ref` is a JSON object, this is the location of the manifest
     */
    public static lazy(ref: string | Package | IRawManifest, dir?: string): Package;
    public constructor(pkg: IRawManifest, location: string, rootPath?: string);
    public get location(): string;
    public get private(): boolean;
    public get resolved(): ResolveResult;
    public get rootPath(): string;
    public get scripts(): IRawManifest['scripts'];
    public get bin(): IRawManifest['scripts'];
    public get binLocation(): string;
    public get manifestLocation(): string;
    public get nodeModuleLocation(): string;
    public get __isLernaPackage(): boolean;
    public get version(): string;
    public set version(v: string);
    public get contents(): string;
    public set contents(subDirectory: string);
    public get dependencies(): IRawManifest['dependencies'];
    public get devDependencies(): IRawManifest['devDependencies'];
    public get optionalDependencies(): IRawManifest['optionalDependencies'];
    public get peerDependencies(): IRawManifest['peerDependencies'];
    public get(key: string): string | string[];
    public set(key: string, val: any): void;
    /**
     * Provide shallow copy for munging elsewhere
     */
    public toJson(): Object;

    /**
     * Refresh internal state from disk (e.g., changed by external lifecycles)
     */
    public refresh(): Promise<Package>;
    /**
     * Write manifest changes to disk
     */
    public serialize(): Promise<void>;
    /**
     * Mutate local dependency spec according to type
     */
    public updateLocalDependency(resolved: ResolveResult, depVersion: string, savePrefix: string): void;
}
