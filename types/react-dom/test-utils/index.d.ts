import {
    AbstractView, Component, ComponentClass,
    ReactElement, ReactInstance, ClassType,
    DOMElement, SFCElement, CElement,
    ReactHTMLElement, DOMAttributes, SFC
} from 'react';

export = TestUtils;

declare namespace TestUtils {
    export interface OptionalEventProperties {
        bubbles?: boolean;
        cancelable?: boolean;
        currentTarget?: EventTarget;
        defaultPrevented?: boolean;
        eventPhase?: number;
        isTrusted?: boolean;
        nativeEvent?: Event;
        preventDefault?(): void;
        stopPropagation?(): void;
        target?: EventTarget;
        timeStamp?: Date;
        type?: string;
    }

    export interface SyntheticEventData extends OptionalEventProperties {
        altKey?: boolean;
        button?: number;
        buttons?: number;
        clientX?: number;
        clientY?: number;
        changedTouches?: TouchList;
        charCode?: boolean;
        clipboardData?: DataTransfer;
        ctrlKey?: boolean;
        deltaMode?: number;
        deltaX?: number;
        deltaY?: number;
        deltaZ?: number;
        detail?: number;
        getModifierState?(key: string): boolean;
        key?: string;
        keyCode?: number;
        locale?: string;
        location?: number;
        metaKey?: boolean;
        pageX?: number;
        pageY?: number;
        relatedTarget?: EventTarget;
        repeat?: boolean;
        screenX?: number;
        screenY?: number;
        shiftKey?: boolean;
        targetTouches?: TouchList;
        touches?: TouchList;
        view?: AbstractView;
        which?: number;
    }

    export type EventSimulator = (element: Element | Component<any, any>, eventData?: SyntheticEventData) => void;

    export interface MockedComponentClass {
        new (): any;
    }

    export interface ShallowRenderer {
        /**
         * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
         *
         * @template E
         * @returns {E}
         *
         * @memberOf ShallowRenderer
         */
        getRenderOutput<E extends ReactElement<any>>(): E;
        /**
         * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
         *
         * @returns {ReactElement<any>}
         *
         * @memberOf ShallowRenderer
         */
        getRenderOutput(): ReactElement<any>;
        /**
         * Similar to `ReactDOM.render` but it doesn't require DOM and only renders a single level deep.
         *
         * @param {ReactElement<any>} element
         * @param {*} [context]
         *
         * @memberOf ShallowRenderer
         */
        render(element: ReactElement<any>, context?: any): void;
        unmount(): void;
    }

    /**
     * Simulate an event dispatch on a DOM node with optional `eventData` event data.
     * `Simulate` has a method for every event that React understands.
     */
    export namespace Simulate {
        export const blur: EventSimulator;
        export const change: EventSimulator;
        export const click: EventSimulator;
        export const copy: EventSimulator;
        export const cut: EventSimulator;
        export const doubleClick: EventSimulator;
        export const drag: EventSimulator;
        export const dragEnd: EventSimulator;
        export const dragEnter: EventSimulator;
        export const dragExit: EventSimulator;
        export const dragLeave: EventSimulator;
        export const dragOver: EventSimulator;
        export const dragStart: EventSimulator;
        export const drop: EventSimulator;
        export const focus: EventSimulator;
        export const input: EventSimulator;
        export const keyDown: EventSimulator;
        export const keyPress: EventSimulator;
        export const keyUp: EventSimulator;
        export const mouseDown: EventSimulator;
        export const mouseEnter: EventSimulator;
        export const mouseLeave: EventSimulator;
        export const mouseMove: EventSimulator;
        export const mouseOut: EventSimulator;
        export const mouseOver: EventSimulator;
        export const mouseUp: EventSimulator;
        export const paste: EventSimulator;
        export const scroll: EventSimulator;
        export const submit: EventSimulator;
        export const touchCancel: EventSimulator;
        export const touchEnd: EventSimulator;
        export const touchMove: EventSimulator;
        export const touchStart: EventSimulator;
        export const wheel: EventSimulator;
    }

    /**
     * Render a React element into a detached DOM node in the document. __This function requires a DOM__.
     *
     * @export
     * @template T
     * @param {DOMElement<any, T>} element
     * @returns {T}
     */
    export function renderIntoDocument<T extends Element>(
        element: DOMElement<any, T>): T;
    export function renderIntoDocument(
        element: SFCElement<any>): void;
    export function renderIntoDocument<T extends Component<any, any>>(
        element: CElement<any, T>): T;
    export function renderIntoDocument<P>(
        element: ReactElement<P>): Component<P, {}> | Element | void;

    /**
     * Pass a mocked component module to this method to augment it with useful methods that allow it to
     * be used as a dummy React component. Instead of rendering as usual, the component will become
     * a simple `<div>` (or other tag if `mockTagName` is provided) containing any provided children.
     *
     * @export
     * @param {MockedComponentClass} mocked
     * @param {string} [mockTagName]
     * @returns {typeof TestUtils}
     */
    export function mockComponent(
        mocked: MockedComponentClass, mockTagName?: string): typeof TestUtils;

