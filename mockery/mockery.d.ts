// Type definitions for mockery 1.4.0
// Project: https://github.com/mfncooper/mockery
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "mockery" {

    interface MockeryEnableArgs {
        useCleanCache?: boolean;
        warnOnReplace?: boolean;
        warnOnUnregistered?: boolean;
    }

    export function enable(args?: MockeryEnableArgs): void;
    export function disable(): void;

    export function registerMock(name: string, mock: any): void;
    export function deregisterMock(name: string): void;

    export function registerSubstitute(name: string, substitute: string): void;
    export function deregisterSubstitute(name: string): void;

    export function registerAllowable(name: string, unhook?: boolean): void;
    export function deregisterAllowable(name: string): void;

    export function registerAllowables(names: string[]): void;
    export function deregisterAllowables(names: string[]): void;

    export function deregisterAll(): void;
    export function resetCache(): void;
    export function warnOnUnregistered(value: boolean): void;
    export function warnOnReplace(value: boolean): void;
}