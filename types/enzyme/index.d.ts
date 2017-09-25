// Type definitions for Enzyme 2.8
// Project: https://github.com/airbnb/enzyme
// Definitions by: Marian Palkus <https://github.com/MarianPalkus>
//                 Cap3 <http://www.cap3.de>
//                 Ivo Stratev <https://github.com/NoHomey>
//                 jwbay <https://github.com/jwbay>
//                 huhuanming <https://github.com/huhuanming>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
//                 Torgeir Hovden <https://github.com/thovden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="cheerio" />
import { ReactElement, Component, AllHTMLAttributes as ReactHTMLAttributes, SVGAttributes as ReactSVGAttributes } from "react";

export type HTMLAttributes = ReactHTMLAttributes<{}> & ReactSVGAttributes<{}>;

export class ElementClass extends Component<any, any> {
}

/* These are purposefully stripped down versions of React.ComponentClass and React.StatelessComponent.
 * The optional static properties on them break overload ordering for wrapper methods if they're not
 * all specified in the implementation. TS chooses the EnzymePropSelector overload and loses the generics
 */
export interface ComponentClass<Props> {
    new (props?: Props, context?: any): Component<Props, any>;
}

export type StatelessComponent<Props> = (props: Props, context?: any) => JSX.Element;

/**
 * Many methods in Enzyme's API accept a selector as an argument. Selectors in Enzyme can fall into one of the
 * following three categories:
 *
 *  1. A Valid CSS Selector
 *  2. A React Component Constructor
 *  3. A React Component's displayName
 *  4. A React Stateless component
 *  5. A React component property map
 */
export interface EnzymePropSelector {
    [key: string]: any;
}
export type EnzymeSelector = string | StatelessComponent<any> | ComponentClass<any> | EnzymePropSelector;

export type Intercepter<T> = (intercepter: T) => void;

export interface CommonWrapper<P = {}, S = {}> {
    /**
     * Returns a new wrapper with only the nodes of the current wrapper that, when passed into the provided predicate function, return true.
     * @param predicate
     */
    filterWhere(predicate: (wrapper: this) => boolean): this;

    /**
     * Returns whether or not the current wrapper has a node anywhere in it's render tree that looks like the one passed in.
     * @param node
     */
    contains(node: ReactElement<any> | string): boolean;

    /**
     * Returns whether or not a given react element exists in the shallow render tree.
     * @param node
     */
    containsMatchingElement(node: ReactElement<any>): boolean;

    /**
     * Returns whether or not all the given react elements exists in the shallow render tree
     * @param nodes
     */
    containsAllMatchingElements(nodes: Array<ReactElement<any>>): boolean;

    /**
     * Returns whether or not one of the given react elements exists in the shallow render tree.
     * @param nodes
     */
    containsAnyMatchingElements(nodes: Array<ReactElement<any>>): boolean;

    /**
     * Returns whether or not the current render tree is equal to the given node, based on the expected value.
     */
    equals(node: ReactElement<any>): boolean;

    /**
     * Returns whether or not a given react element matches the shallow render tree.
     */
    matchesElement(node: ReactElement<any>): boolean;

    /**
     * Returns whether or not the current node has a className prop including the passed in class name.
     * @param className
     */
    hasClass(className: string): boolean;

    /**
     * Returns whether or not the current node matches a provided selector.
     * @param selector
     */
    is(selector: EnzymeSelector): boolean;

    /**
     * Returns whether or not the current node is empty.
     * @deprecated Use .exists() instead.
     */
    isEmpty(): boolean;

    /**
     * Returns whether or not the current node exists.
     */
    exists(): boolean;

    /**
     * Returns a new wrapper with only the nodes of the current wrapper that don't match the provided selector.
     * This method is effectively the negation or inverse of filter.
     * @param selector
     */
    not(selector: EnzymeSelector): this;

    /**
     * Returns a string of the rendered text of the current render tree. This function should be looked at with
     * skepticism if being used to test what the actual HTML output of the component will be. If that is what you
     * would like to test, use enzyme's render function instead.
     *
     * Note: can only be called on a wrapper of a single node.
     */
    text(): string;

    /**
     * Returns a string of the rendered HTML markup of the current render tree.
     *
     * Note: can only be called on a wrapper of a single node.
     */
    html(): string;

    /**
     * Returns the node at a given index of the current wrapper.
     * @param index
     */
    get(index: number): ReactElement<any>;

    /**
     * Returns the wrapper's underlying node.
     */
    getNode(): ReactElement<any>;

    /**
     * Returns the wrapper's underlying nodes.
     */
    getNodes(): Array<ReactElement<any>>;

    /**
     * Returns the outer most DOMComponent of the current wrapper.
     */
    getDOMNode(): Element;

