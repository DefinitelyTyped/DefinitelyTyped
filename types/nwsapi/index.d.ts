// Type definitions for nwsapi 2.2
// Project: https://github.com/dperini/nwsapi, https://dperini.github.io/nwsapi/
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./_internal/umd-global.d.ts"/>

type ResolveElementType<T extends string> = string extends T
    ? Element
    : T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : T extends keyof SVGElementTagNameMap
    ? SVGElementTagNameMap[T]
    : Element;

export = nwsapi;
declare function nwsapi(global: nwsapi.Global): nwsapi.NWSAPI;
declare namespace nwsapi {
    // tslint:disable: no-redundant-jsdoc-2
    /**
     * @enum
     * The `MatcherMode` type should be described using a **TypeScript** enum,\
     * but **TypeScript** doesn't treat `true`, `false` or `null`
     * as constant expressions in enum initializers.
     */
    type MatcherMode = MatcherMode.SELECT | MatcherMode.MATCH | MatcherMode.USE_COLLECTION_ITEM;
    // tslint:enable: no-redundant-jsdoc-2
    namespace MatcherMode {
        /**
         * Used to select elements.
         *
         * | variable |  type                |  relation to `e`
         * | :------: |  ------------------  | :--------------:
         * |   `c`    | `ArrayLike<Element>` |   `c[i] === e`
         */
        type SELECT = true;

        /**
         * Used to select elements.
         *
         *
         * | variable |  type                          |  relation to `e`
         * | :------: |  ----------------------------  | :---------------:
         * |   `c`    | `{ item(i: number): Element }` | `c.item(i) === e`
         */
        type USE_COLLECTION_ITEM = null;

        /**
         * Used to check whether an element matches this selector.
         *
         * | variable |  type     |  relation to `e`
         * | :------: |  -------  | :---------------:
         * |   `c`    | `Element` |     `c === e`
         */
        type MATCH = false;
    }

    interface Global {
        readonly document: Document;
        readonly DOMException: new (message?: string, name?: string) => DOMException;
    }

    interface Config {
        readonly [option: string]: boolean;

        /**
         * Whether `Dom.byId` returns all elements with the matching `[id]`, or just the first.
         *
         * @default true
         */
        readonly IDS_DUPES: boolean;

        /**
         * Whether tag names should always be compared case-insensitively.
         *
         * @default true
         */
        readonly MIXEDCASE: boolean;

        /**
         * Whether errors should be logged when `Config.VERBOSITY` is `false`.
         *
         * @default true
         */
        readonly LOGERRORS: boolean;

        /**
         * Whether errors cause a `DOMException` to be thrown instead of being silently ignored.
         *
         * @default true
         */
        readonly VERBOSITY: boolean;
    }

    interface NWSAPI {
        readonly Version: string;

        // exported cache objects

        readonly matchLambdas: {
            [selector: string]: MatchLambda;
        };
        readonly selectLambdas: {
            [selector: string]: SelectLambda;
        };

        readonly matchResolvers: {
            [selectors: string]: MatchResolver;
        };
        readonly selectResolvers: {
            [selectors: string]: SelectResolver;
        };

        // exported compiler macros

        readonly CFG: CFG;

        readonly M_BODY: string;
        readonly S_BODY: string;
        readonly M_TEST: string;
        readonly S_TEST: string;

        // exported engine methods

        /** context agnostic `getElementsByClassName` */
        byTag<T extends string>(tag: T, context: ContextNode): Array<ResolveElementType<T>>;

        /** context agnostic `getElementById` */
        byId(id: string, context: ContextNode): Element[];

        /** context agnostic `getElementsByTagName` */
        byClass(className: string, context: ContextNode): Element[];

        /**
         * Equivalent of w3c `querySelector` method.
         *
         * @param callback
         * The callback that gets invoked for the first element that matches `selector`.
         */
        first<S extends string>(
            selector: S,
            context?: ContextNode | null,
            callback?: ((element: ResolveElementType<S>) => void) | null,
        ): ResolveElementType<S> | null;

