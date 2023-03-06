import { Rect } from '@ckeditor/ckeditor5-utils';
import { Options, Position } from '@ckeditor/ckeditor5-utils/src/dom/position';
import View from '../../view';
import ViewCollection from '../../viewcollection';

/**
 * The balloon panel view class.
 *
 * A floating container which can
 * {@link module:ui/panel/balloon/balloonpanelview~BalloonPanelView#pin pin} to any
 * {@link module:utils/dom/position~Options#target target} in the DOM and remain in that position
 * e.g. when the web page is scrolled.
 *
 * The balloon panel can be used to display contextual, non-blocking UI like forms, toolbars and
 * the like in its {@link module:ui/panel/balloon/balloonpanelview~BalloonPanelView#content} view
 * collection.
 *
 * There is a number of {@link module:ui/panel/balloon/balloonpanelview~BalloonPanelView.defaultPositions}
 * that the balloon can use, automatically switching from one to another when the viewport space becomes
 * scarce to keep the balloon visible to the user as long as it is possible. The balloon will also
 * accept any custom position set provided by the user compatible with the
 * {@link module:utils/dom/position~Options options}.
 *
 *    const panel = new BalloonPanelView( locale );
 *    const childView = new ChildView();
 *    const positions = BalloonPanelView.defaultPositions;
 *
 *    panel.render();
 *
 *    // Add a child view to the panel's content collection.
 *    panel.content.add( childView );
 *
 *    // Start pinning the panel to an element with the "target" id DOM.
 *    // The balloon will remain pinned until unpin() is called.
 *    panel.pin( {
 *      target: document.querySelector( '#target' ),
 *      positions: [
 *        positions.northArrowSouth,
 *        positions.southArrowNorth
 *      ]
 *    } );
 */
export default class BalloonPanelView extends View {
    /**
     * The absolute top position of the balloon panel in pixels.
     */
    get top(): number | undefined;
    protected set top(v: number | undefined);

    /**
     * The absolute left position of the balloon panel in pixels.
     */
    get left(): number | undefined;
    protected set left(v: number | undefined);

    /**
     * The balloon panel's current position. The position name is reflected in the CSS class set
     * to the balloon, i.e. `.ck-balloon-panel_arrow_nw` for the "arrow_nw" position. The class
     * controls the minor aspects of the balloon's visual appearance like the placement
     * of an {@link #withArrow arrow}. To support a new position, an additional CSS must be created.
     *
     * Default position names correspond with
     * {@link module:ui/panel/balloon/balloonpanelview~BalloonPanelView.defaultPositions}.
     *
     * See the {@link #attachTo} and {@link #pin} methods to learn about custom balloon positions.
     */
    get position(): 'arrow_nw' | 'arrow_ne' | 'arrow_sw' | 'arrow_se';
    protected set position(pos: 'arrow_nw' | 'arrow_ne' | 'arrow_sw' | 'arrow_se');

    /**
     * Controls whether the balloon panel is visible or not.
     */
    get isVisible(): boolean;
    protected set isVisible(val: boolean);

    /**
     * Controls whether the balloon panel has an arrow. The presence of the arrow
     * is reflected in the `ck-balloon-panel_with-arrow` CSS class.
     */
    get withArrow(): boolean;
    protected set withArrow(value: boolean);

    /**
     * An additional CSS class added to the {@link #element}.
     */
    get class(): string;
    protected set class(value: string);

    /**
     * A collection of the child views that creates the balloon panel contents.
     */
    readonly content: ViewCollection;

    show(): void;
    hide(): void;
    attachTo(options: Options): void;
    pin(options: Options): void;
    unpin(): void;

