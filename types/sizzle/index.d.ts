// Type definitions for sizzle 2.3
// Project: https://sizzlejs.com
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace Sizzle;

declare const Sizzle: SizzleStatic;
export = Sizzle;

interface SizzleStatic {
    selectors: Sizzle.Selectors;
    <TArrayLike extends ArrayLike<Element>>(selector: string, context: Element | Document | DocumentFragment, results: TArrayLike): TArrayLike;
    (selector: string, context?: Element | Document | DocumentFragment): Element[];
    // tslint:disable-next-line:ban-types
    compile(selector: string): Function;
    matchSelector(element: Element, selector: string): boolean;
    matches(selector: string, elements: Element[]): Element[];
}

declare namespace Sizzle {
    interface Selectors {
        cacheLength: number;
        match: { [name: string]: RegExp; };
        find: { [name: string]: Selectors.FindFunction; };
        preFilter: { [name: string]: Selectors.PreFilterFunction; };
        filter: { [name: string]: Selectors.FilterFunction; };
        attrHandle: { [name: string]: Selectors.AttrHandleFunction; };
        pseudos: { [name: string]: Selectors.PseudoFunction; };
        setFilters: { [name: string]: Selectors.SetFilterFunction; };
        createPseudo(fn: Selectors.CreatePseudoFunction): Selectors.PseudoFunction;
    }

    namespace Selectors {
        interface FindFunction {
            (match: RegExpMatchArray, context: Element | Document, isXML: boolean): Element[] | void;
        }

        interface PreFilterFunction {
            (match: RegExpMatchArray): string[];
        }

        interface FilterFunction {
            (element: string, ...matches: string[]): boolean;
        }

        interface AttrHandleFunction {
            (elem: any, casePreservedName: string, isXML: boolean): string;
        }

        interface PseudoFunction {
            (elem: Element): boolean;
        }

        interface CreatePseudoFunction {
            (...args: any[]): PseudoFunction;
        }

        interface SetFilterFunction {
            (elements: Element[], argument: number, not: boolean): Element[];
        }
    }
}
