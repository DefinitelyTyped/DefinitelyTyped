// Type definitions for jsonata 1.3
// Project: https://github.com/jsonata-js/jsonata
// Definitions by: Nick <https://github.com/nick121212>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function jsonata(str: string): jsonata.Expression;
declare namespace jsonata {
    interface Expression {
        evaluate(input: any, bindings?: any, callback?: () => any): any;
        assign(key: string, func: (...args: any[]) => any): void;
    }
}

export = jsonata;
