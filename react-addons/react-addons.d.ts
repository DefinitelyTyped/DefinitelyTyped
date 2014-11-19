// Type definitions for React with Addons 0.12.RC
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react/addons" {
    export = React;
}

declare module React {
    export var addons: {
        classSet: (classes: {[key: string]: boolean}) => string;
        cloneWithProps: CloneWithProps<any>;
        CSSTransitionGroup: ReactComponentFactory<CSSTransitionGroupProps>;
        LinkedStateMixin: LinkedStateMixin<any, any>;
        Perf: Perf;
        PureRenderMixin: Mixin<any, any>;
        TestUtils: TestUtils;
        TransitionGroup: ReactComponentFactory<any>;
        update(object: Object, changes: Object): Object;
    };

    export interface CloneWithProps<P> {
        (instance: ReactComponentElement<P>, extraProps?: P): ReactComponentElement<P>;
    }

    export interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    export interface LinkedStateMixin<P, S> extends Mixin<P, S> {
        linkState<T>(key: string): ReactLink<T>;
    }

    export interface ComponentPerfContext {
        current: string;
        owner: string;
    }

    export interface CSSTransitionGroupProps {
        transitionName: string;
    }

    export interface TransitionsSpecification<P, S> extends Specification<P, S> {
        componentWillEnter?(callback: () => void): void;
        componentDidEnter?(): void;
        componentWillLeave?(callback: () => void): void;
        componentDidLeave?(): void;
    }

    export interface NumericPerfContext {
        [key: string]: number;
    }

    export interface Measurements {
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

    export interface Perf {
        start(): void;
        stop(): void;
        printInclusive(measurements: Measurements[]): void;
        printExclusive(measurements: Measurements[]): void;
        printWasted(measurements: Measurements[]): void;
        printDOM(measurements: Measurements[]): void;
        getLastMeasurements(): Measurements[];
    }

    export interface TestUtils {
        Simulate: Simulate;
        renderIntoDocument<P>(instance: ReactComponentElement<P>): ReactComponentElement<P>;
        renderIntoDocument(instance: ReactHTMLElement): ReactHTMLElement;
        renderIntoDocument(instance: ReactSVGElement): ReactSVGElement;
        mockComponent(componentClass: ReactComponentFactory<any>, mockTagName?: string): TestUtils;
        isDescriptorOfType(descriptor: ReactElement<any, any>, componentClass: ReactComponentFactory<any>): boolean;
        isDOMComponent(instance: ReactElement<any, any>): boolean;
        isCompositeComponent(instance: ReactElement<any, any>): boolean;
        isCompositeComponentWithType(instance: ReactElement<any, any>, componentClass: ReactComponentFactory<any>): boolean;
        isTextComponent(instance: ReactElement<any, any>): boolean;
        findAllInRenderedTree(tree: ReactElement<any, any>, test: (component: ReactElement<any, any>) => boolean): ReactElement<any, any>[];
        scryRenderedDOMComponentsWithClass(tree: ReactElement<any, any>, className: string): ReactElement<any, any>[];
        findRenderedDOMComponentWithClass(tree: ReactElement<any, any>, className: string): ReactElement<any, any>;
        scryRenderedDOMComponentsWithTag(tree: ReactElement<any, any>, tagName: string): ReactElement<any, any>[];
        findRenderedDOMComponentWithTag(tree: ReactElement<any, any>, tagName: string): ReactElement<any, any>;
        scryRenderedComponentsWithTag(tree: ReactElement<any, any>, componentClass: Function): ReactElement<any, any>[];
        findRenderedComponentWithType<P>(tree: ReactElement<any, any>, componentClass: ReactComponentFactory<P>): Component<P, any>;
        scryRenderedComponentsWithType<P>(tree: ReactElement<any, any>, componentClass: ReactComponentFactory<P>): Component<P, any>[];
    }

    export interface SyntheticEventData {
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

    export interface EventSimulator {
        (element: Element, eventData?: SyntheticEventData): void;
        (descriptor: ReactElement<any, any>, eventData?: SyntheticEventData): void;
    }

    export interface Simulate {
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
