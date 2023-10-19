import * as React from "react";

export type Id = string;
export type DraggableId = Id;
export type DroppableId = Id;
export type TypeId = Id;
export type ZIndex = React.CSSProperties["zIndex"];
export type DropReason = "DROP" | "CANCEL";
export type Announce = (message: string) => void;

export interface DraggableLocation {
    droppableId: DroppableId;
    index: number;
}

export type MovementMode = "FLUID" | "SNAP";

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
    onBeforeDragStart?: OnBeforeDragStartResponder | undefined;
    onDragStart?: OnDragStartResponder | undefined;
    onDragUpdate?: OnDragUpdateResponder | undefined;
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
    destination?: DraggableLocation | null | undefined;
    // populated when a draggable is dragging over another in combine mode
    combine?: Combine | null | undefined;
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
    children?: React.ReactNode;
    onBeforeDragStart?(initial: DragStart): void;
    onDragStart?(initial: DragStart, provided: ResponderProvided): void;
    onDragUpdate?(initial: DragUpdate, provided: ResponderProvided): void;
    onDragEnd(result: DropResult, provided: ResponderProvided): void;
}

export class DragDropContext extends React.Component<DragDropContextProps> {}

/**
 *  Droppable
 */

export interface DroppableProvidedProps {
    // used for shared global styles
    "data-react-beautiful-dnd-droppable": string;
}
export interface DroppableProvided {
    innerRef(element: HTMLElement | null): any;
    placeholder?: React.ReactElement<HTMLElement> | null | undefined;
    droppableProps: DroppableProvidedProps;
}

export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
    draggingOverWith?: DraggableId | undefined;
    draggingFromThisWith?: DraggableId | undefined;
}

export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId | undefined;
    ignoreContainerClipping?: boolean | undefined;
    isDropDisabled?: boolean | undefined;
    isCombineEnabled?: boolean | undefined;
    direction?: "vertical" | "horizontal" | undefined;
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement<HTMLElement>;
}

export class Droppable extends React.Component<DroppableProps> {}

/**
 *  Draggable
 */

export interface NotDraggingStyle {
    transform?: string | undefined;
    transition?: "none" | undefined;
}

export interface DraggingStyle {
    pointerEvents: "none";
    position: "fixed";
    width: number;
    height: number;
    boxSizing: "border-box";
    top: number;
    left: number;
    margin: 0;
    transform?: string | undefined;
    transition: "none";
    zIndex: ZIndex;
}

export interface DraggableProvidedDraggableProps {
    // inline style
    style?: DraggingStyle | NotDraggingStyle | undefined;
    // used for shared global styles
    "data-react-beautiful-dnd-draggable": string;
}

export interface DraggableProvidedDragHandleProps {
    onMouseDown: React.MouseEventHandler<any>;
    onKeyDown: React.KeyboardEventHandler<any>;
    onTouchStart: React.TouchEventHandler<any>;
    onTouchMove: React.TouchEventHandler<any>;
    "data-react-beautiful-dnd-drag-handle": string;
    "aria-roledescription": string;
    tabIndex: number;
    "aria-grabbed": boolean;
    draggable: boolean;
    onDragStart: React.DragEventHandler<any>;
}

export interface DraggableProvided {
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null;

    // will be removed after move to react 16
    innerRef(element?: HTMLElement | null): any;
    placeholder?: React.ReactElement<HTMLElement> | null | undefined;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
    isDropAnimating: boolean;
    draggingOver?: DroppableId | undefined;
    dropAnimation?: DropAnimation | undefined;
    // the id of a draggable that you are combining with
    combineWith?: DraggableId | undefined;
    // a combine target is being dragged over by
    combineTargetFor?: DraggableId | undefined;
    // What type of movement is being done: 'FLUID' or 'SNAP'
    mode?: MovementMode | undefined;
}

export interface Position {
    x: number;
    y: number;
}

export interface DropAnimation {
    duration: number;
    curve: string;
    moveTo: Position;
    opacity?: number | undefined;
    scale?: number | undefined;
}

export interface DraggableProps {
    draggableId: DroppableId;
    index: number;
    isDragDisabled?: boolean | undefined;
    disableInteractiveElementBlocking?: boolean | undefined;
    children(provided: DraggableProvided, snapshot: DraggableStateSnapshot): React.ReactElement<HTMLElement>;
    type?: TypeId | undefined;
    shouldRespectForceTouch?: boolean | undefined;
}

export class Draggable extends React.Component<DraggableProps> {}
