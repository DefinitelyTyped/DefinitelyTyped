// Type definitions for react-grid-layout 1.1
// Project: https://github.com/STRML/react-grid-layout
// Definitions by: Andrew Birkholz <https://github.com/abirkholz>,
//                 Ali Taheri <https://github.com/alitaheri>,
//                 Zheyang Song <https://github.com/ZheyangSong>,
//                 Andrew Hathaway <https://github.com/andrewhathaway>
//                 Manav Mishra <https://github.com/manav-m>
//                 Alexey Fyodorov <https://github.com/al-fyodorov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export as namespace ReactGridLayout;
export = ReactGridLayout;

declare class ReactGridLayout extends React.Component<ReactGridLayout.ReactGridLayoutProps> {}

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

declare namespace ReactGridLayout {
    interface Layout {
        /**
         * A string corresponding to the component key.
         * Uses the index of components instead if not provided.
         */
        i: string;

        /**
         * X position in grid units.
         */
        x: number;

        /**
         * Y position in grid units.
         */
        y: number;

        /**
         * Width in grid units.
         */
        w: number;

        /**
         * Height in grid units.
         */
        h: number;

        /**
         * Minimum width in grid units.
         */
        minW?: number | undefined;

        /**
         * Maximum width in grid units.
         */
        maxW?: number | undefined;

        /**
         * Minimum height in grid units.
         */
        minH?: number | undefined;

        /**
         * Maximum height in grid units.
         */
        maxH?: number | undefined;

        /**
         * set by DragEvents (onDragStart, onDrag, onDragStop) and ResizeEvents (onResizeStart, onResize, onResizeStop)
         */
        moved?: boolean | undefined;

        /**
         * If true, equal to `isDraggable: false` and `isResizable: false`.
         */
        static?: boolean | undefined;

        /**
         * If false, will not be draggable. Overrides `static`.
         */
        isDraggable?: boolean | undefined;

        /**
         * If false, will not be resizable. Overrides `static`.
         */
        isResizable?: boolean | undefined;

        /**
         * By default, a handle is only shown on the bottom-right (southeast) corner.
         * Note that resizing from the top or left is generally not intuitive.
         */
        resizeHandles?: ResizeHandle[] | undefined;

        /**
         * If true and draggable, item will be moved only within grid.
         */
        isBounded?: boolean | undefined;
    }

    interface Layouts {
        [P: string]: Layout[];
    }

    type ItemCallback = (
        layout: Layout[],
        oldItem: Layout,
        newItem: Layout,
        placeholder: Layout,
        event: MouseEvent,
        element: HTMLElement,
    ) => void;

    interface CoreProps {
        /**
         * The classname to add to the root element.
         */
        className?: string | undefined;

        /**
         * Inline-style object to pass to the root element.
         */
        style?: React.CSSProperties | undefined;

        /**
         * If true, the container height swells and contracts to fit contents.
         */
        autoSize?: boolean | undefined;

        /**
         * A CSS selector for tags that will not be draggable.
         *
         * For example: `draggableCancel: '.MyNonDraggableAreaClassName'`
         *
         * If you forget the leading. it will not work.
         */
        draggableCancel?: string | undefined;

        /**
         * A CSS selector for tags that will act as the draggable handle.
         *
         * For example: `draggableHandle: '.MyDragHandleClassName'`
         *
         * If you forget the leading . it will not work.
         */
        draggableHandle?: string | undefined;

        /**
         * If true, the layout will compact vertically.
         */
        verticalCompact?: boolean | undefined;

        /**
         * Compaction type.
         */
        compactType?: 'vertical' | 'horizontal' | null | undefined;

        /**
         * This allows setting the initial width on the server side.
         * This is required unless using the HOC <WidthProvider> or similar.
         */
        width?: number | undefined;

        /**
         * Rows have a static height, but you can change this based on breakpoints if you like.
         */
        rowHeight?: number | undefined;

        /**
         * Configuration of a dropping element. Dropping element is a "virtual" element
         * which appears when you drag over some element from outside.
         */
        droppingItem?: {
            i: string;
            w: number;
            h: number;
        } | undefined;

        /**
         * If set to false it will disable dragging on all children.
         */
        isDraggable?: boolean | undefined;

        /**
         * If set to false it will disable resizing on all children.
         */
        isResizable?: boolean | undefined;

        /**
         * Defines which resize handles should be rendered
         * Allows for any combination of:
         * 's' - South handle (bottom-center)
         * 'w' - West handle (left-center)
         * 'e' - East handle (right-center)
         * 'n' - North handle (top-center)
         * 'sw' - Southwest handle (bottom-left)
         * 'nw' - Northwest handle (top-left)
         * 'se' - Southeast handle (bottom-right)
         * 'ne' - Northeast handle (top-right)
         */
        resizeHandles?: ResizeHandle[] | undefined;

