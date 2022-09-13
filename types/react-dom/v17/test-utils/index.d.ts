import {
    AbstractView, Component, ComponentClass,
    ReactElement, ReactInstance, ClassType,
    DOMElement, FunctionComponentElement, CElement,
    ReactHTMLElement, DOMAttributes, FC
} from 'react';

import * as ReactTestUtils from ".";

export {};

export interface OptionalEventProperties {
    bubbles?: boolean | undefined;
    cancelable?: boolean | undefined;
    currentTarget?: EventTarget | undefined;
    defaultPrevented?: boolean | undefined;
    eventPhase?: number | undefined;
    isTrusted?: boolean | undefined;
    nativeEvent?: Event | undefined;
    preventDefault?(): void;
    stopPropagation?(): void;
    target?: EventTarget | undefined;
    timeStamp?: Date | undefined;
    type?: string | undefined;
}

export interface SyntheticEventData extends OptionalEventProperties {
    altKey?: boolean | undefined;
    button?: number | undefined;
    buttons?: number | undefined;
    clientX?: number | undefined;
    clientY?: number | undefined;
    changedTouches?: TouchList | undefined;
    charCode?: number | undefined;
    clipboardData?: DataTransfer | undefined;
    ctrlKey?: boolean | undefined;
    deltaMode?: number | undefined;
    deltaX?: number | undefined;
    deltaY?: number | undefined;
    deltaZ?: number | undefined;
    detail?: number | undefined;
    getModifierState?(key: string): boolean;
    key?: string | undefined;
    keyCode?: number | undefined;
    locale?: string | undefined;
    location?: number | undefined;
    metaKey?: boolean | undefined;
    pageX?: number | undefined;
    pageY?: number | undefined;
    relatedTarget?: EventTarget | undefined;
    repeat?: boolean | undefined;
    screenX?: number | undefined;
    screenY?: number | undefined;
    shiftKey?: boolean | undefined;
    targetTouches?: TouchList | undefined;
    touches?: TouchList | undefined;
    view?: AbstractView | undefined;
    which?: number | undefined;
}

export type EventSimulator = (element: Element | Component<any>, eventData?: SyntheticEventData) => void;

export interface MockedComponentClass {
    new (props: any): any;
}

export interface ShallowRenderer {
    /**
     * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
     */
    getRenderOutput<E extends ReactElement>(): E;
    /**
     * Similar to `ReactDOM.render` but it doesn't require DOM and only renders a single level deep.
     */
    render(element: ReactElement, context?: any): void;
    unmount(): void;
}

/**
 * Simulate an event dispatch on a DOM node with optional `eventData` event data.
 * `Simulate` has a method for every event that React understands.
 */
export namespace Simulate {
    const abort: EventSimulator;
    const animationEnd: EventSimulator;
    const animationIteration: EventSimulator;
    const animationStart: EventSimulator;
    const blur: EventSimulator;
    const canPlay: EventSimulator;
    const canPlayThrough: EventSimulator;
    const change: EventSimulator;
    const click: EventSimulator;
    const compositionEnd: EventSimulator;
    const compositionStart: EventSimulator;
    const compositionUpdate: EventSimulator;
    const contextMenu: EventSimulator;
    const copy: EventSimulator;
    const cut: EventSimulator;
    const doubleClick: EventSimulator;
    const drag: EventSimulator;
    const dragEnd: EventSimulator;
    const dragEnter: EventSimulator;
    const dragExit: EventSimulator;
    const dragLeave: EventSimulator;
    const dragOver: EventSimulator;
    const dragStart: EventSimulator;
    const drop: EventSimulator;
    const durationChange: EventSimulator;
    const emptied: EventSimulator;
    const encrypted: EventSimulator;
    const ended: EventSimulator;
    const error: EventSimulator;
    const focus: EventSimulator;
    const input: EventSimulator;
    const invalid: EventSimulator;
    const keyDown: EventSimulator;
    const keyPress: EventSimulator;
    const keyUp: EventSimulator;
    const load: EventSimulator;
    const loadStart: EventSimulator;
    const loadedData: EventSimulator;
    const loadedMetadata: EventSimulator;
    const mouseDown: EventSimulator;
    const mouseEnter: EventSimulator;
    const mouseLeave: EventSimulator;
    const mouseMove: EventSimulator;
    const mouseOut: EventSimulator;
    const mouseOver: EventSimulator;
    const mouseUp: EventSimulator;
    const paste: EventSimulator;
    const pause: EventSimulator;
    const play: EventSimulator;
    const playing: EventSimulator;
    const progress: EventSimulator;
    const rateChange: EventSimulator;
    const scroll: EventSimulator;
    const seeked: EventSimulator;
    const seeking: EventSimulator;
    const select: EventSimulator;
    const stalled: EventSimulator;
    const submit: EventSimulator;
    const suspend: EventSimulator;
    const timeUpdate: EventSimulator;
    const touchCancel: EventSimulator;
    const touchEnd: EventSimulator;
    const touchMove: EventSimulator;
    const touchStart: EventSimulator;
    const transitionEnd: EventSimulator;
    const volumeChange: EventSimulator;
    const waiting: EventSimulator;
    const wheel: EventSimulator;
}

/**
 * Render a React element into a detached DOM node in the document. __This function requires a DOM__.
 */
