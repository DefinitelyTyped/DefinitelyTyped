// Type definitions for alpinejs 3.7
// Project: https://github.com/alpinejs/alpine
// Definitions by: Thomas Wirth <https://github.com/wtho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactiveEffect, UnwrapNestedRefs, ReactiveEffectOptions, reactive as VueReactive } from '@vue/reactivity';

interface Evaluator {
    (el: Node, expression: string /*, extras?: unknown */): (resultCallback: (result: unknown) => void) => void;
}

interface ReactiveEffectRunner<T = any> {
    (): T;
    effect: ReactiveEffect;
}

interface ReactivityEngine {
    reactive: Alpine['reactive'];
    release: Alpine['release'];
    effect: Alpine['effect'];
    raw: Alpine['raw'];
}

type Walker = (el: Node, callback: (el: Node, skip: () => void) => void) => void;
export type AttributeTransformer<T = unknown> = (args: { name: string; value: T }) => { name: string; value: T };

interface XDataContext {
    /**
     * Will be executed before Alpine initializes teh rest of the component.
     */
    init?(): void;
    [stateKey: string]: any;
}
type XData = XDataContext | string | number | boolean;

interface DirectiveUtilities {
    Alpine: Alpine;
    effect: () => void;
    cleanup: () => void;
    evaluate: (expression: string) => unknown;
    evaluateLater: (expression: string) => (result: unknown) => void;
}
interface DirectiveParameters {
    value: string;
    modifiers: string[];
    expression: string;
    original: string;
    type: string;
}