        /**
         * Equivalent of w3c `querySelectorAll` method.
         *
         * @param callback
         * The callback that gets invoked for every encountered element that matches `selector`.
         *
         * Return `false` to stop searching for more elements.
         */
        select<S extends string>(
            selector: S,
            context?: ContextNode | null,
            callback?: ((element: ResolveElementType<S>) => boolean | void) | null,
        ): Array<ResolveElementType<S>>;

        /**
         * Equivalent of w3c `matches` method.
         *
         * @param element The element to check whether it matches the `selector`.
         * @param callback The callback that gets invoked if `element` matches the `selector`.
         */
        match<S extends string>(
            selector: S,
            element: Element,
            callback?: ((element: ResolveElementType<S>) => void) | null,
        ): element is ResolveElementType<S>;

        /**
         * Equivalent of w3c `closest` method.
         */
        closest<S extends string>(
            selector: S,
            element: Element,
            callback?: ((element: ResolveElementType<S>) => void) | null,
        ): ResolveElementType<S> | null;

        /**
         * Compile groups or single selector strings into
         * executable functions for matching or selecting.
         */
        compile<E extends Element, M extends MatcherMode>(
            selector: string,
            mode: M,
            callback?: ((element: E) => void) | null,
        ): M extends MatcherMode.MATCH
            ? MatchLambda<E>
            : M extends MatcherMode.SELECT | MatcherMode.USE_COLLECTION_ITEM
            ? SelectLambda<E>
            : never;

        /**
         * Returns the configuration object.
         *
         * @return The configuration object.
         */
        configure(): Config;

        /**
         * Returns the current value of the option.
         *
         * @param option The configuration option.
         * @return The current value of the option.
         */
        configure(option: string): boolean;

        /**
         * Configure the engine to use special handling.
         *
         * @param options The new options to set.
         * @param clear Whether to clear the lambda cache.
         */
        configure(options: Partial<Config>, clear?: boolean): true;

        /**
         * centralized error and exceptions handling
         *
         * @param constructor The error constructor to use, defaults to `DOMException` with a `name` of `"SyntaxError"`.
         */
        emit(message: string, constructor?: (new (message: string) => Error) | null): void;

        /** special handling configuration flags */
        readonly Config: Config;

        /** passed to resolvers as the `s` variable */
        readonly Snapshot: Snapshot;

        /** overrides QSA methods (only for browsers) */
        install(all?: boolean): void;

        /** restore QSA methods (only for browsers) */
        uninstall(): void;

        readonly Operators: {
            [operator: string]: AttributeOperator;
            readonly "=": AttributeOperator & { p1: "^"; p2: "$"; p3: "true" };
            readonly "^=": AttributeOperator & { p1: "^"; p2: ""; p3: "true" };
            readonly "$=": AttributeOperator & { p1: ""; p2: "$"; p3: "true" };
            readonly "*=": AttributeOperator & { p1: ""; p2: ""; p3: "true" };
            readonly "|=": AttributeOperator & { p1: "^"; p2: "(-|$)"; p3: "true" };
            readonly "~=": AttributeOperator & { p1: "(^|\\s)"; p2: "(\\s|$)"; p3: "true" };
        };

        readonly Selectors: {
            [pseudoClass: string]: CustomSelector;
        };

        /** register a new selector combinator symbol and its related function resolver */
        registerCombinator(combinator: string, resolver: (match: RegExpMatchArray) => string): void;

        /** register a new attribute operator symbol and its related function resolver */
        registerOperator(operator: string, resolver: AttributeOperator): void;

        /** register a new selector symbol and its related function resolver */
        registerSelector<
            R extends string | RegExp | { [Symbol.match](string: string): RegExpMatchArray | null },
            F extends (
                this: {
                    readonly Expression: R;
                    readonly Callback: F;
                },
                ...args: Parameters<CustomSelector["Callback"]>
            ) => CustomSelectorResult
        >(
            name: string,
            regExp: R,
            func: F,
        ): void;
    }

