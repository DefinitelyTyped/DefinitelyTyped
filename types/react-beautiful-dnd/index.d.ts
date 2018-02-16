// Type definitions for react-beautiful-dnd 4.0.1
// Project: https://github.com/atlassian/react-beautiful-dnd
// Definitions by: varHarrie <https://github.com/varHarrie>
//                 Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

export type Id = string;
export type DraggableId = Id;
export type DroppableId = Id;
export type TypeId = Id;
export type ZIndex = number | string;

export interface DraggableLocation {
    droppableId: DroppableId;
    index: number;
}

/**
 *  DragDropContext
 */

export interface DragStart {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
}

export interface DropResult {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
    destination?: DraggableLocation | null;
}

export interface DragDropContextProps {
    onDragStart?(initial: DragStart): void;
    onDragEnd(result: DropResult): void;
}

export class DragDropContext extends React.Component<DragDropContextProps> {}

/**
 *  Droppable
 */

export interface DroppableProvided {
    innerRef(element: HTMLElement | null): any;
    placeholder?: React.ReactElement<any> | null;
}

export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
}

export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId;
    isDropDisabled?: boolean;
    direction?: 'vertical' | 'horizontal';
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement<any>;
}

export class Droppable extends React.Component<DroppableProps> {}

/**
 *  Draggable
 */

export interface NotDraggingStyle {
    transform: null | string,
    transition: null | 'none',
}

export interface DraggingStyle {
    pointerEvents: 'none',
    position: 'fixed',
    width: number,
    height: number,
    boxSizing: 'border-box',
    top: number,
    left: number,
    margin: 0,
    transform: null | string,
    transition: 'none',
    zIndex: ZIndex,
}

export interface DraggableProvidedDraggableProps {
    // inline style
    style: null | DraggingStyle | NotDraggingStyle,
    // used for shared global styles
    'data-react-beautiful-dnd-draggable': string,
}

export interface DraggableProvidedDragHandleProps {
    onMouseDown: React.MouseEventHandler<any>;
    onKeyDown: React.KeyboardEventHandler<any>;
    onClick: React.MouseEventHandler<any>;
    tabIndex: number;
    'aria-grabbed': boolean;
    draggable: boolean;
    onDragStart(): void;
    onDrop(): void;
}

export interface DraggableProvided {
    draggableProps: DraggableProvidedDraggableProps | null;
    dragHandleProps: DraggableProvidedDragHandleProps | null;

    // will be removed after move to react 16
    innerRef(element?: HTMLElement | null): any;
    placeholder?: React.ReactElement<any> | null;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
}

export interface DraggableProps {
    draggableId: DroppableId;
    index: number;
    isDragDisabled?: boolean;
    disableInteractiveElementBlocking?: boolean;
    children(provided: DraggableProvided, snapshot: DraggableStateSnapshot): React.ReactElement<any>;
}

export class Draggable extends React.Component<DraggableProps> {}