    /**
     * Returns a wrapper around the node at a given index of the current wrapper.
     * @param index
     */
    at(index: number): this;

    /**
     * Reduce the set of matched nodes to the first in the set.
     */
    first(): this;

    /**
     * Reduce the set of matched nodes to the last in the set.
     */
    last(): this;

    /**
     * Returns a new wrapper with a subset of the nodes of the original wrapper, according to the rules of `Array#slice`.
     */
    slice(begin?: number, end?: number): this;

    /**
     * Taps into the wrapper method chain. Helpful for debugging.
     */
    tap(intercepter: Intercepter<this>): this;

    /**
     * Returns the state hash for the root node of the wrapper. Optionally pass in a prop name and it will return just that value.
     * @param [key]
     */
    state(): S;
    state<K extends keyof S>(key: K): S[K];
    state<T>(key: string): T;

    /**
     * Returns the context hash for the root node of the wrapper. Optionally pass in a prop name and it will return just that value.
     */
    context(): any;
    context<T>(key: string): T;

    /**
     * Returns the props hash for the current node of the wrapper.
     *
     * NOTE: can only be called on a wrapper of a single node.
     */
    props(): P;

    /**
     * Returns the prop value for the node of the current wrapper with the provided key.
     *
     * NOTE: can only be called on a wrapper of a single node.
     * @param key
     */
    prop<K extends keyof P>(key: K): P[K];
    prop<T>(key: string): T;

    /**
     * Returns the key value for the node of the current wrapper.
     * NOTE: can only be called on a wrapper of a single node.
     */
    key(): string;

    /**
     * Simulate events.
     * Returns itself.
     * @param event
     * @param args?
     */
    simulate(event: string, ...args: any[]): this;

    /**
     * A method to invoke setState() on the root component instance similar to how you might in the definition of
     * the component, and re-renders. This method is useful for testing your component in hard to achieve states,
     * however should be used sparingly. If possible, you should utilize your component's external API in order to
     * get it into whatever state you want to test, in order to be as accurate of a test as possible. This is not
     * always practical, however.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     * @param state
     * @param [callback]
     */
    setState<K extends keyof S>(state: Pick<S, K>, callback?: () => void): this;

    /**
     * A method that sets the props of the root component, and re-renders. Useful for when you are wanting to test
     * how the component behaves over time with changing props. Calling this, for instance, will call the
     * componentWillReceiveProps lifecycle method.
     *
     * Similar to setState, this method accepts a props object and will merge it in with the already existing props.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     * @param props
     */
    setProps<K extends keyof P>(props: Pick<P, K>): this;

    /**
     * A method that sets the context of the root component, and re-renders. Useful for when you are wanting to
     * test how the component behaves over time with changing contexts.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     * @param state
     */
    setContext(context: any): this;

    /**
     * Gets the instance of the component being rendered as the root node passed into shallow().
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     */
    instance(): Component<P, S>;

    /**
     * Forces a re-render. Useful to run before checking the render output if something external may be updating
     * the state of the component somewhere.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     */
    update(): this;

    /**
     * Returns an html-like string of the wrapper for debugging purposes. Useful to print out to the console when
     * tests are not passing when you expect them to.
     */
    debug(): string;

    /**
     * Returns the name of the current node of the wrapper.
     */
    name(): string;

    /**
     * Iterates through each node of the current wrapper and executes the provided function with a wrapper around
     * the corresponding node passed in as the first argument.
     *
     * Returns itself.
     * @param fn A callback to be run for every node in the collection. Should expect a ShallowWrapper as the first
     *              argument, and will be run with a context of the original instance.
     */
    forEach(fn: (wrapper: this, index: number) => any): this;

    /**
     * Maps the current array of nodes to another array. Each node is passed in as a ShallowWrapper to the map
     * function.
     * Returns an array of the returned values from the mapping function..
     * @param fn A mapping function to be run for every node in the collection, the results of which will be mapped
     *              to the returned array. Should expect a ShallowWrapper as the first argument, and will be run
     *              with a context of the original instance.
     */
    map<V>(fn: (wrapper: this, index: number) => V): V[];

    /**
     * Applies the provided reducing function to every node in the wrapper to reduce to a single value. Each node
     * is passed in as a ShallowWrapper, and is processed from left to right.
     * @param fn
     * @param initialValue
     */
    reduce<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R;

    /**
     * Applies the provided reducing function to every node in the wrapper to reduce to a single value.
     * Each node is passed in as a ShallowWrapper, and is processed from right to left.
     * @param fn
     * @param initialValue
     */
    reduceRight<R>(fn: (prevVal: R, wrapper: this, index: number) => R, initialValue?: R): R;

    /**
     * Returns whether or not any of the nodes in the wrapper match the provided selector.
     * @param selector
     */
    some(selector: EnzymeSelector): boolean;

