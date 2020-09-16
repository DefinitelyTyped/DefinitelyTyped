// Type definitions for react-beautiful-dnd 10.1
// Project: https://github.com/atlassian/react-beautiful-dnd
// Definitions by: varHarrie <https://github.com/varHarrie>
//                 Bradley Ayers <https://github.com/bradleyayers>
//                 Austin Turner <https://github.com/paustint>
//                 Mark Nelissen <https://github.com/marknelissen>
//                 Enrico Boccadifuoco <https://github.com/enricoboccadifuoco>
//                 Taeheon Kim <https://github.com/lonyele>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
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

export type MovementMode = 'FLUID' | 'SNAP';

/**
 * Responders
 */

export interface ResponderProvided {
    announce: Announce;
}

export type OnBeforeDragStartResponder = (start: DragStart) => void;

export type OnDragStartResponder = (
    start: DragStart,
    provided: ResponderProvided,
) => void;

export type OnDragUpdateResponder = (
    update: DragUpdate,
    provided: ResponderProvided,
) => void;

export type OnDragEndResponder = (
    result: DropResult,
    provided: ResponderProvided,
) => void;

export interface Responders {
    onBeforeDragStart?: OnBeforeDragStartResponder;
    onDragStart?: OnDragStartResponder;
    onDragUpdate?: OnDragUpdateResponder;
    onDragEnd: OnDragEndResponder;
}

/**
 *  DragDropContext
 */

export interface DragStart {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
    mode: MovementMode;
}

export interface DragUpdate extends DragStart {
    destination?: DraggableLocation | null;
    // populated when a draggable is dragging over another in combine mode
    combine?: Combine | null;
}

// details of the item that is being combined with
export interface Combine {
    draggableId: DraggableId;
    droppableId: DroppableId;
}

export interface DropResult extends DragUpdate {
    reason: DropReason;
}

export interface DragDropContextProps {
    onBeforeDragStart?(initial: DragStart): void;
    onDragStart?(initial: DragStart, provided: ResponderProvided): void;
    onDragUpdate?(initial: DragUpdate, provided: ResponderProvided): void;
    onDragEnd(result: DropResult, provided: ResponderProvided): void;
}

export class DragDropContext extends React.Component<DragDropContextProps> { }

/**
 *  Droppable
 */

export interface DroppableProvidedProps {
    // used for shared global styles
    'data-react-beautiful-dnd-droppable': string;
}
export interface DroppableProvided {
    innerRef(element: HTMLElement | null): any;
    placeholder?: React.ReactElement<HTMLElement> | null;
    droppableProps: DroppableProvidedProps;
}

export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
    draggingOverWith?: DraggableId;
    draggingFromThisWith?: DraggableId;
}

export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId;
    ignoreContainerClipping?: boolean;
    isDropDisabled?: boolean;
    isCombineEnabled?: boolean;
    direction?: 'vertical' | 'horizontal';
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement<HTMLElement>;
}

export class Droppable extends React.Component<DroppableProps> { }

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
    placeholder?: React.ReactElement<HTMLElement> | null;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
    isDropAnimating: boolean;
    draggingOver?: DroppableId;
    dropAnimation?: DropAnimation;
    // the id of a draggable that you are combining with
    combineWith?: DraggableId;
    // a combine target is being dragged over by
    combineTargetFor?: DraggableId;
    // What type of movement is being done: 'FLUID' or 'SNAP'
    mode?: MovementMode;
}

export interface Position {
    x: number;
    y: number;
}

export interface DropAnimation {
    duration: number;
    curve: string;
    moveTo: Position;
    opacity?: number;
    scale?: number;
}

export interface DraggableProps {
    draggableId: DroppableId;
    index: number;
    isDragDisabled?: boolean;
    disableInteractiveElementBlocking?: boolean;
    children(provided: DraggableProvided, snapshot: DraggableStateSnapshot): React.ReactElement<HTMLElement>;
    type?: TypeId;
    shouldRespectForceTouch?: boolean;
}

export class Draggable extends React.Component<DraggableProps> { }
