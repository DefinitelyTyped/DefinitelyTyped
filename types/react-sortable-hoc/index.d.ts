// Type definitions for nes 0.0.7
// Project: https://github.com/clauderic/react-sortable-hoc
// Definitions by: Ivo Stratev <https://github.com/NoHomey>, Charles Rey <https://github.com/charlesrey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-sortable-hoc' {
    import * as React from 'react';

    export type Axis = 'x' | 'y' | 'xy';

    export type Offset = number | string;

    export interface SortStart {
        node: Element;
        index: number;
        collection: Offset;
    }

    export type SortEvent = React.MouseEvent<any> | React.TouchEvent<any>;

    export type SortStartHandler = (sort: SortStart, event: SortEvent) => void;

    export type SortMoveHandler = (event: SortEvent) => void;

    export interface SortEnd {
        oldIndex: number;
        newIndex: number;
        collection: Offset;
    }

    export type SortEndHandler = (sort: SortEnd, event: SortEvent) => void;

    export type ContainerGetter = (element: React.ReactElement<any>) => HTMLElement;

    export interface SortableContainerProps {
        /**
         * Items can be sorted horizontally, vertically or in a grid. Possible values: `x`, `y` or `xy`
         */
        axis?: Axis;
        
        /**
         * If you'd like, you can lock movement to an axis while sorting.
         * This is not something that is possible with HTML5 Drag & Drop
         */ 
        lockAxis?: Axis;
        
        /**
         * You can provide a class you'd like to add to the sortable helper to add some styles to it
         */
        helperClass?: string;
        
        /**
         * The duration of the transition when elements shift positions.
         * Set this to `0` if you'd like to disable transitions
         */
        transitionDuration?: number;
        
        /**
         * If you'd like elements to only become sortable after being pressed for a certain time,
         * change this property. A good sensible default value for mobile is `200`. Cannot be used
         * in conjunction with the distance prop.
         */
        pressDelay?: number;
        
        /**
         * If you'd like elements to only become sortable after being dragged a certain number of pixels.
         * Cannot be used in conjunction with the `pressDelay` prop.
         */
        distance?: number;
        
        /**
         * This function get's invoked before sorting begins, and can be used to programatically cancel
         * sorting before it begins. By default, it will cancel sorting if the event target is either an
         * `input`, `textarea`, `select` or `option`.
         */
        shouldCancelStart?: (event: SortEvent) => boolean;
        
        /**
         * Callback that get's invoked when sorting begins. `function({node, index, collection}, event)`
         */
        onSortStart?: SortStartHandler;
        
        /**
         * Callback that get's invoked during sorting as the cursor moves. `function(event)`
         */
        onSortMove?: SortMoveHandler;
        
        /**
         * Callback that get's invoked when sorting ends. `function({oldIndex, newIndex, collection}, e)`
         */
        onSortEnd?: SortEndHandler;
        
        /**
         * If you're using the `SortableHandle` HOC, set this to `true`
         */
        useDragHandle?: boolean;
        
        /**
         * If you want, you can set the `window` as the scrolling container
         */
        useWindowAsScrollContainer?: boolean;
        
        /**
         * Whether to auto-hide the ghost element. By default, as a convenience, React Sortable List will
         * automatically hide the element that is currently being sorted. Set this to false if you would
         * like to apply your own styling.
         */
        hideSortableGhost?: boolean;
        
        /**
         * You can lock movement of the sortable element to it's parent `SortableContainer`
         */
        lockToContainerEdges?: boolean;
        
        /**
         * `"50%"`
         */
        lockOffset?: Offset | [Offset, Offset];
        
        /**
         * Optional function to return the scrollable container element. This property defaults to the
         * `SortableContainer` element itself or (if `useWindowAsScrollContainer` is true) the window. Use
         * this function to specify a custom container object (eg this is useful for integrating with
         * certain 3rd party components such as `FlexTable`). This function is passed a single parameter
         * (the `wrappedInstance` React element) and it is expected to return a DOM element.
         */
        getContainer?: ContainerGetter;
        
        /**
         * Optional `function({node, index, collection})` that should return the computed dimensions of the
         * SortableHelper. See [default implementation][0] for more details
         * [0]: https://github.com/clauderic/react-sortable-hoc/blob/v0.4.5/src/SortableContainer/index.js#L47
         */
        getHelperDimensions?: any;
    }

    export interface SortableElementProps {
        index: number;
        collection?: Offset;
        disabled?: boolean;
    }

    export interface Config {
        withRef: boolean;
    }

    export type WrappedComponentFactory<P> = (props: P) => JSX.Element;

    export type WrappedComponent<P> = React.ComponentClass<P> | WrappedComponentFactory<P>;

    export function SortableContainer<P>(wrappedComponent: WrappedComponent<P>, config?: Config): React.ComponentClass<P & SortableContainerProps>;

    export function SortableElement<P>(wrappedComponent: WrappedComponent<P>, config?: Config): React.ComponentClass<P & SortableElementProps>;

    export function SortableHandle<P>(wrappedComponent: WrappedComponent<P>, config?: Config): React.ComponentClass<P>;

    export function arrayMove<T>(collection: Array<T>, previousIndex: number, newIndex: number): Array<T>;
}
