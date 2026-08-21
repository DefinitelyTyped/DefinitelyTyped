import type { Selector, SelectorArray } from "reselect";

/**
 * Represents an object where each property is a selector function.
 *
 * @template StateType - The type of state that all the selectors operate on.
 */
export type SelectorsObject<StateType = any> = Record<string, Selector<StateType>>;

/**
 * Any function with arguments.
 */
export type AnyFunction = (...args: any[]) => any;

/**
 * Accepts a function which returns the current state.
 * This state is then passed into {@linkcode checkSelector}.
 * In most cases, this will be `store.getState()`.
 *
 * @param stateGetter A function which returns the current state.
 */
export function getStateWith(stateGetter: AnyFunction | null): void;

/**
 * A selector that has been registered using {@linkcode registerSelectors}.
 */
export type RegisteredSelector = Selector & {
    dependencies?: SelectorArray;
    selectorName?: string;
    recomputations?: () => number;
    resultFunc?: AnyFunction;
};

export interface Extra {
    inputs?: unknown[];
    output?: ReturnType<RegisteredSelector>;
    error?: string;
}

/**
 * Information about the selector returned by calling {@linkcode checkSelector}.
 */
export interface CheckSelectorResults extends Extra {
    dependencies: SelectorArray;
    recomputations: number | null;
    isNamed: boolean;
    selectorName: string | null;
}

/**
 * Outputs information about the selector at the given time.
 * By default, outputs only the recomputations of the selector.
 * If you use {@linkcode getStateWith}, it will output the selector's input
 * and output values. If you use {@linkcode registerSelectors},
 * you can pass it the string name of a selector.
 *
 * @param selector Either a selector or the string name of a selector.
 * @returns Information about the selector at the given time.
 */
export function checkSelector(selector: RegisteredSelector | string): CheckSelectorResults;

/**
 * A node is a selector in the tree.
 */
export interface Node {
    recomputations: number | null;
    isNamed: boolean;
    name: string;
}

/**
 * A plain JavaScript object with nodes and
 * edges providing information about the selectors.
 */
export interface Graph {
    nodes: Record<string, Node>;
    edges: Edge[];
}

/**
 * An edge goes from a selector to the selectors it depends on.
 */
export interface Edge {
    from: string;
    to: string;
}

/**
 * Outputs a plan JavaScript object with nodes and edges.
 * A node is a selector in the tree, and an edge goes from
 * a selector to the selectors it depends on.
 *
 * @param selectorKey An optional callback function that takes a selector and outputs a string which must be unique and consistent for a given selector. @default defaultSelectorKey
 * @returns A graph which is a POJO with nodes and edges. A node is a selector in the tree, and an edge goes from a selector to the selectors it depends on.
 */
export function selectorGraph(selectorKey?: (selector: RegisteredSelector) => string): Graph;

/**
 * Adds named selectors to the graph.
 * It sets selector names as keys and selectors as values.
 *
 * @param selectors A key value pair object where the keys are selector names and the values are the selectors themselves.
 */
export function registerSelectors(selectors: SelectorsObject): void;

export function reset(): void;

declare global {
    interface Window {
        /**
         * The dev tools bind to your app via this global.
         * Even without the devtools, you can call
         * `__RESELECT_TOOLS__.checkSelector('mySelector$')` from
         * the developer console or `__RESELECT_TOOLS__.selectorGraph()`
         * to see what's going on.
         */
        __RESELECT_TOOLS__: {
            selectorGraph: typeof selectorGraph;
            checkSelector: typeof checkSelector;
        };
    }
}
