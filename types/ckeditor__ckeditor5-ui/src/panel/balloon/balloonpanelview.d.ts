import { Rect } from "@ckeditor/ckeditor5-utils";
import { Options, Position } from "@ckeditor/ckeditor5-utils/src/dom/position";
import View from "../../view";
import ViewCollection from "../../viewcollection";

export default class BalloonPanelView extends View {
    class: string;
    readonly content: ViewCollection;
    isVisible?: boolean;
    left?: number;
    position?: "arrow_nw" | "arrow_ne" | "arrow_sw" | "arrow_se";
    top?: number;
    withArrow?: boolean;

    static arrowHorizontalOffset?: number;
    static arrowVerticalOffset?: number;
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

    attachTo(options: Options): void;
    hide(): void;
    pin(options: Options): void;
    show(): void;
    unpin(): void;
}
