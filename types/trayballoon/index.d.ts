// Type definitions for trayballoon
// Project: https://github.com/sindresorhus/trayballoon
// Definitions by: André Eckardt <https://github.com/korve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface TrayballoonOptions {
    text: string;
    title?: string | undefined;
    icon?: string | undefined;
    timeout?: number | undefined;
    wait?: boolean | undefined;
}

declare function trayballoonFn(opts: TrayballoonOptions, fn: Function): void;
declare module "trayballoon" {
    export = trayballoonFn;
}
