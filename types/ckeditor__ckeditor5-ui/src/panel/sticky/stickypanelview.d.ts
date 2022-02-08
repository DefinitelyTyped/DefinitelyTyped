import ViewCollection from "../../viewcollection";

export default class StickyPanelView {
    readonly content: ViewCollection;
    readonly isActive: boolean;
    readonly isSticky: boolean;
    readonly limiterBottomOffset: number;
    readonly limiterElement: HTMLElement;
    readonly viewportTopOffset: number;
}
