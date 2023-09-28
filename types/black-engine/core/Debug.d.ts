/* tslint:disable-next-line:no-unnecessary-class */
export class Debug {
    static isNumber(...values: any[]): void;
    static assert(value: any, message: any): void;
    static assertWarn(value: any, message: any): void;
    static assertInfo(value: any, message: any): void;
    static log(...message: string[]): void;
    static info(...message: string[]): void;
    static warn(...message: string[]): void;
    static error(...message: string[]): void;
    static time(name: string): void;
    static timeEnd(name: string): void;
}
export namespace Debug {
    const throwOnFail: boolean;
    const logOnFail: boolean;
    const timeProfiles: {};
}
