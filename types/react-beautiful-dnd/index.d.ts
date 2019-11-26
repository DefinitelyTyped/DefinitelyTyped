// Type definitions for react-beautiful-dnd 12.1
// Project: https://github.com/atlassian/react-beautiful-dnd
// Definitions by: varHarrie <https://github.com/varHarrie>
//                 Bradley Ayers <https://github.com/bradleyayers>
//                 Austin Turner <https://github.com/paustint>
//                 Mark Nelissen <https://github.com/marknelissen>
//                 Enrico Boccadifuoco <https://github.com/enricoboccadifuoco>
//                 Taeheon Kim <https://github.com/lonyele>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Arun George <https://github.com/aruniverse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

/**
 * IDs
 */

export type Id = string;
export type TypeId = Id;
export type DraggableId = Id;
export type DroppableId = Id;

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

export type OnBeforeCaptureResponder = (before: BeforeCapture) => void;

export type OnBeforeDragStartResponder = (start: DragStart) => void;

export type OnDragStartResponder = (start: DragStart, provided: ResponderProvided) => void;

export type OnDragUpdateResponder = (update: DragUpdate, provided: ResponderProvided) => void;

export type OnDragEndResponder = (result: DropResult, provided: ResponderProvided) => void;

export interface Responders {
    onBeforeCapture?: OnBeforeCaptureResponder;
    onBeforeDragStart?: OnBeforeDragStartResponder;
    onDragStart?: OnDragStartResponder;
    onDragUpdate?: OnDragUpdateResponder;
    onDragEnd: OnDragEndResponder;
}

/**
 *  DragDropContext
 */

export interface DraggableRubric {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
}

export interface DragStart extends DraggableRubric {
    mode: MovementMode;
}

export interface DragUpdate extends DragStart {
    destination?: DraggableLocation;
    // populated when a draggable is dragging over another in combine mode
    combine?: Combine;
}

export interface BeforeCapture {
    draggableId: DraggableId;
    mode: MovementMode;
}

// details of the item that is being combined with
export interface Combine {
    draggableId: DraggableId;
    droppableId: DroppableId;
}

export interface DropResult extends DragUpdate {
    reason: 'DROP' | 'CANCEL';
}

export interface DragDropContextProps {
    onBeforeDragStart?(initial: DragStart): void;
    onDragStart?(initial: DragStart, provided: ResponderProvided): void;
    onDragUpdate?(initial: DragUpdate, provided: ResponderProvided): void;
    onDragEnd(result: DropResult, provided: ResponderProvided): void;
}

export class DragDropContext extends React.Component<DragDropContextProps> {}

/**
 *  Sensors
 */
export type Sensor = (api: SensorAPI) => void;

export interface TryGetLockOptions {
    sourceEvent?: Event;
}

export interface StopDragOptions {
    shouldBlockNextClick: boolean;
}

export interface DragActions {
    drop: (args?: StopDragOptions) => void;
    cancel: (args?: StopDragOptions) => void;
    isActive: () => boolean;
    shouldRespectForcePress: () => boolean;
}

export interface FluidDragActions extends DragActions {
    move: (clientSelection: Position) => void;
}

export interface SnapDragActions extends DragActions {
    moveUp: () => void;
    moveDown: () => void;
    moveRight: () => void;
    moveLeft: () => void;
}

export interface PreDragActions {
    // discover if the lock is still active
    isActive: () => boolean;
    // whether it has been indicated if force press should be respected
    shouldRespectForcePress: () => boolean;
    // lift the current item
    fluidLift: (clientSelection: Position) => FluidDragActions;
    snapLift: () => SnapDragActions;
    // cancel the pre drag without starting a drag. Releases the lock
    abort: () => void;
}

export type TryGetLock = (
    draggableId: DraggableId,
    forceStop?: () => void,
    options?: TryGetLockOptions,
) => PreDragActions | null;

export interface DraggableOptions {
    canDragInteractiveElements: boolean;
    shouldRespectForcePress: boolean;
    isEnabled: boolean;
}

export interface SensorAPI {
    tryGetLock: TryGetLock;
    canGetLock: (id: DraggableId) => boolean;
    isLockClaimed: () => boolean;
    tryReleaseLock: () => void;
    findClosestDraggableId: (event: Event) => DraggableId | null;
    findOptionsForDraggable: (id: DraggableId) => DraggableOptions | null;
}

/**
 *  Droppable
 */

export interface DroppableProvidedProps {
    // used for shared global styles
    'data-rbd-droppable-context-id': string;
    // Used to lookup. Currently not used for drag and drop lifecycle
    'data-rbd-droppable-id': DroppableId;
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
    isUsingPlaceholder: boolean;
}

export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId;
    mode?: 'standard' | 'virtual';
    isDropDisabled?: boolean;
    isCombineEnabled?: boolean;
    direction?: 'vertical' | 'horizontal';
    ignoreContainerClipping?: boolean;
    renderClone?: DraggableChildrenFn;
    getContainerForClone?: () => React.ReactElement<HTMLElement>;
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement<HTMLElement>;
}

export class Droppable extends React.Component<DroppableProps> {}

/**
 *  Draggable
 */

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

export interface NotDraggingStyle {
    transform?: string;
    transition?: 'none';
}

export interface DraggingStyle {
    position: 'fixed';
    top: number;
    left: number;
    boxSizing: 'border-box';
    width: number;
    height: number;
    transition: 'none';
    transform?: string;
    zIndex: number;
    opacity?: number;
    pointerEvents: 'none';
}

export interface DraggableProvidedDraggableProps {
    // inline style
    style?: DraggingStyle | NotDraggingStyle;
    // used for shared global styles
    'data-rbd-draggable-context-id': string;
    'data-rbd-draggable-id': string;
    onTransitionEnd?: React.TransitionEventHandler<any>;
}

export interface DraggableProvidedDragHandleProps {
    onMouseDown: React.MouseEventHandler<any>;
    onKeyDown: React.KeyboardEventHandler<any>;
    onTouchStart: React.TouchEventHandler<any>;
    'data-react-beautiful-dnd-drag-handle': string;
    'aria-roledescription': string;
    tabIndex: number;
    draggable: boolean;
    onDragStart: React.DragEventHandler<any>;
}

export interface DraggableProvided {
    // will be removed after move to react 16
    innerRef(element?: HTMLElement | null): any;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps?: DraggableProvidedDragHandleProps;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
    isDropAnimating: boolean;
    dropAnimation?: DropAnimation;
    draggingOver?: DroppableId;
    // the id of a draggable that you are combining with
    combineWith?: DraggableId;
    // a combine target is being dragged over by
    combineTargetFor?: DraggableId;
    // What type of movement is being done: 'FLUID' or 'SNAP'
    mode?: MovementMode;
}

export type DraggableChildrenFn = (
    provided: DraggableProvided,
    snapshot: DraggableStateSnapshot,
    rubric: DraggableRubric,
) => React.ReactElement<HTMLElement>;

export interface DraggableProps {
    draggableId: DraggableId;
    index: number;
    children: DraggableChildrenFn;
    isDragDisabled?: boolean;
    disableInteractiveElementBlocking?: boolean;
    shouldRespectForcePress?: boolean;
}

export class Draggable extends React.Component<DraggableProps> {}

export function resetServerContext(): void;
