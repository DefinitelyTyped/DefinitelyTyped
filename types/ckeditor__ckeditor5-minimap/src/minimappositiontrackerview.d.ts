import { View } from '@ckeditor/ckeditor5-ui';

/**
 * The position tracker visualizing the visible subset of the content. Displayed over the minimap.
 */
export default class MinimapPositionTrackerView extends View {
    /**
     * The CSS `height` of the tracker visualizing the subset of the content visible to the user.
     */
    get height(): number;
    protected set height(value: number);
    /**
     * The CSS `top` of the tracker, used to move it vertically over the minimap.
     */
    get top(): number;
    protected set top(value: number);

    /**
     * The scroll progress (in %) displayed over the tracker when being dragged by the user.
     */
    get scrollProgress(): number;
    protected set scrollProgress(value: number);

    render(): void;

    /**
     * Sets the new height of the tracker to visualize the subset of the content visible to the user.
     */
    setHeight(newHeight: number): void;

    /**
     * Sets the top offset of the tracker to move it around vertically.
     */
    setTopOffset(newOffset: number): void;

    /**
     * Sets the scroll progress (in %) to inform the user using a label when the tracker is being dragged.
     */
    setScrollProgress(newProgress: number): void;
}
