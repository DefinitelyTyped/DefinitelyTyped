import { Render } from '../Render/Render';
import { PageFlip } from '../PageFlip';
import { Point } from '../BasicTypes';
import { FlipCalculation } from './FlipCalculation';
/**
 * Flipping direction
 */
export enum FlipDirection {
    FORWARD = 0,
    BACK = 1
}
/**
 * Active corner when flipping
 */
export enum FlipCorner {
    TOP = "top",
    BOTTOM = "bottom"
}
/**
 * State of the book
 */
export enum FlippingState {
    /** The user folding the page */
    USER_FOLD = "user_fold",
    /** Mouse over active corners */
    FOLD_CORNER = "fold_corner",
    /** During flipping animation */
    FLIPPING = "flipping",
    /** Base state */
    READ = "read"
}
/**
 * Class representing the flipping process
 */
export class Flip {
    private readonly render;
    private readonly app;
    private flippingPage;
    private bottomPage;
    private calc;
    private state;
    constructor(render: Render, app: PageFlip);
    /**
     * Called when the page folding (User drags page corner)
     */
    fold(globalPos: Point): void;
    /**
     * Page turning with animation
     */
    flip(globalPos: Point): void;
    /**
     * Start the flipping process. Find direction and corner of flipping. Creating an object for calculation.
     */
    start(globalPos: Point): boolean;
    /**
     * Perform calculations for the current page position. Pass data to render object
     */
    private do;
    /**
     * Turn to the specified page number (with animation)
     */
    flipToPage(page: number, corner: FlipCorner): void;
    /**
     * Turn to the next page (with animation)
     */
    flipNext(corner: FlipCorner): void;
    /**
     * Turn to the prev page (with animation)
     */
    flipPrev(corner: FlipCorner): void;
    /**
     * Called when the user has stopped flipping
     */
    stopMove(): void;
    /**
     * Fold the corners of the book when the mouse pointer is over them.
     * Called when the mouse pointer is over the book without clicking
     */
    showCorner(globalPos: Point): void;
    /**
     * Starting the flipping animation process
     */
    private animateFlippingTo;
    /**
     * Get the current calculations object
     */
    getCalculation(): FlipCalculation;
    /**
     * Get current flipping state
     */
    getState(): FlippingState;
    private setState;
    private getDirectionByPoint;
    private getAnimationDuration;
    private checkDirection;
    private reset;
    private getBoundsRect;
    private checkState;
    private isPointOnCorners;
}
