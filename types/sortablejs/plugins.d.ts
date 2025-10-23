import * as Sortable from "./index";
import { SortableEvent } from "./index";

declare class SortablePlugin {}
declare class AutoScrollPlugin {}
declare class OnSpillPlugin {}
declare class MultiDragPlugin {}
declare class SwapPlugin {}

export interface AutoScrollOptions {
    /**
     *  Enable the plugin. Can be `HTMLElement`.
     */
    scroll?: boolean | HTMLElement | undefined;
    /**
     * force the autoscroll fallback to kick in
     */
    forceAutoScrollFallback?: boolean | undefined;
    /**
     * if you have custom scrollbar scrollFn may be used for autoscrolling.
     */
    scrollFn?:
        | ((
            this: Sortable,
            offsetX: number,
            offsetY: number,
            originalEvent: Event,
            touchEvt: TouchEvent,
            hoverTargetEl: HTMLElement,
            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        ) => "continue" | void)
        | undefined;
    /**
     * `px`, how near the mouse must be to an edge to start scrolling.
     */
    scrollSensitivity?: number | undefined;
    /**
     * `px`, speed of the scrolling.`
     */
    scrollSpeed?: number | undefined;
    /**
     * apply autoscroll to all parent elements, allowing for easier movement.
     */
    bubbleScroll?: boolean | undefined;
}
export interface OnSpillOptions {
    /**
     * This plugin, when enabled,
     * will cause the dragged item to be reverted to it's original position if it is *spilled*
     * (ie. it is dropped outside of a valid Sortable drop target)
     */
    revertOnSpill?: boolean | undefined;
    /**
     * This plugin, when enabled,
     * will cause the dragged item to be removed from the DOM if it is *spilled*
     * (ie. it is dropped outside of a valid Sortable drop target)
     */
    removeOnSpill?: boolean | undefined;
    /**
     * Called when either `revertOnSpill` or `RemoveOnSpill` plugins are enabled.
     */
    onSpill?: ((evt: SortableEvent) => void) | undefined;
}
export interface MultiDragOptions {
    /**
     * Enable the plugin
     */
    multiDrag?: boolean | undefined;
    /**
     * Class name for selected item
     */
    selectedClass?: string | undefined;
    /**
     * The key that must be down for multiple items to be selected.
     * The default is null, meaning no key must be down.
     * For special keys, such as the CTRL key,
     * simply specify the option as 'CTRL' (casing does not matter).
     */
    multiDragKey?: null | undefined | string;

    /**
     * If you don't want to deselect items on outside click
     */
    avoidImplicitDeselect?: boolean | undefined;

    /**
     * Called when an item is selected
     */
    onSelect?: ((event: SortableEvent) => void) | undefined;

    /**
     * Called when an item is deselected
     */
    onDeselect?: ((event: SortableEvent) => void) | undefined;
}
export interface SwapOptions {
    /**
     * Enable swap mode
     */
    swap?: boolean | undefined;
    /**
     * Class name for swap item (if swap mode is enabled)
     */
    swapClass?: string | undefined;
}
