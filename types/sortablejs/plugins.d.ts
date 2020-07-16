import * as Sortable from './index';
import { SortableEvent } from './index';

declare class SortablePlugin {}
declare class AutoScrollPlugin {}
declare class OnSpillPlugin {}
declare class MultiDragPlugin {}
declare class SwapPlugin {}

export interface AutoScrollOptions {
    /**
     *  Enable the plugin. Can be `HTMLElement`.
     */
    scroll?: boolean | HTMLElement;
    /**
     * if you have custom scrollbar scrollFn may be used for autoscrolling.
     */
    scrollFn?: (
        this: Sortable,
        offsetX: number,
        offsetY: number,
        originalEvent: Event,
        touchEvt: TouchEvent,
        hoverTargetEl: HTMLElement,
    ) => 'continue' | void;
    /**
     * `px`, how near the mouse must be to an edge to start scrolling.
     */
    scrollSensitivity?: number;
    /**
     * `px`, speed of the scrolling.`
     */
    scrollSpeed?: number;
    /**
     * apply autoscroll to all parent elements, allowing for easier movement.
     */
    bubbleScroll?: boolean;
}
export interface OnSpillOptions {
    /**
     * This plugin, when enabled,
     * will cause the dragged item to be reverted to it's original position if it is *spilled*
     * (ie. it is dropped outside of a valid Sortable drop target)
     */
    revertOnSpill?: boolean;
    /**
     * This plugin, when enabled,
     * will cause the dragged item to be removed from the DOM if it is *spilled*
     * (ie. it is dropped outside of a valid Sortable drop target)
     */
    removeOnSpill?: boolean;
    /**
     * Called when either `revertOnSpill` or `RemoveOnSpill` plugins are enabled.
     */
    onSpill?: (evt: SortableEvent) => void;
}
export interface MultiDragOptions {
    /**
     * Enable the plugin
     */
    multiDrag?: boolean;
    /**
     * Class name for selected item
     */
    selectedClass?: string;
    /**
     * Key that must be down for items to be selected
     */
    // todo: create a type
    // todo: check source code for type
    multiDragKey?: null;

    /**
     * Called when an item is selected
     */
    onSelect?: (event: SortableEvent) => void;

    /**
     * Called when an item is deselected
     */
    onDeselect?: (event: SortableEvent) => void;
}
export interface SwapOptions {
    /**
     * Enable swap mode
     */
    swap?: boolean;
    /**
     * Class name for swap item (if swap mode is enabled)
     */
    swapClass?: string;
}