export function renderIntoDocument<T extends Element>(
    element: DOMElement<any, T>): T;
export function renderIntoDocument(
    element: FunctionComponentElement<any>): void;
// If we replace `P` with `any` in this overload, then some tests fail because
// calls to `renderIntoDocument` choose the last overload on the
// subtype-relation pass and get an undesirably broad return type.  Using `P`
// allows this overload to match on the subtype-relation pass.
export function renderIntoDocument<P, T extends Component<P>>(
    element: CElement<P, T>): T;
export function renderIntoDocument<P>(
    element: ReactElement<P>): Component<P> | Element | void;

/**
 * Pass a mocked component module to this method to augment it with useful methods that allow it to
 * be used as a dummy React component. Instead of rendering as usual, the component will become
 * a simple `<div>` (or other tag if `mockTagName` is provided) containing any provided children.
 */
export function mockComponent(
    mocked: MockedComponentClass, mockTagName?: string): typeof ReactTestUtils;

/**
 * Returns `true` if `element` is any React element.
 */
export function isElement(element: any): boolean;

/**
 * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
 */
export function isElementOfType<T extends HTMLElement>(
    element: ReactElement, type: string): element is ReactHTMLElement<T>;
/**
 * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
 */
export function isElementOfType<P extends DOMAttributes<{}>, T extends Element>(
    element: ReactElement, type: string): element is DOMElement<P, T>;
/**
 * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
 */
export function isElementOfType<P>(
    element: ReactElement, type: FC<P>): element is FunctionComponentElement<P>;
/**
 * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
 */
export function isElementOfType<P, T extends Component<P>, C extends ComponentClass<P>>(
    element: ReactElement, type: ClassType<P, T, C>): element is CElement<P, T>;

/**
 * Returns `true` if `instance` is a DOM component (such as a `<div>` or `<span>`).
 */
export function isDOMComponent(instance: ReactInstance): instance is Element;
/**
 * Returns `true` if `instance` is a user-defined component, such as a class or a function.
 */
export function isCompositeComponent(instance: ReactInstance): instance is Component<any>;
/**
 * Returns `true` if `instance` is a component whose type is of a React `componentClass`.
 */
export function isCompositeComponentWithType<T extends Component<any>, C extends ComponentClass<any>>(
    instance: ReactInstance, type: ClassType<any, T, C>): boolean;

/**
 * Traverse all components in `tree` and accumulate all components where
 * `test(component)` is `true`. This is not that useful on its own, but it's used
 * as a primitive for other test utils.
 */
export function findAllInRenderedTree(
    root: Component<any>,
    fn: (i: ReactInstance) => boolean): ReactInstance[];

/**
 * Finds all DOM elements of components in the rendered tree that are
 * DOM components with the class name matching `className`.
 */
export function scryRenderedDOMComponentsWithClass(
    root: Component<any>,
    className: string): Element[];
/**
 * Like `scryRenderedDOMComponentsWithClass()` but expects there to be one result,
 * and returns that one result, or throws exception if there is any other
 * number of matches besides one.
 */
export function findRenderedDOMComponentWithClass(
    root: Component<any>,
    className: string): Element;

/**
 * Finds all DOM elements of components in the rendered tree that are
 * DOM components with the tag name matching `tagName`.
 */
export function scryRenderedDOMComponentsWithTag(
    root: Component<any>,
    tagName: string): Element[];
/**
 * Like `scryRenderedDOMComponentsWithTag()` but expects there to be one result,
 * and returns that one result, or throws exception if there is any other
 * number of matches besides one.
 */
export function findRenderedDOMComponentWithTag(
    root: Component<any>,
    tagName: string): Element;

/**
 * Finds all instances of components with type equal to `componentClass`.
 */
export function scryRenderedComponentsWithType<T extends Component<any>, C extends ComponentClass<any>>(
    root: Component<any>,
    type: ClassType<any, T, C>): T[];

/**
 * Same as `scryRenderedComponentsWithType()` but expects there to be one result
 * and returns that one result, or throws exception if there is any other
 * number of matches besides one.
 */
export function findRenderedComponentWithType<T extends Component<any>, C extends ComponentClass<any>>(
    root: Component<any>,
    type: ClassType<any, T, C>): T;

/**
 * Call this in your tests to create a shallow renderer.
 */
export function createRenderer(): ShallowRenderer;

/**
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback A synchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 */
// NOTES
// - the order of these signatures matters - typescript will check the signatures in source order.
//   If the `() => VoidOrUndefinedOnly` signature is first, it'll erroneously match a Promise returning function for users with
//   `strictNullChecks: false`.
// - VoidOrUndefinedOnly is there to forbid any non-void return values for users with `strictNullChecks: true`
declare const UNDEFINED_VOID_ONLY: unique symbol;
// tslint:disable-next-line: void-return
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };
export function act(callback: () => Promise<void>): Promise<undefined>;
export function act(callback: () => VoidOrUndefinedOnly): void;

// Intentionally doesn't extend PromiseLike<never>.
// Ideally this should be as hard to accidentally use as possible.
export interface DebugPromiseLike {
    // the actual then() in here is 0-ary, but that doesn't count as a PromiseLike.
    then(onfulfilled: (value: never) => never, onrejected: (reason: never) => never): never;
}