        /**
         * Defines custom component for resize handle
         */
        resizeHandle?: React.ReactNode | ((resizeHandle: ResizeHandle) => React.ReactNode) | undefined;

        /**
         * If set to false it will not call `onDrop()` callback.
         */
        isDroppable?: boolean | undefined;

        /**
         * If true and draggable, all items will be moved only within grid.
         */
        isBounded?: boolean | undefined;

        /**
         * If true, grid items won't change position when being dragged over.
         */
        preventCollision?: boolean | undefined;

        /**
         * Uses CSS3 `translate()` instead of position top/left.
         * This makes about 6x faster paint performance.
         */
        useCSSTransforms?: boolean | undefined;

        /**
         * Default Infinity, but you can specify a max here if you like.
         * Note that this isn't fully fleshed out and won't error if you specify a layout that
         * extends beyond the row capacity. It will, however, not allow users to drag/resize
         * an item past the barrier. They can push items beyond the barrier, though.
         * Intentionally not documented for this reason.
         */
        maxRows?: number | undefined;

        /**
         * Scale coefficient for CSS3 `transform: scale()`
         */
        transformScale?: number | undefined;

        /**
         * Calls when drag starts.
         */
        onDragStart?: ItemCallback | undefined;

        /**
         * Calls on each drag movement.
         */
        onDrag?: ItemCallback | undefined;

        /**
         * Calls when drag is complete.
         */
        onDragStop?: ItemCallback | undefined;

        /**
         * Calls when resize starts.
         */
        onResizeStart?: ItemCallback | undefined;

        /**
         * Calls when resize movement happens.
         */
        onResize?: ItemCallback | undefined;

        /**
         * Calls when resize is complete.
         */
        onResizeStop?: ItemCallback | undefined;

        /**
         * Calls when some element has been dropped
         */
        onDrop?(layout: Layout[], item: Layout, e: Event): void;
    }

    interface ReactGridLayoutProps extends CoreProps {
        /**
         * Number of columns in this layout.
         */
        cols?: number | undefined;

        /**
         * Margin between items `[x, y]` in px.
         */
        margin?: [number, number] | undefined;

        /**
         * Padding inside the container `[x, y]` in px.
         */
        containerPadding?: [number, number] | undefined;

        /**
         * Layout is an array of object with the format:
         *
         * `{x: number, y: number, w: number, h: number}`
         *
         * The index into the layout must match the key used on each item component.
         * If you choose to use custom keys, you can specify that key in the layout
         * array objects like so:
         *
         * `{i: string, x: number, y: number, w: number, h: number}`
         *
         * If not provided, use data-grid props on children.
         */
        layout?: Layout[] | undefined;

        /**
         * Callback so you can save the layout.
         * Calls back with (currentLayout) after every drag or resize stop.
         */
        onLayoutChange?(layout: Layout[]): void;
    }

    interface ResponsiveProps extends CoreProps {
        /**
         * `{name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}`
         *
         * Breakpoint names are arbitrary but must match in the cols and layouts objects.
         */
        breakpoints?: { [P: string]: number } | undefined;

        /**
         * Number of cols. This is a breakpoint -> cols map, e.g. `{lg: 12, md: 10, ...}`.
         */
        cols?: { [P: string]: number } | undefined;

        /**
         * Margin between items in px and formatt [x, y] or { breakpoint: [x, y] }.
         */
        margin?: [number, number] | { [P: string]: [number, number] } | undefined;

        /**
         * Padding inside the container in px and formatt [x, y] or { breakpoint: [x, y] }.
         */
        containerPadding?: [number, number] | { [P: string]: [number, number] } | undefined;

        /**
         * layouts is an object mapping breakpoints to layouts.
         *
         * e.g. `{lg: Layout[], md: Layout[], ...}`
         */
        layouts?: Layouts | undefined;

        /**
         * Calls back with breakpoint and new number pf cols.
         */
        onBreakpointChange?(newBreakpoint: string, newCols: number): void;

        /**
         * Callback so you can save the layout.
         */
        onLayoutChange?(currentLayout: Layout[], allLayouts: Layouts): void;

        /**
         * Callback when the width changes, so you can modify the layout as needed.
         */
        onWidthChange?(
            containerWidth: number,
            margin: [number, number],
            cols: number,
            containerPadding: [number, number],
        ): void;
    }

    class Responsive extends React.Component<ResponsiveProps> {}

    interface WidthProviderProps {
        /**
         * If true, WidthProvider will measure the container's width before mounting children.
         * Use this if you'd like to completely eliminate any resizing animation on
         * application/component mount.
         */
        measureBeforeMount?: boolean | undefined;
    }

    function WidthProvider<P>(
        component: React.ComponentClass<P> | React.FunctionComponent<P>,
    ): React.ComponentClass<P & WidthProviderProps>;
}
