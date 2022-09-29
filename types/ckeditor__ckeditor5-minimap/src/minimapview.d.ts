import { View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * The main view of the minimap. It renders the original content but scaled down with a tracker element
 * visualizing the subset of the content visible to the user and allowing interactions (scrolling, dragging).
 */
export default class MinimapView extends View {
    /**
     * Creates an instance of the minimap view.
     */
    constructor(options: {
        locale: Locale;
        scaleRatio: number;
        pageStyles: Array<string | { href: string }>;
        extraClasses?: string;
        useSimplePreview?: boolean;
        domRootClone: HTMLElement;
    });

    destroy(): void;

    /**
     * Returns the DOM {@link module:utils/dom/rect~Rect} height of the minimap.
     */
    readonly height: number;

    /**
     * Returns the number of available space (pixels) the position tracker (visible subset of the content) can use to scroll vertically.
     */
    readonly scrollHeight: number;

    render(): void;

    /**
     * Sets the new height of the minimap (in px) to respond to the changes in the original editing DOM root.
     *
     * **Note**:The provided value should be the `offsetHeight` of the original editing DOM root.
     */
    setContentHeight(newHeight: number): void;

    /**
     * Sets the minimap scroll progress.
     *
     * The minimap scroll progress is linked to the original editing DOM root and its scrollable container (ancestor).
     * Changing the progress will alter the vertical position of the minimap (and its position tracker) and give the user an accurate
     * overview of the visible document.
     *
     * **Note**: The value should be between 0 and 1. 0 when the DOM root has not been scrolled, 1 when the
     * scrolling has reached the end.
     */
    setScrollProgress(newScrollProgress: number): void;

    /**
     * Sets the new height of the tracker (in px) to visualize the subset of the content visible to the user.
     */
    setPositionTrackerHeight(trackerHeight: number): void;
}
