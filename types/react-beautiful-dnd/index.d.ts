// Type definitions for react-beautiful-dnd 2.3
// Project: https://github.com/atlassian/react-beautiful-dnd
// Definitions by: varHarrie <https://github.com/varHarrie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';

export type Id = string;

export type DraggableId = Id;

export type DroppableId = Id;

export type TypeId = Id;

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
    destination?: DraggableLocation;
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
    placeholder?: React.ReactElement<any>;
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

export type DraggableStyle = any;

export interface DragHandleProps {
    onMouseDown(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onClick(event: MouseEvent): void;
    tabIndex: number;
    'aria-grabbed': boolean;
    draggable: boolean;
    onDragStart(): void;
    onDrop(): void;
}

export interface DraggableProvided {
    innerRef(element?: HTMLElement | null): any;
    draggableStyle?: DraggableStyle;
    dragHandleProps?: DragHandleProps;
    placeholder?: React.ReactElement<any>;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
}

export interface DraggableProps {
    draggableId: DroppableId;
    type?: TypeId;
    isDragDisabled?: boolean;
    children(provided: DraggableProvided, snapshot: DraggableStateSnapshot): React.ReactElement<any>;
}

export class Draggable extends React.Component<DraggableProps> {}
