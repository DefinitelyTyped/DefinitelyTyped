// Type definitions for react-beautiful-dnd 7.1
// Project: https://github.com/atlassian/react-beautiful-dnd
// Definitions by: varHarrie <https://github.com/varHarrie>
//                 Bradley Ayers <https://github.com/bradleyayers>
//                 Austin Turner <https://github.com/paustint>
//                 Mark Nelissen <https://github.com/marknelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Id = string;
export type DraggableId = Id;
export type DroppableId = Id;
export type TypeId = Id;
export type ZIndex = React.CSSProperties['zIndex'];
export type DropReason = 'DROP' | 'CANCEL';
export type Announce = (message: string) => void;

export interface DraggableLocation {
    droppableId: DroppableId;
    index: number;
}

export interface HookProvided {
    announce: Announce;
}

/**
 *  DragDropContext
 */

export interface DragStart {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
}

export interface DragUpdate extends DragStart {
    destination?: DraggableLocation | null;
}

export interface DropResult extends DragUpdate {
    reason: DropReason;
}

export interface DragDropContextProps {
    onDragStart?(initial: DragStart, provided: HookProvided): void;
    onDragUpdate?(initial: DragUpdate, provided: HookProvided): void;
    onDragEnd(result: DropResult, provided: HookProvided): void;
}

export class DragDropContext extends React.Component<DragDropContextProps> {}

/**
 *  Droppable
 */

export interface DroppableProvidedProps {
    // used for shared global styles
    'data-react-beautiful-dnd-droppable': string;
}
export interface DroppableProvided {
    innerRef(element: HTMLElement | null): any;
    placeholder?: React.ReactElement<any> | null;
    droppableProps: DroppableProvidedProps;
}

export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
}

export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId;
    ignoreContainerClipping?: boolean;
    isDropDisabled?: boolean;
    direction?: 'vertical' | 'horizontal';
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement<any>;
}

export class Droppable extends React.Component<DroppableProps> {}

/**
 *  Draggable
 */

export interface NotDraggingStyle {
    transform?: string;
    transition?: 'none';
}

export interface DraggingStyle {
    pointerEvents: 'none';
    position: 'fixed';
    width: number;
    height: number;
    boxSizing: 'border-box';
    top: number;
    left: number;
    margin: 0;
    transform?: string;
    transition: 'none';
    zIndex: ZIndex;
}

export interface DraggableProvidedDraggableProps {
    // inline style
    style?: DraggingStyle | NotDraggingStyle;
    // used for shared global styles
    'data-react-beautiful-dnd-draggable': string;
}

export interface DraggableProvidedDragHandleProps {
    onMouseDown: React.MouseEventHandler<any>;
    onKeyDown: React.KeyboardEventHandler<any>;
    onTouchStart: React.TouchEventHandler<any>;
    onTouchMove: React.TouchEventHandler<any>;
    'data-react-beautiful-dnd-drag-handle': string;
    'aria-roledescription': string;
    tabIndex: number;
    'aria-grabbed': boolean;
    draggable: boolean;
    onDragStart: React.DragEventHandler<any>;
}

export interface DraggableProvided {
    draggableProps: DraggableProvidedDraggableProps;
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
    type?: TypeId;
}

export class Draggable extends React.Component<DraggableProps> {}