export interface Alpine {
    // following TSDoc under MIT was taken from
    // https://github.com/vuejs/vue-next/blob/92f11d6740929f5b591740e30ae5fba50940ec82/packages/reactivity/src/reactive.ts#L65-L87
    /**
     * Creates a reactive copy of the original object.
     * The reactive conversion is "deep"—it affects all nested properties. In the
     * ES2015 Proxy based implementation, the returned proxy is **not** equal to the
     * original object. It is recommended to work exclusively with the reactive
     * proxy and avoid relying on the original object.
     *
     * A reactive object also automatically unwraps refs contained in it, so you
     * don't need to use `.value` when accessing and mutating their value:
     *
     * ```js
     * const count = ref(0)
     * const obj = reactive({
     *   count
     * })
     *
     * obj.count++
     * obj.count // -> 1
     * count.value // -> 1
     * ```
     */
    reactive<T extends object>(target: T): UnwrapNestedRefs<T>;
    /**
     * Releases/stops a reactive effect, if it is currently active.
     *
     * @param runner the reactive effect runner to be stopped
     */
    release(runner: ReactiveEffectRunner): void;
    /**
     * As soon as effect is called, it will run the provided callback
     * functionbut actively look for any interactions with reactive
     * data. If it detects an interaction (a get or set from the
     * aforementioned reactive proxy) it will keep track of it and
     * make sure to re-run the callback if any of reactive data
     * changes in the future.
     *
     * @param callback the function to be run while looking for reactive interactions
     */
    effect(callback: (() => unknown) | ReactiveEffectRunner, options?: ReactiveEffectOptions): ReactiveEffectRunner;
    /**
     * Returns the raw, original object of a reactive proxy. This is an escape
     * hatch that can be used to temporarily read without incurring proxy
     * access/tracking overhead or write without triggering changes. It is not
     * recommended to hold a persistent reference to the original object.
     * Use with caution.
     *
     * @param observed the reactive, proxied object
     */
    raw<T>(observed: T): T;
    /**
     * Version of Alpine.js
     */
    version: string;
    flushAndStopDeferringMutations(): void;
    disableEffectScheduling(callback: () => void): void;
    setReactivityEngine(engine: ReactivityEngine): void;
    closestDataStack(node: Node): object[];
    skipDuringClone<R = unknown>(
        callback: (el: Node, params: DirectiveParameters, utils: DirectiveUtilities) => R,
        fallback?: (el: Node, params: DirectiveParameters, utils: DirectiveUtilities) => R,
    ): (el: Node, params: DirectiveParameters, utils: DirectiveUtilities) => R;
    addRootSelector(selectorCallback: () => string): void;
    addInitSelector(selectorCallback: () => string): void;
    addScopeToNode(node: Node, data: object, referenceNode?: Node): () => void;
    deferMutations(): void;
    mapAttributes(callback: AttributeTransformer): void;
    evaluateLater: Evaluator;
    setEvaluator(newEvaluator: Evaluator): void;
    mergeProxies(objects: []): {};
    mergeProxies<T>(objects: [T]): T;
    mergeProxies<T, U>(objects: [T, U]): T & U;
    mergeProxies<T, U, V>(objects: [T, U, V]): T & U & V;
    mergeProxies<T, U, V, W>(objects: [T, U, V, W]): T & U & V & W;
    mergeProxies(objects: any[]): any;
    closestRoot(el: Node, includeInitSelectors?: boolean): Node | undefined;
    /**
     * **INTERNAL: not public API and is subject to change without major release**
     * @internal
     */
    interceptor<V = unknown>(
        callback: (initialValue: V, getter: () => V, setter: (value: V) => void, path: string, key: string) => V,
        mutateObj?: (obj: { initialValue: V, _x_intceptor: true, intialize: (data: V, path: string, key: string) => V}) => void
    ): (initialValue: V) => V;
    /**
     * **INTERNAL**
     * @internal
     */
    transition(
        el: Node,
        setFunction: (el: Node, styles: Record<string, string> | string) => () => void,
        duringStartAndEnd: { during: Record<string, string> | string, start: Record<string, string> | string, end: Record<string, string> | string },
        before: () => void,
        after: () => void
    ): void;
    /**
     * INTERNAL
     * @internal
     */
    setStyles(el: Node, value: Record<string, string> | string): () => void;
    mutateDom<R = unknown>(callback: () => R): R;
    /**
     * Allows you to register your own custom directives.
     *
     * @param name the name of the directive, "foo" would be consumed as "x-foo"
     * @param handler a callback function to apply the directive on the node element
     */
    directive(
        name: string,
        handler: (el: Node, directive: DirectiveParameters, utilities: DirectiveUtilities) => void,
    ): void;
    throttle<A extends any[]>(func: (...args: A) => void, limit?: number): (...args: A) => void;
    debounce<A extends any[], R = unknown>(func: (...args: A) => R, wait?: number): (...args: A) => R;
    evaluate(el: Node, expression: string, extras?: object): unknown;
    initTree(el: Node, walker?: Walker): void;
    nextTick(callback: () => void): void;
    prefixed(subject?: string): string;
    prefix(newPrefix: string): void;
    /**
     * Convenience method to prevent consumers of a plugin from having
     * to register multiple different directives and magics themselves,
     * by providing the Alpine global object as argument in the callback.
     *
     * @param callback plugin installation function
     */
    plugin(callback: (alpine: Alpine) => void): void;
    /**
     * Registers a global magics helper, which can be referenced in
     * expressions using $[name]. Return a function instead of a value
     * in the callback to provide a function magic helper
     * through $[name](...).
     *
     * @param name identifier of the magic function, without prefixed '$'
     * @param callback function to evaluate the magic helper
     */
    magic(
        name: string,
        callback: (el: Node, extras: { Alpine: Alpine; interceptor: Alpine['interceptor'] }) => any,
    ): void;
    /**
     * Retrieves state in the global store.
     *
     * @param name state key
     */
    store(name: string): XData;
    /**
     * Sets state in the global store.
     *
     * @param name state key
     * @param value the initial state value
     */
    store(name: string, value: XData): void;
    /**
     * Initializes Alpine.js, which is required if Alpine is imported
     * into a bundle instead of included from a script tag.
     *
     * Extensions must have been registered IN BETWEEN when the Alpine
     * global object is imported and when Alpine is initialized with
     * the Alpine.start() call.
     */
    start(): void;
    clone(oldEl: Node, newEl: Node): void;
    /**
     * Provides a way to reuse x-data contexts within your application.
     *
     * @param name the id of the x-data context
     * @param callback the initializer of the x-data context
     */
    data(name: string, callback: (...initialStateArgs: unknown[]) => XDataContext): void;
}

declare const AlpineInstance: Alpine;
export default AlpineInstance;
