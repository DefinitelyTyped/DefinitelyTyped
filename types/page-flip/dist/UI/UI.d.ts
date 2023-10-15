import { Point } from "../BasicTypes";
import { PageFlip } from "../PageFlip";
import { Orientation } from "../Render/Render";
import { FlipSetting } from "../Settings";
export interface SwipeData {
    point: Point;
    time: number;
}
/**
 * UI Class, represents work with DOM
 */
export abstract class UI {
    protected readonly app: PageFlip;
    protected readonly wrapper: HTMLElement;
    protected distElement: HTMLElement;
    private touchPoint;
    private readonly swipeTimeout;
    private readonly swipeDistance;
    private onResize;

    protected constructor(inBlock: HTMLElement, app: PageFlip, setting: FlipSetting);
    /**
     * Destructor. Remove all HTML elements and all event handlers
     */
    destroy(): void;
    /**
     * Updating child components when resizing
     */
    abstract update(): void;
    /**
     * Get parent element for book
     */
    getDistElement(): HTMLElement;
    /**
     * Get wrapper element
     */
    getWrapper(): HTMLElement;
    /**
     * Updates styles and sizes based on book orientation
     */
    setOrientationStyle(orientation: Orientation): void;
    protected removeHandlers(): void;
    protected setHandlers(): void;
    /**
     * Convert global coordinates to relative book coordinates
     */
    private getMousePos;
    private checkTarget;
    private onMouseDown;
    private onTouchStart;
    private onMouseUp;
    private onMouseMove;
    private onTouchMove;
    private onTouchEnd;
}