    /**
     * Returns whether or not any of the nodes in the wrapper pass the provided predicate function.
     * @param fn
     */
    someWhere(fn: (wrapper: this) => boolean): boolean;

    /**
     * Returns whether or not all of the nodes in the wrapper match the provided selector.
     * @param selector
     */
    every(selector: EnzymeSelector): boolean;

    /**
     * Returns whether or not all of the nodes in the wrapper pass the provided predicate function.
     * @param fn
     */
    everyWhere(fn: (wrapper: this) => boolean): boolean;

    /**
     * Returns true if renderer returned null
     */
    isEmptyRender(): boolean;

    /**
     * Renders the component to static markup and returns a Cheerio wrapper around the result.
     */
    render(): Cheerio;

    /**
     * Returns the type of the current node of this wrapper. If it's a composite component, this will be the
     * component constructor. If it's native DOM node, it will be a string of the tag name.
     *
     * Note: can only be called on a wrapper of a single node.
     */
    type(): string | ComponentClass<P> | StatelessComponent<P>;

    length: number;
}

export class ShallowWrapper {
    constructor(nodes: JSX.Element[] | JSX.Element, root?: ShallowWrapper, options?: ShallowRendererProps);
}

export interface ShallowWrapper<P = {}, S = {}> extends CommonWrapper<P, S> {
    shallow(options?: ShallowRendererProps): ShallowWrapper<P, S>;
    unmount(): this;

    /**
     * Find every node in the render tree that matches the provided selector.
     * @param selector The selector to match.
     */
    find<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>;
    find<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, never>;
    find(props: EnzymePropSelector): ShallowWrapper<any, any>;
    find(selector: string): ShallowWrapper<HTMLAttributes, any>;

    /**
     * Removes nodes in the current wrapper that do not match the provided selector.
     * @param selector The selector to match.
     */
    filter<P2>(component: ComponentClass<P2> | StatelessComponent<P2>): this;
    filter(selector: Partial<P> | string): this;

    /**
     * Finds every node in the render tree that returns true for the provided predicate function.
     * @param predicate
     */
    findWhere(predicate: (wrapper: ShallowWrapper<any, any>) => boolean): ShallowWrapper<any, any>;

    /**
     * Returns a new wrapper with all of the children of the node(s) in the current wrapper. Optionally, a selector
     * can be provided and it will filter the children by this selector.
     * @param [selector]
     */
    children<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>;
    children<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, never>;
    children(selector: string): ShallowWrapper<HTMLAttributes, any>;
    children(props?: EnzymePropSelector): ShallowWrapper<any, any>;

    /**
     * Returns a new wrapper with child at the specified index.
     * @param index
     */
    childAt(index: number): ShallowWrapper<any, any>;
    childAt<P2, S2>(index: number): ShallowWrapper<P2, S2>;

    /**
     * Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result.
     * NOTE: can only be called on wrapper of a single non-DOM component element node.
     * @param [options]
     */
    dive<P2, S2>(options?: ShallowRendererProps): ShallowWrapper<P2, S2>;

    /**
     * Returns a wrapper around all of the parents/ancestors of the wrapper. Does not include the node in the
     * current wrapper. Optionally, a selector can be provided and it will filter the parents by this selector.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param [selector]
     */
    parents<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>;
    parents<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, never>;
    parents(selector: string): ShallowWrapper<HTMLAttributes, any>;
    parents(props?: EnzymePropSelector): ShallowWrapper<any, any>;

    /**
     * Returns a wrapper of the first element that matches the selector by traversing up through the current node's
     * ancestors in the tree, starting with itself.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param selector
     */
    closest<P2>(component: ComponentClass<P2>): ShallowWrapper<P2, any>;
    closest<P2>(statelessComponent: StatelessComponent<P2>): ShallowWrapper<P2, never>;
    closest(props: EnzymePropSelector): ShallowWrapper<any, any>;
    closest(selector: string): ShallowWrapper<HTMLAttributes, any>;

    /**
     * Returns a wrapper with the direct parent of the node in the current wrapper.
     */
    parent(): ShallowWrapper<any, any>;
}

export class ReactWrapper {
    constructor(nodes: JSX.Element | JSX.Element[], root?: ReactWrapper, options?: MountRendererProps);
}

export interface ReactWrapper<P = {}, S = {}> extends CommonWrapper<P, S> {
    unmount(): this;
    mount(): this;

    /**
     * Returns a wrapper of the node that matches the provided reference name.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     */
    ref(refName: string): ReactWrapper<any, any>;
    ref<P2, S2>(refName: string): ReactWrapper<P2, S2>;

