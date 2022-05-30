// Type definitions for quickboard 1.4
// Project: https://npmjs.org/package/quickboard
// Definitions by: Foup <https://github.com/foupp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.7.2

declare class QuickBoard {
    constructor(options: {
        max: number,
        data: any[],
        map: (...args: any[]) => void,
        sort: (...args: any[]) => void,
        reverse?: boolean
    });
    create(): string;

    init(): string;

    template(): string;

    get(key: string): any;

    set(key: string, value: string | any[] | number | boolean | ((...args: any[]) => void)): any;
}

export default QuickBoard;