    /**
     * Returns `true` if `element` is any React element.
     *
     * @export
     * @param {*} element
     * @returns {boolean}
     */
    export function isElement(element: any): boolean;

    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     *
     * @export
     * @template T
     * @param {ReactElement<any>} element
     * @param {string} type
     * @returns {element is ReactHTMLElement<T>}
     */
    export function isElementOfType<T extends HTMLElement>(
        element: ReactElement<any>, type: string): element is ReactHTMLElement<T>;
    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     *
     * @export
     * @template P
     * @template T
     * @param {ReactElement<any>} element
     * @param {string} type
     * @returns {element is DOMElement<P, T>}
     */
    export function isElementOfType<P extends DOMAttributes<{}>, T extends Element>(
        element: ReactElement<any>, type: string): element is DOMElement<P, T>;
    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     *
     * @export
     * @template P
     * @param {ReactElement<any>} element
     * @param {SFC<P>} type
     * @returns {element is SFCElement<P>}
     */
    export function isElementOfType<P>(
        element: ReactElement<any>, type: SFC<P>): element is SFCElement<P>;
    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     *
     * @export
     * @template P
     * @template T
     * @template C
     * @param {ReactElement<any>} element
     * @param {ClassType<P, T, C>} type
     * @returns {element is CElement<P, T>}
     */
    export function isElementOfType<P, T extends Component<P, {}>, C extends ComponentClass<P>>(
        element: ReactElement<any>, type: ClassType<P, T, C>): element is CElement<P, T>;

    /**
     * Returns `true` if `instance` is a DOM component (such as a `<div>` or `<span>`).
     *
     * @export
     * @param {ReactInstance} instance
     * @returns {instance is Element}
     */
    export function isDOMComponent(instance: ReactInstance): instance is Element;
    /**
     * Returns `true` if `instance` is a user-defined component, such as a class or a function.
     *
     * @export
     * @param {ReactInstance} instance
     * @returns {instance is Component<any, any>}
     */
    export function isCompositeComponent(instance: ReactInstance): instance is Component<any, any>;
    /**
     * Returns `true` if `instance` is a component whose type is of a React `componentClass`.
     *
     * @export
     * @template T
     * @template C
     * @param {ReactInstance} instance
     * @param {ClassType<any, T, C>} type
     * @returns {T}
     */
    export function isCompositeComponentWithType<T extends Component<any, any>, C extends ComponentClass<any>>(
        instance: ReactInstance, type: ClassType<any, T, C>): boolean;

    /**
     * Traverse all components in `tree` and accumulate all components where
     * `test(component)` is `true`. This is not that useful on its own, but it's used
     * as a primitive for other test utils.
     *
     * @export
     * @param {Component<any, any>} root
     * @param {(i: ReactInstance) => boolean} fn
     * @returns {ReactInstance[]}
     */
    export function findAllInRenderedTree(
        root: Component<any, any>,
        fn: (i: ReactInstance) => boolean): ReactInstance[];

    /**
     * Finds all DOM elements of components in the rendered tree that are
     * DOM components with the class name matching `className`.
     *
     * @export
     * @param {Component<any, any>} root
     * @param {string} className
     * @returns {Element[]}
     */
    export function scryRenderedDOMComponentsWithClass(
        root: Component<any, any>,
        className: string): Element[];
    /**
     * Like `scryRenderedDOMComponentsWithClass()` but expects there to be one result,
     * and returns that one result, or throws exception if there is any other
     * number of matches besides one.
     *
     * @export
     * @param {Component<any, any>} root
     * @param {string} className
     * @returns {Element}
     */
    export function findRenderedDOMComponentWithClass(
        root: Component<any, any>,
        className: string): Element;

    /**
     * Finds all DOM elements of components in the rendered tree that are
     * DOM components with the tag name matching `tagName`.
     *
     * @export
     * @param {Component<any, any>} root
     * @param {string} tagName
     * @returns {Element[]}
     */
    export function scryRenderedDOMComponentsWithTag(
        root: Component<any, any>,
        tagName: string): Element[];
    /**
     * Like `scryRenderedDOMComponentsWithTag()` but expects there to be one result,
     * and returns that one result, or throws exception if there is any other
     * number of matches besides one.
     *
     * @export
     * @param {Component<any, any>} root
     * @param {string} tagName
     * @returns {Element}
     */
    export function findRenderedDOMComponentWithTag(
        root: Component<any, any>,
        tagName: string): Element;

    /**
     * Finds all instances of components with type equal to `componentClass`.
     *
     * @export
     * @template T
     * @template C
     * @param {Component<any, any>} root
     * @param {ClassType<any, T, C>} type
     * @returns {T[]}
     */
    export function scryRenderedComponentsWithType<T extends Component<{}, {}>, C extends ComponentClass<{}>>(
        root: Component<any, any>,
        type: ClassType<any, T, C>): T[];

    /**
     * Same as `scryRenderedComponentsWithType()` but expects there to be one result
     * and returns that one result, or throws exception if there is any other
     * number of matches besides one.
     *
     * @export
     * @template T
     * @template C
     * @param {Component<any, any>} root
     * @param {ClassType<any, T, C>} type
     * @returns {T}
     */
    export function findRenderedComponentWithType<T extends Component<{}, {}>, C extends ComponentClass<{}>>(
        root: Component<any, any>,
        type: ClassType<any, T, C>): T;

    /**
     * Call this in your tests to create a shallow renderer.
     *
     * @export
     * @returns {ShallowRenderer}
     */
    export function createRenderer(): ShallowRenderer;
}