    static arrowHorizontalOffset: number;
    static arrowVerticalOffset: number;
    static stickyVerticalOffset: number;
    static defaultPositions: {
        northWestArrowSouthWest(targetRect: Rect, balloonReact: Rect): Position;
        northWestArrowSouthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
        northWestArrowSouth(targetRect: Rect, balloonReact: Rect): Position;
        northWestArrowSouthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        northWestArrowSouthEast(targetRect: Rect, balloonReact: Rect): Position;
        northArrowSouthWest(targetRect: Rect, balloonReact: Rect): Position;
        northArrowSouthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
        northArrowSouth(targetRect: Rect, balloonReact: Rect): Position;
        northArrowSouthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        northArrowSouthEast(targetRect: Rect, balloonReact: Rect): Position;
        northEastArrowSouthWest(targetRect: Rect, balloonReact: Rect): Position;
        northEastArrowSouthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
        northEastArrowSouth(targetRect: Rect, balloonReact: Rect): Position;
        northEastArrowSouthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        northEastArrowSouthEast(targetRect: Rect, balloonReact: Rect): Position;
        southArrowNorthWest(targetRect: Rect, balloonReact: Rect): Position;
        southArrowNorthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
        southArrowNorth(targetRect: Rect, balloonReact: Rect): Position;
        southArrowNorthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        southArrowNorthEast(targetRect: Rect, balloonReact: Rect): Position;
        southWestArrowNorthWest(targetRect: Rect, balloonReact: Rect): Position;
        southWestArrowNorthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
        southWestArrowNorth(targetRect: Rect, balloonReact: Rect): Position;
        southWestArrowNorthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        southWestArrowNorthEast(targetRect: Rect, balloonReact: Rect): Position;
        southEastArrowNorthWest(targetRect: Rect, balloonReact: Rect): Position;
        southEastArrowNorthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
        southEastArrowNorth(targetRect: Rect, balloonReact: Rect): Position;
        southEastArrowNorthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
        southEastArrowNorthEast(targetRect: Rect, balloonReact: Rect): Position;
    };
}

/**
 * Returns available {@link module:ui/panel/balloon/balloonpanelview~BalloonPanelView}
 * {@link module:utils/dom/position~positioningFunction positioning functions} adjusted by the specific offsets.
 *
 */
export function generatePositions(options?: {
    horizontalOffset?: number;
    verticalOffset?: number;
    stickyVerticalOffset?: number;
    config?: { withArrow?: boolean };
}): {
    northWestArrowSouthWest(targetRect: Rect, balloonReact: Rect): Position;
    northWestArrowSouthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
    northWestArrowSouth(targetRect: Rect, balloonReact: Rect): Position;
    northWestArrowSouthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
    northWestArrowSouthEast(targetRect: Rect, balloonReact: Rect): Position;
    northArrowSouthWest(targetRect: Rect, balloonReact: Rect): Position;
    northArrowSouthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
    northArrowSouth(targetRect: Rect, balloonReact: Rect): Position;
    northArrowSouthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
    northArrowSouthEast(targetRect: Rect, balloonReact: Rect): Position;
    northEastArrowSouthWest(targetRect: Rect, balloonReact: Rect): Position;
    northEastArrowSouthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
    northEastArrowSouth(targetRect: Rect, balloonReact: Rect): Position;
    northEastArrowSouthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
    northEastArrowSouthEast(targetRect: Rect, balloonReact: Rect): Position;
    southArrowNorthWest(targetRect: Rect, balloonReact: Rect): Position;
    southArrowNorthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
    southArrowNorth(targetRect: Rect, balloonReact: Rect): Position;
    southArrowNorthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
    southArrowNorthEast(targetRect: Rect, balloonReact: Rect): Position;
    southWestArrowNorthWest(targetRect: Rect, balloonReact: Rect): Position;
    southWestArrowNorthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
    southWestArrowNorth(targetRect: Rect, balloonReact: Rect): Position;
    southWestArrowNorthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
    southWestArrowNorthEast(targetRect: Rect, balloonReact: Rect): Position;
    southEastArrowNorthWest(targetRect: Rect, balloonReact: Rect): Position;
    southEastArrowNorthMiddleWest(targetRect: Rect, balloonReact: Rect): Position;
    southEastArrowNorth(targetRect: Rect, balloonReact: Rect): Position;
    southEastArrowNorthMiddleEast(targetRect: Rect, balloonReact: Rect): Position;
    southEastArrowNorthEast(targetRect: Rect, balloonReact: Rect): Position;
    southEastArrowNorthEast(targetRect: Rect, balloonReact: Rect): Position;
    viewportStickyNorth(targetRect: Rect, balloonReact: Rect): Position;
};
