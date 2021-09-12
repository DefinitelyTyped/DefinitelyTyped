// Type definitions for node-abi 3.0
// Project: https://github.com/lgeiger/node-abi#readme
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Runtime = 'electron' | 'node' | 'node-webkit';
export interface Target {
    abi: string;
    lts: boolean;
    runtime: Runtime;
    target: string;
}

export let additionalTargets: Target[];
export let allTargets: Target[];
export let deprecatedTargets: Target[];
export let futureTargets: Target[];
export let supportedTargets: Target[];

export function getAbi(target: string, runtime?: Runtime): string;
export function getTarget(abi?: string | null, runtime?: Runtime): string;
export function _getNextTarget(runtime: Runtime, targets?: Target[]): string | null;
