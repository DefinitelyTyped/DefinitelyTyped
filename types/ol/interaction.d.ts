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
    altShiftDragRotate?: boolean;
    onFocusOnly?: boolean;
    doubleClickZoom?: boolean;
    keyboard?: boolean;
    mouseWheelZoom?: boolean;
    shiftDragZoom?: boolean;
    dragPan?: boolean;
    pinchRotate?: boolean;
    pinchZoom?: boolean;
    zoomDelta?: number;
    zoomDuration?: number;
}
/**
 * Set of interactions included in maps by default. Specific interactions can be
 * excluded by setting the appropriate option to false in the constructor
 * options, but the order of the interactions is fixed.  If you want to specify
 * a different order for interactions, you will need to create your own
 * {@link module:ol/interaction/Interaction} instances and insert
 * them into a {@link module:ol/Collection} in the order you want
 * before creating your {@link module:ol/Map~Map} instance. Changing the order can
 * be of interest if the event propagation needs to be stopped at a point.
 * The default set of interactions, in sequence, is:
 *
 * {@link module:ol/interaction/DragRotate~DragRotate}
 * {@link module:ol/interaction/DoubleClickZoom~DoubleClickZoom}
 * {@link module:ol/interaction/DragPan~DragPan}
 * {@link module:ol/interaction/PinchRotate~PinchRotate}
 * {@link module:ol/interaction/PinchZoom~PinchZoom}
 * {@link module:ol/interaction/KeyboardPan~KeyboardPan}
 * {@link module:ol/interaction/KeyboardZoom~KeyboardZoom}
 * {@link module:ol/interaction/MouseWheelZoom~MouseWheelZoom}
 * {@link module:ol/interaction/DragZoom~DragZoom}
 *
 */
export function defaults(opt_options?: DefaultsOptions): Collection<Interaction>;
