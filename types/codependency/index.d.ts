// Type definitions for codependency 0.1
// Project: https://github.com/Wizcorp/codependency
// Definitions by: Morgan Benton <https://github.com/morphatic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace codependency;

export interface DependencyInfo {
    supportedRange: string|null;
    installedVersion: string|null;
    isInstalled: boolean|null;
    isValid: boolean|null;
    pkgPath: string;
}

export interface RequirePeerFunctionOptions {
    optional?: boolean;
    dontThrow?: boolean;
}

export interface RequirePeerFunction {
    (name: string, options?: RequirePeerFunctionOptions): any;
    resolve(name: string): DependencyInfo;
}

export function register(baseModule: NodeModule, options?: {index: string[]}): RequirePeerFunction;
export function get(middlewareName: string): RequirePeerFunction;
