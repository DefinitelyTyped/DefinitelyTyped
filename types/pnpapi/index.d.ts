// Type definitions for pnpapi 3.0
// Project: https://yarnpkg.github.io/berry/advanced/pnpapi
// Definitions by: Maël Nison <https://github.com/arcanis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
/// <reference types="node"/>

declare namespace NodeJS {
    interface ProcessVersions {
        pnp?: string;
    }
}

declare module 'pnpapi' {
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

    const VERSIONS: { std: number; [key: string]: number };

    const topLevel: { name: null; reference: null };

    function getDependencyTreeRoots(): PackageLocator[];

    function getPackageInformation(locator: PackageLocator): PackageInformation;

    function findPackageLocator(location: string): PackageLocator | null;

    function resolveToUnqualified(
        request: string,
        issuer: string | null,
        opts?: { considerBuiltins?: boolean },
    ): string | null;

    function resolveUnqualified(unqualified: string, opts?: { extensions?: string[] }): string;

    function resolveRequest(
      request: string,
      issuer: string | null,
      opts?: { considerBuiltins?: boolean; extensions?: string[] },
    ): string | null;

    function setup(): void;
}
