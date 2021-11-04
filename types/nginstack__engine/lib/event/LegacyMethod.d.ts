export = LegacyMethod;
declare function LegacyMethod(func: (...args: any[]) => any, object: any): void;
declare class LegacyMethod {
    constructor(func: (...args: any[]) => any, object: any);
    method: (...arg0: any[]) => any;
    object: any;
    call(...args: any[]): any;
}