    /**
     * Detaches the react tree from the DOM. Runs ReactDOM.unmountComponentAtNode() under the hood.
     *
     * This method will most commonly be used as a "cleanup" method if you decide to use the attachTo option in mount(node, options).
     *
     * The method is intentionally not "fluent" (in that it doesn't return this) because you should not be doing anything with this wrapper after this method is called.
     *
     * Using the attachTo is not generally recommended unless it is absolutely necessary to test something.
     * It is your responsibility to clean up after yourself at the end of the test if you do decide to use it, though.
     */
    detach(): void;

    /**
     * Find every node in the render tree that matches the provided selector.
     * @param selector The selector to match.
     */
    find<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>;
    find<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, never>;
    find(props: EnzymePropSelector): ReactWrapper<any, any>;
    find(selector: string): ReactWrapper<HTMLAttributes, any>;

    /**
     * Finds every node in the render tree that returns true for the provided predicate function.
     * @param predicate
     */
    findWhere(predicate: (wrapper: ReactWrapper<any, any>) => boolean): ReactWrapper<any, any>;

    /**
     * Removes nodes in the current wrapper that do not match the provided selector.
     * @param selector The selector to match.
     */
    filter<P2>(component: ComponentClass<P2> | StatelessComponent<P2>): this;
    filter(props: Partial<P> | string): this;

    /**
     * Returns a new wrapper with all of the children of the node(s) in the current wrapper. Optionally, a selector
     * can be provided and it will filter the children by this selector.
     * @param [selector]
     */
    children<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>;
    children<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, never>;
    children(selector: string): ReactWrapper<HTMLAttributes, any>;
    children(props?: EnzymePropSelector): ReactWrapper<any, any>;

    /**
     * Returns a new wrapper with child at the specified index.
     * @param index
     */
    childAt(index: number): ReactWrapper<any, any>;
    childAt<P2, S2>(index: number): ReactWrapper<P2, S2>;

    /**
     * Returns a wrapper around all of the parents/ancestors of the wrapper. Does not include the node in the
     * current wrapper. Optionally, a selector can be provided and it will filter the parents by this selector.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param [selector]
     */
    parents<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>;
    parents<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, never>;
    parents(selector: string): ReactWrapper<HTMLAttributes, any>;
    parents(props?: EnzymePropSelector): ReactWrapper<any, any>;

    /**
     * Returns a wrapper of the first element that matches the selector by traversing up through the current node's
     * ancestors in the tree, starting with itself.
     *
     * Note: can only be called on a wrapper of a single node.
     * @param selector
     */
    closest<P2>(component: ComponentClass<P2>): ReactWrapper<P2, any>;
    closest<P2>(statelessComponent: StatelessComponent<P2>): ReactWrapper<P2, never>;
    closest(props: EnzymePropSelector): ReactWrapper<any, any>;
    closest(selector: string): ReactWrapper<HTMLAttributes, any>;

    /**
     * Returns a wrapper with the direct parent of the node in the current wrapper.
     */
    parent(): ReactWrapper<any, any>;

    /**
     * A method that sets the props of the root component, and re-renders. Useful for when you are wanting to test
     * how the component behaves over time with changing props. Calling this, for instance, will call the
     * componentWillReceiveProps lifecycle method.
     *
     * Similar to setState, this method accepts a props object and will merge it in with the already existing props.
     * Returns itself.
     *
     * NOTE: can only be called on a wrapper instance that is also the root instance.
     * @param props
     * @param [callback]
     */
    setProps<K extends keyof P>(props: Pick<P, K>, callback?: () => void): this;
}

export interface ShallowRendererProps {
    /**
     * Enable experimental support for full react lifecycle methods
     */
    lifecycleExperimental?: boolean;
    /**
     * Context to be passed into the component
     */
    context?: {};
}

export interface MountRendererProps {
    /**
     * Context to be passed into the component
     */
    context?: {};
    /**
     * DOM Element to attach the component to
     */
    attachTo?: HTMLElement;
    /**
     * Merged contextTypes for all children of the wrapper
     */
    childContextTypes?: {};
}

/**
 * Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that
 * your tests aren't indirectly asserting on behavior of child components.
 * @param node
 * @param [options]
 */
export function shallow<P>(node: ReactElement<P>, options?: ShallowRendererProps): ShallowWrapper<P, any>;
export function shallow<P, S>(node: ReactElement<P>, options?: ShallowRendererProps): ShallowWrapper<P, S>;

/**
 * Mounts and renders a react component into the document and provides a testing wrapper around it.
 * @param node
 * @param [options]
 */
export function mount<P>(node: ReactElement<P>, options?: MountRendererProps): ReactWrapper<P, any>;
export function mount<P, S>(node: ReactElement<P>, options?: MountRendererProps): ReactWrapper<P, S>;

/**
 * Render react components to static HTML and analyze the resulting HTML structure.
 * @param node
 * @param [options]
 */
export function render<P, S>(node: ReactElement<P>, options?: any): Cheerio;
