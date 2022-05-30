// Type definitions for quickboard 1.4
// Project: https://npmjs.org/package/quickboard
// Definitions by: Foup <https://github.com/foupp>
//                 Toadet <https://github.com/toadet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export default class quickboard {
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
