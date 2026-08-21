import * as React from "react";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Position {
    x: number;
    y: number;
}

export interface BoxModel {
    // content + padding + border + margin
    marginBox: Rect;
    // content + padding + border
    borderBox: Rect;
    // content + padding
    paddingBox: Rect;
    // content
    contentBox: Rect;
    // for your own consumption
    border: Spacing;
    padding: Spacing;
    margin: Spacing;
}

// This is an extension of DOMRect and ClientRect
export interface Rect {
    // ClientRect
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
    // DOMRect
    x: number;
    y: number;
    // Rect
    center: Position;
}

export interface Spacing {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

/**
 * IDs
 */

export type Id = string;
export type DraggableId = Id;
export type DroppableId = Id;
export type TypeId = Id;
export type ContextId = Id;
export type ElementId = Id;

export type DroppableMode = "standard" | "virtual";

export interface DroppableDescriptor {
    id: DroppableId;
    type: TypeId;
    mode: DroppableMode;
}

export interface DraggableDescriptor {
    id: DraggableId;
    index: number;
    // Inherited from Droppable
    droppableId: DroppableId;
    // This is technically redundant but it avoids
    // needing to look up a parent droppable just to get its type
    type: TypeId;
}

export interface DraggableOptions {
    canDragInteractiveElements: boolean;
    shouldRespectForcePress: boolean;
    isEnabled: boolean;
}

export type Direction = "horizontal" | "vertical";

export interface VerticalAxis {
    direction: "vertical";
    line: "y";
    start: "top";
    end: "bottom";
    size: "height";
    crossAxisLine: "x";
    crossAxisStart: "left";
    crossAxisEnd: "right";
    crossAxisSize: "width";
}

export interface HorizontalAxis {
    direction: "horizontal";
    line: "x";
    start: "left";
    end: "right";
    size: "width";
    crossAxisLine: "y";
    crossAxisStart: "top";
    crossAxisEnd: "bottom";
    crossAxisSize: "height";
}

export type Axis = VerticalAxis | HorizontalAxis;

export interface ScrollSize {
    scrollHeight: number;
    scrollWidth: number;
}

export interface ScrollDifference {
    value: Position;
    // The actual displacement as a result of a scroll is in the opposite
    // direction to the scroll itself. When scrolling down items are displaced
    // upwards. This value is the negated version of the 'value'
    displacement: Position;
}

export interface ScrollDetails {
    initial: Position;
    current: Position;
    // the maximum allowable scroll for the frame
    max: Position;
    diff: ScrollDifference;
}

export interface Placeholder {
    client: BoxModel;
    tagName: string;
    display: string;
}

export interface DraggableDimension {
    descriptor: DraggableDescriptor;
    // the placeholder for the draggable
    placeholder: Placeholder;
    // relative to the viewport when the drag started
    client: BoxModel;
    // relative to the whole page
    page: BoxModel;
    // how much displacement the draggable causes
    // this is the size of the marginBox
    displaceBy: Position;
}

export interface Scrollable {
    // This is the window through which the droppable is observed
    // It does not change during a drag
    pageMarginBox: Rect;
    // Used for comparision with dynamic recollecting
    frameClient: BoxModel;
    scrollSize: ScrollSize;
    // Whether or not we should clip the subject by the frame
    // Is controlled by the ignoreContainerClipping prop
    shouldClipSubject: boolean;
    scroll: ScrollDetails;
}

export interface PlaceholderInSubject {
    // might not actually be increased by
    // placeholder if there is no required space
    increasedBy: Position | null | undefined;
    placeholderSize: Position;
    // max scroll before placeholder added
    // will be null if there was no frame
    oldFrameMaxScroll: Position | null | undefined;
}

export interface DroppableSubject {
    // raw, unchanging
    page: BoxModel;
    withPlaceholder: PlaceholderInSubject | null | undefined;
    // The hitbox for a droppable
    // - page margin box
    // - with scroll changes
    // - with any additional droppable placeholder
    // - clipped by frame
    // The subject will be null if the hit area is completely empty
    active: Rect | null | undefined;
}

export interface DroppableDimension {
    descriptor: DroppableDescriptor;
    axis: Axis;
    isEnabled: boolean;
    isCombineEnabled: boolean;
    // relative to the current viewport
    client: BoxModel;
    // relative to the whole page
    isFixedOnPage: boolean;
    // relative to the page
    page: BoxModel;
    // The container of the droppable
    frame: Scrollable | null | undefined;
    // what is visible through the frame
    subject: DroppableSubject;
}

export interface DraggableLocation {
    droppableId: DroppableId;
    index: number;
}

export interface DraggableIdMap {
    [id: string]: true;
}

export interface DroppableIdMap {
    [id: string]: true;
}

export interface DraggableDimensionMap {
    [key: string]: DraggableDimension;
}
export interface DroppableDimensionMap {
    [key: string]: DroppableDimension;
}

export interface Displacement {
    draggableId: DraggableId;
    shouldAnimate: boolean;
}

export interface DisplacementMap {
    [key: string]: Displacement;
}

export interface DisplacedBy {
    value: number;
    point: Position;
}

// details of the item that is being combined with
export interface Combine {
    draggableId: DraggableId;
    droppableId: DroppableId;
}

export interface DisplacementGroups {
    all: DraggableId[];
    visible: DisplacementMap;
    invisible: DraggableIdMap;
}

export interface ReorderImpact {
    type: "REORDER";
    destination: DraggableLocation;
}

export interface CombineImpact {
    type: "COMBINE";
    combine: Combine;
}

export type ImpactLocation = ReorderImpact | CombineImpact;

export interface Displaced {
    forwards: DisplacementGroups;
    backwards: DisplacementGroups;
}

export interface DragImpact {
    displaced: DisplacementGroups;
    displacedBy: DisplacedBy;
    at: ImpactLocation | null | undefined;
}

export interface ClientPositions {
    // where the user initially selected
    // This point is not used to calculate the impact of a dragging item
    // It is used to calculate the offset from the initial selection point
    selection: Position;
    // the current center of the item
    borderBoxCenter: Position;
    // how far the item has moved from its original position
    offset: Position;
}

export interface PagePositions {
    selection: Position;
    borderBoxCenter: Position;
    // how much the page position has changed from the initial
    offset: Position;
}

// There are two seperate modes that a drag can be in
// FLUID: everything is done in response to highly granular input (eg mouse)
// SNAP: items move in response to commands (eg keyboard);
export type MovementMode = "FLUID" | "SNAP";

export interface DragPositions {
    client: ClientPositions;
    page: PagePositions;
}

export interface DraggableRubric {
    draggableId: DraggableId;
    type: TypeId;
    source: DraggableLocation;
}

// Published in onBeforeCapture
// We cannot give more information as things might change in the
// onBeforeCapture responder!
export interface BeforeCapture {
    draggableId: DraggableId;
    mode: MovementMode;
}

// published when a drag starts
export interface DragStart extends DraggableRubric {
    mode: MovementMode;
}

export interface DragUpdate extends DragStart {
    // may not have any destination (drag to nowhere)
    destination: DraggableLocation | null | undefined;
    // populated when a draggable is dragging over another in combine mode
    combine: Combine | null | undefined;
}

export type DropReason = "DROP" | "CANCEL";

export interface DropResult extends DragUpdate {
    reason: DropReason;
}

export interface ScrollOptions {
    shouldPublishImmediately: boolean;
}

// using the draggable id rather than the descriptor as the descriptor
// may change as a result of the initial flush. This means that the lift
// descriptor may not be the same as the actual descriptor. To avoid
// confusion the request is just an id which is looked up
// in the dimension-marshal post-flush
// Not including droppableId as it might change in a drop flush
export interface LiftRequest {
    draggableId: DraggableId;
    scrollOptions: ScrollOptions;
}

export interface Critical {
    draggable: DraggableDescriptor;
    droppable: DroppableDescriptor;
}

export interface Viewport {
    // live updates with the latest values
    frame: Rect;
    scroll: ScrollDetails;
}

export interface LiftEffect {
    inVirtualList: boolean;
    effected: DraggableIdMap;
    displacedBy: DisplacedBy;
}

export interface DimensionMap {
    draggables: DraggableDimensionMap;
    droppables: DroppableDimensionMap;
}

export interface DroppablePublish {
    droppableId: DroppableId;
    scroll: Position;
}

export interface Published {
    additions: DraggableDimension[];
    removals: DraggableId[];
    modified: DroppablePublish[];
}

export interface CompletedDrag {
    critical: Critical;
    result: DropResult;
    impact: DragImpact;
    afterCritical: LiftEffect;
}

export interface IdleState {
    phase: "IDLE";
    completed: CompletedDrag | null | undefined;
    shouldFlush: boolean;
}

export interface DraggingState {
    phase: "DRAGGING";
    isDragging: true;
    critical: Critical;
    movementMode: MovementMode;
    dimensions: DimensionMap;
    initial: DragPositions;
    current: DragPositions;
    impact: DragImpact;
    viewport: Viewport;
    afterCritical: LiftEffect;
    onLiftImpact: DragImpact;
    // when there is a fixed list we want to opt out of this behaviour
    isWindowScrollAllowed: boolean;
    // if we need to jump the scroll (keyboard dragging)
    scrollJumpRequest: Position | null | undefined;
    // whether or not draggable movements should be animated
    forceShouldAnimate: boolean | null | undefined;
}

// While dragging we can enter into a bulk collection phase
// During this phase no drag updates are permitted.
// If a drop occurs during this phase, it must wait until it is
// completed before continuing with the drop
// TODO: rename to BulkCollectingState
export interface CollectingState extends Omit<DraggingState, "phase"> {
    phase: "COLLECTING";
}

// If a drop action occurs during a bulk collection we need to
// wait for the collection to finish before performing the drop.
// This is to ensure that everything has the correct index after
// a drop
export interface DropPendingState extends Omit<DraggingState, "phase"> {
    phase: "DROP_PENDING";
    isWaiting: boolean;
    reason: DropReason;
}

// An optional phase for animating the drop / cancel if it is needed
export interface DropAnimatingState {
    phase: "DROP_ANIMATING";
    completed: CompletedDrag;
    newHomeClientOffset: Position;
    dropDuration: number;
    // We still need to render placeholders and fix the dimensions of the dragging item
    dimensions: DimensionMap;
}

export type State = IdleState | DraggingState | CollectingState | DropPendingState | DropAnimatingState;

export type StateWhenUpdatesAllowed = DraggingState | CollectingState;

export type Announce = (message: string) => void;

export type InOutAnimationMode = "none" | "open" | "close";

export interface ResponderProvided {
    announce: Announce;
}

export type OnBeforeCaptureResponder = (before: BeforeCapture) => void;

export type OnBeforeDragStartResponder = (start: DragStart) => void;

export type OnDragStartResponder = (start: DragStart, provided: ResponderProvided) => void;

export type OnDragUpdateResponder = (update: DragUpdate, provided: ResponderProvided) => void;

export type OnDragEndResponder = (result: DropResult, provided: ResponderProvided) => void;

export interface Responders {
    onBeforeCapture?: OnBeforeCaptureResponder | undefined;
    onBeforeDragStart?: OnBeforeDragStartResponder | undefined;
    onDragStart?: OnDragStartResponder | undefined;
    onDragUpdate?: OnDragUpdateResponder | undefined;
    // always required
    onDragEnd: OnDragEndResponder;
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

export interface TryGetLockOptions {
    sourceEvent?: Event | undefined;
}

export type TryGetLock = (
    draggableId: DraggableId,
    forceStop?: () => void,
    options?: TryGetLockOptions,
) => PreDragActions | null;

export interface SensorAPI {
    tryGetLock: TryGetLock;
    canGetLock: (id: DraggableId) => boolean;
    isLockClaimed: () => boolean;
    tryReleaseLock: () => void;
    findClosestDraggableId: (event: Event) => DraggableId | null;
    findOptionsForDraggable: (id: DraggableId) => DraggableOptions | null;
}

export type Sensor = (api: SensorAPI) => void;

/**
 *  DragDropContext
 */

// Refer to https://github.com/atlassian/react-beautiful-dnd/blob/master/src/view/drag-drop-context/drag-drop-context.jsx

export interface DragDropContextProps extends Responders {
    children: React.ReactNode | null;
    dragHandleUsageInstructions?: string | undefined;
    nonce?: string | undefined;
    enableDefaultSensors?: boolean | undefined;
    sensors?: Sensor[] | undefined;
}

export class DragDropContext extends React.Component<DragDropContextProps> {}

/**
 *  Droppable
 */

// Refer to https://github.com/atlassian/react-beautiful-dnd/blob/master/src/view/droppable/droppable-types.js

export interface DroppableProvidedProps {
    // used for shared global styles
    "data-rbd-droppable-context-id": ContextId;
    // Used to lookup. Currently not used for drag and drop lifecycle
    "data-rbd-droppable-id": DroppableId;
}

export interface DroppableProvided {
    innerRef: (element: HTMLElement | null) => void;
    placeholder: React.ReactNode;
    droppableProps: DroppableProvidedProps;
}

export interface DroppableStateSnapshot {
    isDraggingOver: boolean;
    draggingOverWith: DraggableId | null | undefined;
    draggingFromThisWith: DraggableId | null | undefined;
    isUsingPlaceholder: boolean;
}

export interface DroppableProps {
    droppableId: DroppableId;
    type?: TypeId | undefined;
    mode?: DroppableMode | undefined;
    isDropDisabled?: boolean | undefined;
    isCombineEnabled?: boolean | undefined;
    direction?: Direction | undefined;
    ignoreContainerClipping?: boolean | undefined;
    renderClone?: DraggableChildrenFn | undefined;
    getContainerForClone?: (() => HTMLElement) | undefined;
    children(provided: DroppableProvided, snapshot: DroppableStateSnapshot): React.ReactElement<HTMLElement>;
}

export class Droppable extends React.Component<DroppableProps> {}

/**
 *  Draggable
 */

// Refer to https://github.com/atlassian/react-beautiful-dnd/blob/master/src/view/draggable/draggable-types.js

export interface DropAnimation {
    duration: number;
    curve: string;
    moveTo: Position;
    /**
     * This value will actually be `null` instead of `undefined`.
     *
     * The type is fudged because `null` is not compatible with the
     * `React.CSSProperties` type.
     *
     * The `style` prop should interpret `null` and `undefined` the same way.
     */
    opacity: number | undefined;
    /**
     * This value will actually be `null` instead of `undefined`.
     *
     * The type is fudged because `null` is not compatible with the
     * `React.CSSProperties` type.
     *
     * The `style` prop should interpret `null` and `undefined` the same way.
     */
    scale: number | undefined;
}

export interface NotDraggingStyle {
    /**
     * This value will actually be `null` instead of `undefined`.
     *
     * The type is fudged because `null` is not compatible with the
     * `React.CSSProperties` type.
     *
     * The `style` prop should interpret `null` and `undefined` the same way.
     */
    transform: string | undefined;
    /**
     * This value will actually be `null` instead of `undefined`.
     *
     * The type is fudged because `null` is not compatible with the
     * `React.CSSProperties` type.
     *
     * The `style` prop should interpret `null` and `undefined` the same way.
     */
    transition: "none" | undefined;
}

export interface DraggingStyle {
    position: "fixed";
    top: number;
    left: number;
    boxSizing: "border-box";
    width: number;
    height: number;
    transition: string;
    /**
     * This value will actually be `null` instead of `undefined`.
     *
     * The type is fudged because `null` is not compatible with the
     * `React.CSSProperties` type.
     *
     * The `style` prop should interpret `null` and `undefined` the same way.
     */
    transform: string | undefined;
    zIndex: number;
    /**
     * This value will actually be `null` instead of `undefined`.
     *
     * The type is fudged because `null` is not compatible with the
     * `React.CSSProperties` type.
     *
     * The `style` prop should interpret `null` and `undefined` the same way.
     */
    opacity: number | undefined;
    pointerEvents: "none";
}

export interface DraggableProvidedDraggableProps {
    // inline style
    style?: DraggingStyle | NotDraggingStyle | undefined;
    // used for shared global styles
    "data-rbd-draggable-context-id": string;
    "data-rbd-draggable-id": string;
    onTransitionEnd?: React.TransitionEventHandler<any> | undefined;
}

export interface DraggableProvidedDragHandleProps {
    "data-rbd-drag-handle-draggable-id": DraggableId;
    "data-rbd-drag-handle-context-id": ContextId;
    "aria-describedby": ElementId;

    role: string;
    tabIndex: number;
    draggable: boolean;
    onDragStart: React.DragEventHandler<any>;
}

export interface DraggableProvided {
    // will be removed after move to react 16
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

export interface DraggableStateSnapshot {
    isDragging: boolean;
    isDropAnimating: boolean;
    isClone: boolean;
    dropAnimation: DropAnimation | null | undefined;
    draggingOver: DroppableId | null | undefined;
    // the id of a draggable that you are combining with
    combineWith: DraggableId | null | undefined;
    // a combine target is being dragged over by
    combineTargetFor: DraggableId | null | undefined;
    // What type of movement is being done: 'FLUID' or 'SNAP'
    mode: MovementMode | null | undefined;
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
    isDragDisabled?: boolean | undefined;
    disableInteractiveElementBlocking?: boolean | undefined;
    shouldRespectForcePress?: boolean | undefined;
}

export class Draggable extends React.Component<DraggableProps> {}

export function resetServerContext(): void;

export const useMouseSensor: Sensor;
export const useTouchSensor: Sensor;
export const useKeyboardSensor: Sensor;