    interface Snapshot {
        doc: Document;
        from: ContextNode;
        root: Element;

        readonly byTag: NWSAPI["byTag"];

        readonly first: NWSAPI["first"];
        readonly select: NWSAPI["select"];

        readonly ancestor: NWSAPI["closest"];

        /**
         * Fast resolver for the :nth-of-type() and :nth-last-of-type() pseudo-classes
         *
         * @param element The element from which the sibling is being searched for.
         * @param dir The direction to search in.
         *
         * |  value  | description
         * | ------- | :----------
         * | `false` | search forward.
         * | `true`  | search backward.
         * | `2`     | clear cache and immediately return `-1`, ignoring `element`.
         *
         * @return The index where the next element can be found.
         */
        nthOfType(element: Element, dir?: boolean): number;
        nthOfType(element: unknown, dir: 2): -1;

        /**
         * Fast resolver for the :nth-child() and :nth-last-child() pseudo-classes
         *
         * @param element The element from which the sibling is being searched for.
         * @param dir The direction to search in.
         *
         * |  value  | description
         * | ------- | :----------
         * | `false` | search forward.
         * | `true`  | search backward.
         * | `2`     | clear cache and immediately return `-1`, ignoring `element`.
         *
         * @return The index where the next element can be found.
         */
        nthElement(element: Element, dir?: boolean): number;
        nthElement(element: unknown, dir: 2): -1;

        /**
         * namespace aware `hasAttribute` helper for XML/XHTML documents
         */
        hasAttributeNS(e: Element, name: string): boolean;
    }

    type ContextNode = Document | DocumentFragment | Element;

    type SelectLambda<T extends Element = Element> = <E extends T, R extends ArrayLike<Element>>(
        element: ArrayLike<E> | NodeListOf<E> | HTMLCollectionOf<E>,
        callback: ((element: E) => unknown) | undefined,
        context: ContextNode,
        results: R,
    ) => R;

    type MatchLambda<T extends Element = Element> = <E extends T, R extends ArrayLike<Element>>(
        element: E,
        callback: ((element: E) => void) | undefined,
        context: ContextNode,
        results: R,
    ) => R;

    interface SelectResolver {
        callback: ((node: Node) => void) | undefined;
        context: ContextNode;
        factory: SelectLambda[];
        htmlset: Array<() => Element[]>;
        nodeset: string[];
        results: Element[];
    }

    interface MatchResolver {
        factory: MatchLambda[];
    }

    interface CustomSelector {
        readonly Expression: string | RegExp | { [Symbol.match](string: string): RegExpMatchArray | null };
        Callback(
            this: this,
            match: RegExpMatchArray,
            source: string,
            mode: MatcherMode,
            callback: ((element: Element) => unknown) | undefined,
        ): CustomSelectorResult;
    }

    interface CustomSelectorResult {
        /** The ECMAScript source string. */
        readonly source: string;

        /** Whether the selector compilation was successful. */
        readonly status: boolean;

        /**
         * Used to declare new variables.
         *
         * @example
         *  ```js
         *  return {
         *      modvar: `\
         *          foo,
         *          bar = "baz",
         *          biz = 123
         *      `,
         *  };
         *  ```
         */
        readonly modvar?: string;

        /** Used to return a new `match` array. */
        readonly match?: RegExpMatchArray;
    }

    interface AttributeOperator {
        /**
         * The RegExp string before the expected attribute value.
         */
        readonly p1: string;

        /**
         * The RegExp string after the expected attribute value.
         */
        readonly p2: string;

        /**
         * The expected result of the invocation of the RegExp `test` method.
         */
        readonly p3: "true" | "false";
    }

    interface CFG {
        readonly operators: string;
        readonly combinators: string;
    }
}
