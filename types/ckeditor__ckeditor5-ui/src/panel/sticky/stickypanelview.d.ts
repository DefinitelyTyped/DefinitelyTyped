import ViewCollection from '../../viewcollection';

export default class StickyPanelView {
    get isActive(): boolean;
    protected set isActive(value: boolean);
    get isSticky(): boolean;
    protected set isSticky(value: boolean);
    get limiterElement(): HTMLElement | null;
    protected set limiterElement(value: HTMLElement | null);
    get limiterBottomOffset(): number;
    protected set limiterBottomOffset(value: number);
    get viewportTopOffset(): number;
    protected set viewportTopOffset(value: number);
    readonly content: ViewCollection;
}
