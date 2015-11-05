// Type definitions for React v0.13.3 (namespace)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react.d.ts" />

import React = __React;

declare namespace __React {
    //
    // React.addons
    // ----------------------------------------------------------------------

    export module addons {
        export var CSSTransitionGroup: CSSTransitionGroup;
        export var TransitionGroup: TransitionGroup;

        export var LinkedStateMixin: LinkedStateMixin;
        export var PureRenderMixin: PureRenderMixin;

        export function batchedUpdates<A, B>(
            callback: (a: A, b: B) => any, a: A, b: B): void;
        export function batchedUpdates<A>(callback: (a: A) => any, a: A): void;
        export function batchedUpdates(callback: () => any): void;

        // deprecated: use petehunt/react-classset or JedWatson/classnames
        export function classSet(cx: { [key: string]: boolean }): string;
        export function classSet(...classList: string[]): string;

        export function cloneWithProps<P>(
            element: DOMElement<P>, props: P): DOMElement<P>;
        export function cloneWithProps<P>(
            element: ClassicElement<P>, props: P): ClassicElement<P>;
        export function cloneWithProps<P>(
            element: ReactElement<P>, props: P): ReactElement<P>;

        export function createFragment(
            object: { [key: string]: ReactNode }): ReactFragment;

        export function update(value: any[], spec: UpdateArraySpec): any[];
        export function update(value: {}, spec: UpdateSpec): any;

        // Development tools
        export import Perf = ReactPerf;
        export import TestUtils = ReactTestUtils;
    }

    //
    // React.addons (Transitions)
    // ----------------------------------------------------------------------

    interface TransitionGroupProps {
        component?: ReactType;
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }

    interface CSSTransitionGroupProps extends TransitionGroupProps {
        transitionName: string;
        transitionAppear?: boolean;
        transitionEnter?: boolean;
        transitionLeave?: boolean;
    }

    type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;
    type TransitionGroup = ComponentClass<TransitionGroupProps>;

    //
    // React.addons (Mixins)
    // ----------------------------------------------------------------------

    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    interface LinkedStateMixin extends Mixin<any, any> {
        linkState<T>(key: string): ReactLink<T>;
    }

    interface PureRenderMixin extends Mixin<any, any> {
    }

    //
    // Reat.addons.update
    // ----------------------------------------------------------------------

    interface UpdateSpecCommand {
        $set?: any;
        $merge?: {};
        $apply?(value: any): any;
    }

    interface UpdateSpecPath {
        [key: string]: UpdateSpec;
    }

    type UpdateSpec = UpdateSpecCommand | UpdateSpecPath;

    interface UpdateArraySpec extends UpdateSpecCommand {
        $push?: any[];
        $unshift?: any[];
        $splice?: any[][];
    }

    //
    // React.addons.Perf
    // ----------------------------------------------------------------------

    interface ComponentPerfContext {
        current: string;
        owner: string;
    }

    interface NumericPerfContext {
        [key: string]: number;
    }

    interface Measurements {
        exclusive: NumericPerfContext;
        inclusive: NumericPerfContext;
        render: NumericPerfContext;
        counts: NumericPerfContext;
        writes: NumericPerfContext;
        displayNames: {
            [key: string]: ComponentPerfContext;
        };
        totalTime: number;
    }

    module ReactPerf {
        export function start(): void;
        export function stop(): void;
        export function printInclusive(measurements: Measurements[]): void;
        export function printExclusive(measurements: Measurements[]): void;
        export function printWasted(measurements: Measurements[]): void;
        export function printDOM(measurements: Measurements[]): void;
        export function getLastMeasurements(): Measurements[];
    }

    //
    // React.addons.TestUtils
    // ----------------------------------------------------------------------

    interface MockedComponentClass {
        new(): any;
    }

    module ReactTestUtils {
        export import Simulate = ReactSimulate;

        export function renderIntoDocument<P>(
            element: ReactElement<P>): Component<P, any>;
        export function renderIntoDocument<C extends Component<any, any>>(
            element: ReactElement<any>): C;

        export function mockComponent(
            mocked: MockedComponentClass, mockTagName?: string): typeof ReactTestUtils;

        export function isElementOfType(
            element: ReactElement<any>, type: ReactType): boolean;
        export function isTextComponent(instance: Component<any, any>): boolean;
        export function isDOMComponent(instance: Component<any, any>): boolean;
        export function isCompositeComponent(instance: Component<any, any>): boolean;
        export function isCompositeComponentWithType(
            instance: Component<any, any>,
            type: ComponentClass<any>): boolean;

        export function findAllInRenderedTree(
            tree: Component<any, any>,
            fn: (i: Component<any, any>) => boolean): Component<any, any>;

        export function scryRenderedDOMComponentsWithClass(
            tree: Component<any, any>,
            className: string): DOMComponent<any>[];
        export function findRenderedDOMComponentWithClass(
            tree: Component<any, any>,
            className: string): DOMComponent<any>;

        export function scryRenderedDOMComponentsWithTag(
            tree: Component<any, any>,
            tagName: string): DOMComponent<any>[];
        export function findRenderedDOMComponentWithTag(
            tree: Component<any, any>,
            tagName: string): DOMComponent<any>;

        export function scryRenderedComponentsWithType<P>(
            tree: Component<any, any>,
            type: ComponentClass<P>): Component<P, {}>[];
        export function scryRenderedComponentsWithType<C extends Component<any, any>>(
            tree: Component<any, any>,
            type: ComponentClass<any>): C[];

        export function findRenderedComponentWithType<P>(
            tree: Component<any, any>,
            type: ComponentClass<P>): Component<P, {}>;
        export function findRenderedComponentWithType<C extends Component<any, any>>(
            tree: Component<any, any>,
            type: ComponentClass<any>): C;

        export function createRenderer(): ShallowRenderer;
    }

    interface SyntheticEventData {
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

    interface EventSimulator {
        (element: Element, eventData?: SyntheticEventData): void;
        (component: Component<any, any>, eventData?: SyntheticEventData): void;
    }

    module ReactSimulate {
        export var blur: EventSimulator;
        export var change: EventSimulator;
        export var click: EventSimulator;
        export var cut: EventSimulator;
        export var doubleClick: EventSimulator;
        export var drag: EventSimulator;
        export var dragEnd: EventSimulator;
        export var dragEnter: EventSimulator;
        export var dragExit: EventSimulator;
        export var dragLeave: EventSimulator;
        export var dragOver: EventSimulator;
        export var dragStart: EventSimulator;
        export var drop: EventSimulator;
        export var focus: EventSimulator;
        export var input: EventSimulator;
        export var keyDown: EventSimulator;
        export var keyPress: EventSimulator;
        export var keyUp: EventSimulator;
        export var mouseDown: EventSimulator;
        export var mouseEnter: EventSimulator;
        export var mouseLeave: EventSimulator;
        export var mouseMove: EventSimulator;
        export var mouseOut: EventSimulator;
        export var mouseOver: EventSimulator;
        export var mouseUp: EventSimulator;
        export var paste: EventSimulator;
        export var scroll: EventSimulator;
        export var submit: EventSimulator;
        export var touchCancel: EventSimulator;
        export var touchEnd: EventSimulator;
        export var touchMove: EventSimulator;
        export var touchStart: EventSimulator;
        export var wheel: EventSimulator;
    }

    class ShallowRenderer {
        getRenderOutput<E extends ReactElement<any>>(): E;
        getRenderOutput(): ReactElement<any>;
        render(element: ReactElement<any>, context?: any): void;
        unmount(): void;
    }
}
