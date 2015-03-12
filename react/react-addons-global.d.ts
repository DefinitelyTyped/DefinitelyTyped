// Type definitions for ReactWithAddons v0.13.0 RC2 (internal module)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="react-global.d.ts" />

declare module React {
    //
    // React.addons
    // ----------------------------------------------------------------------

    export var addons: {
        CSSTransitionGroup: CSSTransitionGroup;
        LinkedStateMixin: LinkedStateMixin;
        PureRenderMixin: PureRenderMixin;
        TransitionGroup: TransitionGroup;

        batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
        batchedUpdates<A>(callback: (a: A) => any, a: A): void;
        batchedUpdates(callback: () => any): void;

        // deprecated: use petehunt/react-classset or JedWatson/classnames
        classSet(cx: { [key: string]: boolean }): string;
        classSet(...classList: string[]): string;

        cloneWithProps<P>(element: DOMElement<P>, props: P): DOMElement<P>;
        cloneWithProps<P>(element: ClassicElement<P>, props: P): ClassicElement<P>;
        cloneWithProps<P>(element: ReactElement<P>, props: P): ReactElement<P>;

        createFragment(object: { [key: string]: ReactNode }): ReactFragment;

        update(value: any[], spec: UpdateArraySpec): any[];
        update(value: {}, spec: UpdateSpec): any;

        // Development tools
        Perf: ReactPerf;
        TestUtils: ReactTestUtils;
    };

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

    interface UpdateSpec {
        $set: any;
        $merge: {};
        $apply(value: any): any;
        // [key: string]: UpdateSpec;
    }

    interface UpdateArraySpec extends UpdateSpec {
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

    interface ReactPerf {
        start(): void;
        stop(): void;
        printInclusive(measurements: Measurements[]): void;
        printExclusive(measurements: Measurements[]): void;
        printWasted(measurements: Measurements[]): void;
        printDOM(measurements: Measurements[]): void;
        getLastMeasurements(): Measurements[];
    }

    //
    // React.addons.TestUtils
    // ----------------------------------------------------------------------

    interface MockedComponentClass {
        new(): any;
    }

    interface ReactTestUtils {
        Simulate: Simulate;

        renderIntoDocument<P>(element: ReactElement<P>): Component<P, any>;
        renderIntoDocument<C extends Component<any, any>>(element: ReactElement<any>): C;

        mockComponent(mocked: MockedComponentClass, mockTagName?: string): ReactTestUtils;

        isElementOfType(element: ReactElement<any>, type: ReactType): boolean;
        isTextComponent(instance: Component<any, any>): boolean;
        isDOMComponent(instance: Component<any, any>): boolean;
        isCompositeComponent(instance: Component<any, any>): boolean;
        isCompositeComponentWithType(
            instance: Component<any, any>,
            type: ComponentClass<any>): boolean;

        findAllInRenderedTree(
            tree: Component<any, any>,
            fn: (i: Component<any, any>) => boolean): Component<any, any>;

        scryRenderedDOMComponentsWithClass(
            tree: Component<any, any>,
            className: string): DOMComponent<any>[];
        findRenderedDOMComponentWithClass(
            tree: Component<any, any>,
            className: string): DOMComponent<any>;

        scryRenderedDOMComponentsWithTag(
            tree: Component<any, any>,
            tagName: string): DOMComponent<any>[];
        findRenderedDOMComponentWithTag(
            tree: Component<any, any>,
            tagName: string): DOMComponent<any>;

        scryRenderedComponentsWithType<P>(
            tree: Component<any, any>,
            type: ComponentClass<P>): Component<P, {}>[];
        scryRenderedComponentsWithType<C extends Component<any, any>>(
            tree: Component<any, any>,
            type: ComponentClass<any>): C[];

        findRenderedComponentWithType<P>(
            tree: Component<any, any>,
            type: ComponentClass<P>): Component<P, {}>;
        findRenderedComponentWithType<C extends Component<any, any>>(
            tree: Component<any, any>,
            type: ComponentClass<any>): C;
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

    interface Simulate {
        blur: EventSimulator;
        change: EventSimulator;
        click: EventSimulator;
        cut: EventSimulator;
        doubleClick: EventSimulator;
        drag: EventSimulator;
        dragEnd: EventSimulator;
        dragEnter: EventSimulator;
        dragExit: EventSimulator;
        dragLeave: EventSimulator;
        dragOver: EventSimulator;
        dragStart: EventSimulator;
        drop: EventSimulator;
        focus: EventSimulator;
        input: EventSimulator;
        keyDown: EventSimulator;
        keyPress: EventSimulator;
        keyUp: EventSimulator;
        mouseDown: EventSimulator;
        mouseEnter: EventSimulator;
        mouseLeave: EventSimulator;
        mouseMove: EventSimulator;
        mouseOut: EventSimulator;
        mouseOver: EventSimulator;
        mouseUp: EventSimulator;
        paste: EventSimulator;
        scroll: EventSimulator;
        submit: EventSimulator;
        touchCancel: EventSimulator;
        touchEnd: EventSimulator;
        touchMove: EventSimulator;
        touchStart: EventSimulator;
        wheel: EventSimulator;
    }
}

