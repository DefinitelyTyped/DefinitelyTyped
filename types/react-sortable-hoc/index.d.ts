// Type definitions for nes 0.0.7
// Project: https://github.com/clauderic/react-sortable-hoc
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare module 'react-sortable-hoc' {
    import React = require('react');

    export type Axis = 'x' | 'y' | 'xy';

    export type Offset = number | string;

    export interface SortStart {
        node: React.ReactNode;
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
        axis?: Axis;
        lockAxis?: Axis;
        helperClass?: string;
        transitionDuration?: number;
        pressDelay?: number;
        onSortStart?: SortStartHandler;
        onSortMove?: SortMoveHandler;
        onSortEnd?: SortEndHandler;
        useDragHandle?: boolean;
        useWindowAsScrollContainer?: boolean;
        hideSortableGhost?: boolean;
        lockToContainerEdges?: boolean;
        lockOffset?: Offset | [Offset, Offset];
        getContainer?: ContainerGetter;
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
