declare function type(val: any): string;

declare namespace type {
    export class Library {
        of(val: any): string;
        define(type: string, test: RegExp): void;
        define(type: string, test: (val: any) => boolean): void;
        test(val: any, type: string): boolean;
    }
}
export = type;
