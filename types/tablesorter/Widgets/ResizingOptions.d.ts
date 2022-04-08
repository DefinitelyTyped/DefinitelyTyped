/**
 * Provides options for the `resizable`-widget.
 */
export interface ResizingOptions {
    /**
     * A value indicating whether column widths are saved locally.
     */
    resizable?: boolean;

    /**
     * A value indicating whether the last column should have a resize-handle.
     */
    resizable_addLastColumn?: boolean;

    /**
     * A value indicating whether the user can resize the columns inside the footer.
     */
    resizable_includeFooter?: boolean;

    /**
     * A value indicating whether always the last column should shrink when resizing.
     */
    resizable_targetLast?: boolean;

    /**
     * The number of milliseconds to wait before raising the `mousemove`-event.
     */
    resizable_throttle?: boolean | number;

    /**
     * The initial widths of the columns.
     */
    resizable_widths?: string[];
}
