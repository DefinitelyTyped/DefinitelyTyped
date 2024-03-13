export interface PhysicalPackageLocator {
    name: string;
    reference: string;
}

export interface TopLevelPackageLocator {
    name: null;
    reference: null;
}

export type PackageLocator =
    | PhysicalPackageLocator
    | TopLevelPackageLocator;

export interface PackageInformation {
    packageLocation: string;
    packageDependencies: Map<string, string | [string, string]>;
}

export const VERSIONS: { std: number; [key: string]: number };

export const topLevel: { name: null; reference: null };

export function getPackageInformation(locator: PackageLocator): PackageInformation;
export function findPackageLocator(location: string): PackageLocator | null;

export function resolveToUnqualified(
    request: string,
    issuer: string | null,
    opts?: { considerBuiltins?: boolean | undefined },
): string | null;
export function resolveUnqualified(unqualified: string, opts?: { extensions?: string[] | undefined }): string;
export function resolveRequest(
    request: string,
    issuer: string | null,
    opts?: { considerBuiltins?: boolean | undefined; extensions?: string[] | undefined },
): string | null;

export function setup(): void;

declare global {
    namespace NodeJS {
        interface ProcessVersions {
            pnp?: string | undefined;
        }
    }
}
