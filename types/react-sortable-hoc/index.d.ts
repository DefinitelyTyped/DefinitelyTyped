// Type definitions for react-sortable-hoc 0.6
// Project: https://github.com/clauderic/react-sortable-hoc
// Definitions by: Ivo Stratev <https://github.com/NoHomey>, Charles Rey <https://github.com/charlesrey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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

export interface Dimensions {
    width: number;
    height: number;
}

export interface SortableContainerProps {
    axis?: Axis;
    lockAxis?: Axis;
    helperClass?: string;
    transitionDuration?: number;
    pressDelay?: number;
    pressThreshold?: number;
    distance?: number;
    shouldCancelStart?: (event: SortEvent) => boolean;
    onSortStart?: SortStartHandler;
    onSortMove?: SortMoveHandler;
    onSortEnd?: SortEndHandler;
    useDragHandle?: boolean;
    useWindowAsScrollContainer?: boolean;
    hideSortableGhost?: boolean;
    lockToContainerEdges?: boolean;
    lockOffset?: Offset | [Offset, Offset];
    getContainer?: ContainerGetter;
    getHelperDimensions?: (sort: SortStart) => Dimensions;
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

export function arrayMove<T>(collection: T[], previousIndex: number, newIndex: number): T[];
