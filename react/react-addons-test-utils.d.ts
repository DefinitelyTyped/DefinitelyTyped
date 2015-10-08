// Type definitions for React v0.14 (react-addons-test-utils)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
    namespace __Addons {
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
        
        interface MockedComponentClass {
            new(): any;
        }
        
        class ShallowRenderer {
            getRenderOutput<E extends ReactElement<any>>(): E;
            getRenderOutput(): ReactElement<any>;
            render(element: ReactElement<any>, context?: any): void;
            unmount(): void;
        }
        
        namespace TestUtils {
            namespace Simulate {
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
    
            export function renderIntoDocument<P>(
                element: ReactElement<P>): Component<P, any>;
            export function renderIntoDocument<C extends Component<any, any>>(
                element: ReactElement<any>): C;
    
            export function mockComponent(
                mocked: MockedComponentClass, mockTagName?: string): typeof TestUtils;
    
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
    }
}

declare module "react-addons-test-utils" {
    import TestUtils = __React.__Addons.TestUtils;
    export = TestUtils;
}
