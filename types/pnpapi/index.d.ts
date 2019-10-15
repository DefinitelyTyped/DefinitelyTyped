// Type definitions for pnpapi 3.0
// Project: https://next.yarnpkg.com/advanced/pnpapi
// Definitions by: Maël Nison <https://github.com/arcanis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node"/>

declare global {
    namespace NodeJS {
        interface ProcessVersions {
            pnp?: string;
        }
    }
}

interface PhysicalPackageLocator {
    name: string;
    reference: string;
}

interface TopLevelPackageLocator {
    name: null;
    reference: null;
}

type PackageLocator =
    | PhysicalPackageLocator
    | TopLevelPackageLocator;

interface PackageInformation {
    packageLocation: string;
    packageDependencies: Map<string, null | string | [string, string]>;
    linkType: 'HARD' | 'SOFT';
}

interface PnpApi {
    VERSIONS: { std: number; [key: string]: number };

    topLevel: { name: null; reference: null };

    getDependencyTreeRoots(): PackageLocator[];
    getPackageInformation(locator: PackageLocator): PackageInformation;

    findPackageLocator(location: string): PackageLocator | null;

    resolveToUnqualified(
        request: string,
        issuer: string | null,
        opts?: { considerBuiltins?: boolean },
    ): string | null;

    resolveUnqualified(unqualified: string, opts?: { extensions?: string[] }): string;

    resolveRequest(
        request: string,
        issuer: string | null,
        opts?: { considerBuiltins?: boolean; extensions?: string[] },
    ): string | null;
}

interface MakeApiOptions {
    allowDebug?: boolean;
    compatibilityMode?: boolean;
    fakeFs: any;
    pnpapiResolution: string;
}

interface MasterFunctions {
    setup(): void;
    makeApi(opts: MakeApiOptions): PnpApi;
}

declare const mainApi: PnpApi & MasterFunctions;

export default mainApi;
