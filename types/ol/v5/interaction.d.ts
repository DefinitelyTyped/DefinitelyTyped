import Collection from './Collection';
import Interaction from './interaction/Interaction';

export { default as DoubleClickZoom } from './interaction/DoubleClickZoom';
export { default as DragAndDrop } from './interaction/DragAndDrop';
export { default as DragBox } from './interaction/DragBox';
export { default as DragPan } from './interaction/DragPan';
export { default as DragRotate } from './interaction/DragRotate';
export { default as DragRotateAndZoom } from './interaction/DragRotateAndZoom';
export { default as DragZoom } from './interaction/DragZoom';
export { default as Draw } from './interaction/Draw';
export { default as Extent } from './interaction/Extent';
export { default as Interaction } from './interaction/Interaction';
export { default as KeyboardPan } from './interaction/KeyboardPan';
export { default as KeyboardZoom } from './interaction/KeyboardZoom';
export { default as Modify } from './interaction/Modify';
export { default as MouseWheelZoom } from './interaction/MouseWheelZoom';
export { default as PinchRotate } from './interaction/PinchRotate';
export { default as PinchZoom } from './interaction/PinchZoom';
export { default as Pointer } from './interaction/Pointer';
export { default as Select } from './interaction/Select';
export { default as Snap } from './interaction/Snap';
export { default as Translate } from './interaction/Translate';

export interface DefaultsOptions {
    altShiftDragRotate?: boolean | undefined;
    onFocusOnly?: boolean | undefined;
    constrainResolution?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    keyboard?: boolean | undefined;
    mouseWheelZoom?: boolean | undefined;
    shiftDragZoom?: boolean | undefined;
    dragPan?: boolean | undefined;
    pinchRotate?: boolean | undefined;
    pinchZoom?: boolean | undefined;
    zoomDelta?: number | undefined;
    zoomDuration?: number | undefined;
}
export function defaults(opt_options?: DefaultsOptions): Collection<Interaction>;
