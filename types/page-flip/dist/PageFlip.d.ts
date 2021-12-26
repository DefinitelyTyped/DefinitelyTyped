import { PageCollection } from './Collection/PageCollection';
import { PageRect, Point } from './BasicTypes';
import { Flip, FlipCorner, FlippingState } from './Flip/Flip';
import { Orientation, Render } from './Render/Render';
import { Page } from './Page/Page';
import { EventObject } from './Event/EventObject';
import { FlipSetting } from './Settings';
import { UI } from './UI/UI';
import './Style/stPageFlip.css';
/**
 * Class representing a main PageFlip object
 */
export class PageFlip extends EventObject {
    private mousePosition;
    private isUserTouch;
    private isUserMove;
    private readonly setting;
    private readonly block;
    private pages;
    private flipController;
    private render;
    private ui;
    /**
     * Create a new PageFlip instance
     */
    constructor(inBlock: HTMLElement, setting: Partial<FlipSetting>);
    /**
     * Destructor. Remove a root HTML element and all event handlers
     */
    destroy(): void;
    /**
     * Update the render area. Re-show current page.
     */
    update(): void;
    /**
     * Load pages from images on the Canvas mode
     */
    loadFromImages(imagesHref: string[]): void;
    /**
     * Load pages from HTML elements on the HTML mode
     */
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    /**
     * Update current pages from images
     */
    updateFromImages(imagesHref: string[]): void;
    /**
     * Update current pages from HTML
     */
    updateFromHtml(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    /**
     * Turn to the previous page (without animation)
     */
    turnToPrevPage(): void;
    /**
     * Turn to the next page (without animation)
     */
    turnToNextPage(): void;
    /**
     * Turn to the specified page number (without animation)
     */
    turnToPage(page: number): void;
    /**
     * Turn to the next page (with animation)
     */
    flipNext(corner?: FlipCorner): void;
    /**
     * Turn to the prev page (with animation)
     */
    flipPrev(corner?: FlipCorner): void;
    /**
     * Turn to the specified page number (with animation)
     */
    flip(page: number, corner?: FlipCorner): void;
    /**
     * Call a state change event trigger
     */
    updateState(newState: FlippingState): void;
    /**
     * Call a page number change event trigger
     */
    updatePageIndex(newPage: number): void;
    /**
     * Call a page orientation change event trigger. Update UI and rendering area
     */
    updateOrientation(newOrientation: Orientation): void;
    /**
     * Get the total number of pages in a book
     */
    getPageCount(): number;
    /**
     * Get the index of the current page in the page list (starts at 0)
     */
    getCurrentPageIndex(): number;
    /**
     * Get page from collection by number
     */
    getPage(pageIndex: number): Page;
    /**
     * Get the current rendering object
     */
    getRender(): Render;
    /**
     * Get current object responsible for flipping
     */
    getFlipController(): Flip;
    /**
     * Get current page orientation
     */
    getOrientation(): Orientation;
    /**
     * Get current book sizes and position
     */
    getBoundsRect(): PageRect;
    /**
     * Get configuration object
     */
    getSettings(): FlipSetting;
    /**
     * Get UI object
     */
    getUI(): UI;
    /**
     * Get current flipping state
     */
    getState(): FlippingState;
    /**
     * Get page collection
     */
    getPageCollection(): PageCollection;
    /**
     * Start page turning. Called when a user clicks or touches
     */
    startUserTouch(pos: Point): void;
    /**
     * Called when a finger / mouse moves
     */
    userMove(pos: Point, isTouch: boolean): void;
    /**
     * Сalled when the user has stopped touching
     */
    userStop(pos: Point, isSwipe?: boolean): void;
}
