// Type definitions for React with Addons 0.11.2
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react-0.11.d.ts" />

declare module "react/addons-0.11" {
    export = React;
}

declare module React {
    export var addons: {
        classSet: (classes: {[key: string]: boolean}) => string;
        cloneWithProps: CloneWithProps<any>;
        CSSTransitionGroup: Factory<CSSTransitionGroupProps>;
        LinkedStateMixin: LinkedStateMixin<any, any>;
        Perf: Perf;
        PureRenderMixin: Mixin<any, any>;
        TestUtils: TestUtils;
        TransitionGroup: Factory<any>;
        update(object: Object, changes: Object): Object;
    };

    export interface CloneWithProps<P> {
        (instance: Descriptor<P>, extraProps?: P): Descriptor<P>;
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
        renderIntoDocument(instance: Descriptor<any>): Descriptor<any>;
        mockComponent(componentClass: Factory<any>, mockTagName?: string): TestUtils;
        isDescriptorOfType(descriptor: Descriptor<any>, componentClass: Factory<any>): boolean;
        isDOMComponent(instance: Descriptor<any>): boolean;
        isCompositeComponent(instance: Descriptor<any>): boolean;
        isCompositeComponentWithType(instance: Descriptor<any>, componentClass: Function): boolean;
        isTextComponent(instance: Descriptor<any>): boolean;
        findAllInRenderedTree(tree: Descriptor<any>, test: Function): Descriptor<any>[];
        scryRenderedDOMComponentsWithClass(tree: Descriptor<any>, className: string): Descriptor<any>[];
        findRenderedDOMComponentWithClass(tree: Descriptor<any>, className: string): Descriptor<any>;
        scryRenderedDOMComponentsWithTag(tree: Descriptor<any>, className: string): Descriptor<any>[];
        findRenderedDOMComponentWithTag(tree: Descriptor<any>, tagName: string): Descriptor<any>;
        scryFindRenderedComponentsWithTag(tree: Descriptor<any>, componentClass: Function): Descriptor<any>[];
        findRenderedComponentWithType(tree: Descriptor<any>, componentClass: Function): Descriptor<any>;
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
        (descriptor: Descriptor<any>, eventData?: SyntheticEventData): void;
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
