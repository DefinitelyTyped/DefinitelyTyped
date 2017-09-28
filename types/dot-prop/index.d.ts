// Type definitions for dot-prop 4.1
// Project: https://github.com/sindresorhus/dot-prop#readme
// Definitions by: Sam Verschueren <https://github.com/samverschueren>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface DotProp {
    get(obj: object, path: string, defaultValue?: any): any;
    set(obj: object, path: string, value: any): void;
    has(obj: object, path: string): boolean;
    delete(obj: object, path: string): boolean;
}

declare const dotProp: DotProp;

export = dotProp;
