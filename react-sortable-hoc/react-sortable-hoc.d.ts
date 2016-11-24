// Type definitions for nes 0.0.7
// Project: https://github.com/clauderic/react-sortable-hoc
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module 'react-sortable-hoc' {
    import React = require('react');

    export type Axis = 'x' | 'y';

    export type Offset = number | string;

    export interface SortStart {
        node: React.ReactNode;
        index: number;
        collection: Offset;
    }

    export type SortEvent = React.MouseEvent | React.TouchEvent;

    export type SortStartHandler = (sort: SortStart, event: SortEvent) => void;

    export type SortMoveHandler = (event: SortEvent) => void;

    export interface SortEnd {
        oldIndex: number;
        newIndex: number;
        collection: Offset;
    }

    export type SortEndHandler = (sort: SortEnd, event: SortEvent) => void;

    export type ContainerGetter = (element: React.ReactElement<any>) => HTMLElement;

    export interface SortableContainerHOCProps {
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

    export interface SortableElementHOCProps {
        index: number;
        collection?: Offset;
        disabled?: boolean;
    }

    export interface Config {
        withRef: boolean;
    }

    export type WrappedComponentFactory<P> = (props: P) => JSX.Element; 

    export type WrappedComponent<P> = React.ComponentClass<P> | WrappedComponentFactory<P>;

    export type SortableContainerProps<P> = P & SortableContainerHOCProps;

    export type SortableElementProps<P> = P & SortableElementHOCProps;
    
    // Generic decorators can't be used in TSX:
    // [ts] Cannot find name ''. [ts] JSX element '' has no corresponding closing tag.
    // Sortable{Wrapper}Props<Props> is required in order to avoid compilation errors:
    // [ts] Property '{prop}' dose not exist on type ...

    export function SortableContainer<P>(wrappedComponent: WrappedComponent<P>, config?: Config): React.ComponentClass<SortableContainerProps<P>>;

    export function SortableContainer<TFunction extends Function>(wrappedComponent: TFunction, config?: Config): TFunction | void;

    export function SortableElement<P>(wrappedComponent: WrappedComponent<P>, config?: Config): React.ComponentClass<SortableElementProps<P>>;

    export function SortableElement<TFunction extends Function>(wrappedComponent: TFunction, config?: Config): TFunction | void;

    export function SortableHandle<P>(wrappedComponent: WrappedComponent<P>, config?: Config): React.ComponentClass<P>;

    export function arrayMove<T>(collection: Array<T>, previousIndex: number, newIndex: number): Array<T>;
}
