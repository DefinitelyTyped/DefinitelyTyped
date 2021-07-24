export = URLSearchParams;
declare function URLSearchParams(query?: string | string[][] | Record<string, string>): void;
declare class URLSearchParams {
    constructor(query?: string | string[][] | Record<string, string>);
    paramsMap_: any;
    paramsList_: any[];
    private decode_;
    encode_(str: any): string;
    private percentSignRegex_;
    private getPercentSignRegex_;
    private plusSignRegex_;
    private getPlusSignRegex_;
    private findRegex_;
    private getFindRegex_;
    private appendTo_;
    append(name: string, value: any): void;
    delete(name: string): void;
    has(name: string): boolean;
    get(name: string): any;
    getAll(name: string): any[];
    set(name: string, value: any): void;
    toString(): string;
    forEach(callback: (...args: any[]) => any, thisArg: any): void;
}
