declare module 'ol/interaction' {

  import Collection from 'ol/Collection';
  import Interaction from 'ol/interaction/Interaction';

  export { default as DoubleClickZoom } from 'ol/interaction/DoubleClickZoom';
  export { default as DragAndDrop } from 'ol/interaction/DragAndDrop';
  export { default as DragBox } from 'ol/interaction/DragBox';
  export { default as DragPan } from 'ol/interaction/DragPan';
  export { default as DragRotate } from 'ol/interaction/DragRotate';
  export { default as DragRotateAndZoom } from 'ol/interaction/DragRotateAndZoom';
  export { default as DragZoom } from 'ol/interaction/DragZoom';
  export { default as Draw } from 'ol/interaction/Draw';
  export { default as Extent } from 'ol/interaction/Extent';
  export { default as Interaction } from 'ol/interaction/Interaction';
  export { default as KeyboardPan } from 'ol/interaction/KeyboardPan';
  export { default as KeyboardZoom } from 'ol/interaction/KeyboardZoom';
  export { default as Modify } from 'ol/interaction/Modify';
  export { default as MouseWheelZoom } from 'ol/interaction/MouseWheelZoom';
  export { default as PinchRotate } from 'ol/interaction/PinchRotate';
  export { default as PinchZoom } from 'ol/interaction/PinchZoom';
  export { default as Pointer } from 'ol/interaction/Pointer';
  export { default as Select } from 'ol/interaction/Select';
  export { default as Snap } from 'ol/interaction/Snap';
  export { default as Translate } from 'ol/interaction/Translate';

  export function defaults(opt_options?: DefaultsOptions): Collection<Interaction>;

  export interface DefaultsOptions {
    altShiftDragRotate?: boolean;
    onFocusOnly?: boolean;
    constrainResolution?: boolean;
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

}
