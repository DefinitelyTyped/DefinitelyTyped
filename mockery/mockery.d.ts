// Type definitions for mockery 1.4.0
// Project: https://github.com/mfncooper/mockery
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "mockery" {

    module m {
        interface MockeryEnableArgs {
            useCleanCache?: boolean;
            warnOnReplace?: boolean;
            warnOnUnregistered?: boolean;
        }

        function enable(args?: MockeryEnableArgs): void;
        function disable(): void;

        function registerMock(name: string, mock: any): void;
        function deregisterMock(name: string): void;

        function registerSubstitute(name: string, substitute: string): void;
        function deregisterSubstitute(name: string): void;

        function registerAllowable(name: string, unhook?: boolean): void;
        function deregisterAllowable(name: string): void;

        function registerAllowables(names: string[]): void;
        function deregisterAllowables(names: string[]): void;

        function deregisterAll(): void;
        function resetCache(): void;
        function warnOnUnregistered(value: boolean): void;
        function warnOnReplace(value: boolean): void;

    }

    export = m;
}