// Type definitions for react-beautiful-dnd 4.0
// Project: https://github.com/atlassian/react-beautiful-dnd
// Definitions by: varHarrie <https://github.com/varHarrie>
//                 Bradley Ayers <https://github.com/bradleyayers>
//                 Edgar Simson <https://github.com/edzis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';

/**
 *  Components
 */

export class DragDropContext extends React.Component<
    DragDropContextInternalProps
> {}
export class Droppable extends React.Component<DroppableInternalProps> {}
export class Draggable extends React.Component<DraggableInternalProps> {}

/**
 *  Internal
 */

type ZIndex = number | string;

// interface DroppableDescriptor {
//     id: DroppableId;
//     type: TypeId;
// }

interface DraggableDescriptor {
    id: DraggableId;
    droppableId: DroppableId;
    index: number;
}

interface Position {
    x: number;
    y: number;
}

// Kept as a loose type so that functions can
// accept Spacing and receive an Area or a Spacing
interface Spacing {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

interface Area {
    top: number;
    right: number;
    bottom: number;
    left: number;
    // additions to Spacing
    width: number;
    height: number;
    center: Position;
}

type Direction = 'horizontal' | 'vertical';

interface Placeholder {
    // We apply the margin separately to maintain margin collapsing
    // behavior of the original element
    withoutMargin: {
        height: number;
        width: number;
    };
    margin: Spacing;
}

interface DraggableDimension {
    descriptor: DraggableDescriptor;
    // the placeholder for the draggable
    placeholder: Placeholder;
    // relative to the viewport when the drag started
    client: {
        withMargin: Area;
        withoutMargin: Area;
    };
    // relative to the whole page
    page: {
        withMargin: Area;
        withoutMargin: Area;
    };
}

interface Hooks {
    onDragStart?: (start: DragStart) => void;
    onDragEnd: (result: DropResult) => void;
}

/**
 *  DragDropContext_Props
 */

interface DragDropContextInternalProps extends Hooks {
    children?: React.ReactElement<any>;
}

/**
 *  Droppable_Props
 */
interface Droppable_MapProps {
    isDraggingOver?: boolean;
    // placeholder is used to hold space when
    // not the user is dragging over a list that
    // is not the source list
    placeholder?: Placeholder;
}

interface Droppable_OwnProps {
    children: (
        provided: DroppableProvided,
        snapshot: DroppableStateSnapshot
    ) => React.ReactNode;
    droppableId: DroppableId;
    type?: TypeId;
    isDropDisabled?: boolean;
    direction?: Direction;
    ignoreContainerClipping?: boolean;
}

type DroppableInternalProps = Droppable_OwnProps & Droppable_MapProps;

/**
 * Draggable_Props
 */
interface Draggable_MapProps {
    isDragging?: boolean;
    // whether or not a drag movement should be animated
    // used for dropping and keyboard dragging
    shouldAnimateDragMovement?: boolean;
    // when an item is being displaced by a dragging item,
    // we need to know if that movement should be animated
    shouldAnimateDisplacement?: boolean;
    // only provided when dragging
    // can be null if not over a droppable
    direction?: Direction;
    isDropAnimating?: boolean;
    offset?: Position;
    dimension?: DraggableDimension;
}

interface Draggable_OwnProps {
    draggableId: DraggableId;
    children: (
        provided: DraggableProvided,
        snapshot: DraggableStateSnapshot
    ) => React.ReactElement<any>;
    index: number;
    isDragDisabled?: boolean;
    disableInteractiveElementBlocking?: boolean;
}

// Draggable_DispatchProps not included - too hard to type
type DraggableInternalProps = Draggable_MapProps & Draggable_OwnProps;

/**
 *  Types
 */
export type Id = string;
export type TypeId = Id;
export type DraggableId = Id;
export type DroppableId = Id;

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

export interface DraggableLocation {
    droppableId: DroppableId;
    index: number;
}

/**
 *  Draggable
 */
export interface DraggingStyle {
    // `position: fixed` is used to ensure that the element is always positioned
    // in the correct position and ignores the surrounding position:relative parents
    position: 'fixed';

    // When we do `position: fixed` the element looses its normal dimensions,
    // especially if using flexbox. We set the width and height manually to
    // ensure the element has the same dimensions as before it started dragging
    width: number;
    height: number;

    // The width and height values take into account whether the original element
    // used `box-sizing: content-box` or `box-sizing: border-box`
    // Because we are setting the width and height directly we want to ensure that
    // these are the actual values applied
    boxSizing: 'border-box';

    // We initially position the element in the same *visual spot* as when it started.
    // This means that these values *exclude* the original margins so that element remains
    // in the same visual position - even though now it has no margins
    top: number;
    left: number;

    // We clear any top or left margins on the element to ensure it does not push
    // the element positioned with the top/left position (which is margin aware).
    // We also clear the margin right / bottom. This has no positioning impact,
    // but it is cleanest to just remove all the margins rather than only the top and left.
    margin: 0;

    // We need to opt out of the shared global style that is being applied to
    // all draggables. The movement of moving draggables is either not animated
    // or handled by react-motion.
    transition: 'none';

    // Move the element in response to a user dragging
    transform?: string;

    // When dragging or dropping we control the z-index to ensure that
    // the layering is correct
    zIndex: ZIndex;
}

export interface NotDraggingStyle {
    transform?: string;
    // null: use the global animation style
    // none: skip animation (used in certain displacement situations)
    transition: null | 'none';
}

export type DraggableStyle = DraggingStyle | NotDraggingStyle;

// Props that can be spread onto the element directly
export interface DraggableProps {
    // inline style
    style?: DraggableStyle;
    // used for shared global styles
    'data-react-beautiful-dnd-draggable': string;
}

export interface DraggableProvided {
    draggableProps: DraggableProps;
    // will be null if the draggable is disabled
    dragHandleProps?: DragHandleProps;
    // The following props will be removed once we move to react 16
    innerRef(element?: HTMLElement | null): void;
    placeholder?: Node;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
}

/**
 *  Droppable
 */
export interface DroppableProvided {
    innerRef(element?: HTMLElement | null): void;
    placeholder?: React.ReactNode;
}

export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
}

/**
 *  DragHandle
 */
export interface DragHandleProps {
    onMouseDown: React.MouseEventHandler<any>;
    onKeyDown: React.KeyboardEventHandler<any>;
    onTouchStart: React.TouchEventHandler<any>;
    onTouchMove: React.TouchEventHandler<any>;

    // Conditionally block clicks
    onClick: React.MouseEventHandler<any>;

    // Control styling from style marshal
    'data-react-beautiful-dnd-drag-handle': string;

    // Allow tabbing to this element
    tabIndex: number;

    // Aria
    'aria-grabbed': boolean;

    // Stop html5 drag and drop
    draggable: boolean;
    onDragStart: () => boolean;
    onDrop: () => boolean;
}
