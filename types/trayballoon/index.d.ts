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
