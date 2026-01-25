import type { AllowedComponentProps, App, ComponentCustomProps, DefineComponent, VNodeProps } from "vue";

export type AxisType = "both" | "x" | "y";
export type HandleType = "bl" | "bm" | "br" | "ml" | "mr" | "tl" | "tm" | "tr";

export interface VueDraggableResizableProps {
    /**
     * Whether the component is active (selected)
     * @default false
     */
    active?: boolean;
    /**
     * Restrict drag/resize to a specific axis
     * @default 'both'
     */
    axis?: AxisType;
    /**
     * Base class name for the component
     * @default 'vdr'
     */
    className?: string;
    /**
     * Class added when component is active
     * @default 'active'
     */
    classNameActive?: string;
    /**
     * Class added when component is draggable
     * @default 'draggable'
     */
    classNameDraggable?: string;
    /**
     * Class added during dragging
     * @default 'dragging'
     */
    classNameDragging?: string;
    /**
     * Common class for resize handles
     * @default 'handle'
     */
    classNameHandle?: string;
    /**
     * Class added when component is resizable
     * @default 'resizable'
     */
    classNameResizable?: string;
    /**
     * Class added during resizing
     * @default 'resizing'
     */
    classNameResizing?: string;
    /**
     * Disable text selection during drag/resize
     * @default true
     */
    disableUserSelect?: boolean;
    /**
     * CSS selector for elements that should cancel drag
     */
    dragCancel?: string | null;
    /**
     * Whether the component can be dragged
     * @default true
     */
    draggable?: boolean;
    /**
     * CSS selector for drag handle element
     */
    dragHandle?: string | null;
    /**
     * Enable native HTML5 drag and drop
     * @default false
     */
    enableNativeDrag?: boolean;
    /**
     * Snap grid [x, y]
     * @default [1, 1]
     */
    grid?: [number, number];
    /**
     * Initial height (number in px or 'auto')
     * @default 200
     */
    h?: number | "auto";
    /**
     * Which resize handles to show
     * @default ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
     */
    handles?: HandleType[];
    /**
     * Lock aspect ratio during resize
     * @default false
     */
    lockAspectRatio?: boolean;
    /**
     * Maximum height constraint
     * @default null
     */
    maxHeight?: number | null;
    /**
     * Maximum width constraint
     * @default null
     */
    maxWidth?: number | null;
    /**
     * Minimum height constraint
     * @default 0
     */
    minHeight?: number;
    /**
     * Minimum width constraint
     * @default 0
     */
    minWidth?: number;
    /**
     * Called during drag, return false to cancel
     * @default () => true
     */
    onDrag?: (x: number, y: number) => boolean | void;
    /**
     * Called when drag starts, return false to cancel
     * @default () => true
     */
    onDragStart?: (x: number, y: number) => boolean | void;
    /**
     * Called when drag stops
     */
    onDragStop?: (x: number, y: number) => void;
    /**
     * Called during resize, return false to cancel
     * @default () => true
     */
    onResize?: (handle: HandleType, x: number, y: number, width: number, height: number) => boolean | void;
    /**
     * Called when resize starts, return false to cancel
     * @default () => true
     */
    onResizeStart?: (handle: HandleType, x: number, y: number, width: number, height: number) => boolean | void;
    /**
     * Called when resize stops
     */
    onResizeStop?: (x: number, y: number, width: number, height: number) => void;
    /**
     * Constrain movement/resize to parent element
     * @default false
     */
    parent?: boolean;
    /**
     * Prevent deactivation when clicking outside
     * @default false
     */
    preventDeactivation?: boolean;
    /**
     * Whether the component can be resized
     * @default true
     */
    resizable?: boolean;
    /**
     * Scale factor for CSS transforms (number or [scaleX, scaleY])
     * @default 1
     */
    scale?: number | [number, number];
    /**
     * Initial width (number in px or 'auto')
     * @default 200
     */
    w?: number | "auto";
    /**
     * Initial X position
     * @default 0
     */
    x?: number;
    /**
     * Initial Y position
     * @default 0
     */
    y?: number;
    /**
     * Z-index value
     * @default 'auto'
     */
    z?: number | "auto";
}

export interface VueDraggableResizableEmits {
    /** Emitted when component becomes active */
    (event: "activated"): void;
    /** Emitted when component becomes inactive */
    (event: "deactivated"): void;
    /** Emitted when drag ends */
    (event: "drag-stop", left: number, top: number): void;
    /** Emitted during drag movement */
    (event: "dragging", left: number, top: number): void;
    /** Emitted when resize ends */
    (event: "resize-stop", left: number, top: number, width: number, height: number): void;
    /** Emitted during resize */
    (event: "resizing", left: number, top: number, width: number, height: number): void;
    /** Two-way binding for active prop */
    (event: "update:active", value: boolean): void;
    /** Two-way binding for h prop */
    (event: "update:h", value: number): void;
    /** Two-way binding for w prop */
    (event: "update:w", value: number): void;
    /** Two-way binding for x prop */
    (event: "update:x", value: number): void;
    /** Two-way binding for y prop */
    (event: "update:y", value: number): void;
}

export interface VueDraggableResizableSlots {
    /** Default slot for component content */
    default?: () => VNodeProps[];
}

type VueDraggableResizableComponent = DefineComponent<
    VueDraggableResizableProps,
    Record<string, never>,
    Record<string, never>,
    Record<string, never>,
    Record<string, never>,
    Record<string, never>,
    Record<string, never>,
    VueDraggableResizableEmits
> &
    AllowedComponentProps &
    ComponentCustomProps;

declare const VueDraggableResizable: VueDraggableResizableComponent;

/** Vue plugin install function */
export function install(app: App): void;

export default VueDraggableResizable;
