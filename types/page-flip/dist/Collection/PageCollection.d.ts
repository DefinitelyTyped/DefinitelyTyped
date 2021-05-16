import { Render } from '../Render/Render';
import { Page } from '../Page/Page';
import { PageFlip } from '../PageFlip';
import { FlipDirection } from '../Flip/Flip';
export type NumberArray = number[];
/**
 * Сlass representing a collection of pages
 */
export abstract class PageCollection {
    protected readonly app: PageFlip;
    protected readonly render: Render;
    protected readonly isShowCover: boolean;
    /** Pages List */
    protected pages: Page[];
    /** Index of the current page in list */
    protected currentPageIndex: number;
    /** Number of the current spread in book */
    protected currentSpreadIndex: number;
    /**  Two-page spread in landscape mode */
    protected landscapeSpread: NumberArray[];
    /**  One-page spread in portrait mode */
    protected portraitSpread: NumberArray[];
    protected constructor(app: PageFlip, render: Render);
    /**
     * Load pages
     */
    abstract load(): void;
    /**
     * Clear pages list
     */
    destroy(): void;
    /**
     * Split the book on the two-page spread in landscape mode and one-page spread in portrait mode
     */
    protected createSpread(): void;
    /**
     * Get spread by mode (portrait or landscape)
     */
    protected getSpread(): NumberArray[];
    /**
     * Get spread index by page number
     */
    getSpreadIndexByPage(pageNum: number): number;
    /**
     * Get the total number of pages
     */
    getPageCount(): number;
    /**
     * Get the pages list
     */
    getPages(): Page[];
    /**
     * Get page by index
     */
    getPage(pageIndex: number): Page;
    /**
     * Get the next page from the specified
     */
    nextBy(current: Page): Page;
    /**
     * Get previous page from specified
     */
    prevBy(current: Page): Page;
    /**
     * Get flipping page depending on the direction
     */
    getFlippingPage(direction: FlipDirection): Page;
    /**
     * Get Next page at the time of flipping
     */
    getBottomPage(direction: FlipDirection): Page;
    /**
     * Show next spread
     */
    showNext(): void;
    /**
     * Show prev spread
     */
    showPrev(): void;
    /**
     * Get the number of the current spread in book
     */
    getCurrentPageIndex(): number;
    /**
     * Show specified page
     */
    show(pageNum?: number): void;
    /**
     * Index of the current page in list
     */
    getCurrentSpreadIndex(): number;
    /**
     * Set new spread index as current
     */
    setCurrentSpreadIndex(newIndex: number): void;
    /**
     * Show current spread
     */
    private showSpread;
}
export {};
