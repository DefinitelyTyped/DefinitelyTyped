import { Dimensions, Options, Settings, State, ViewerState } from "./interfaces";
import ViewerCore from "./viewer-core";

interface DivaState {
    viewerCore: ViewerCore;
    toolbar: null; // | Toolbar
}

export class Diva {
    static Events: DivaEvent;

    element: HTMLElement;
    options: Options;
    viewerState: ViewerState;
    settings: Settings;
    toolbar: null; // | Toolbar
    divaState: DivaState;
    hashState: any; // HashParamState;
    /**
     * @param element - The ID of an HTMLElement to attach an instance of Diva to.
     * @param options - Options to be set by the user for the instance of Diva.
     */
    constructor(
        element: string,
        options: Partial<Options> & { objectData: string | object },
    );

    /**
     * Activate this instance of diva via the active Diva controller.
     */
    activate(): void;

    /**
     * Change the object (objectData) parameter currently being rendered by Diva.
     * @param objectData - A IIIF Manifest object or a URL to a IIIF manifest.
     */
    changeObject(objectData: object | string): void;

    /**
     * Change views. Takes 'document', 'book', or 'grid' to specify which view
     * to switch into.
     * @param destinationView - The destination view to change to.
     */
    changeView(destinationView: string): void;

    /**
     * Deactivate this diva instance through the active Diva controller.
     */
    deactivate(): void;

    /**
     * Destroys this instance, telling plugins to do the same.
     */
    destroy(): void;

    /**
     * Disables document dragging, scrolling (by keyboard if set), and zooming
     * by double-clicking.
     */
    disableScrollable(): void;

    /**
     * Re-enables document dragging, scrolling (by-keyboard if set), and zooming
     * by double-clicking.
     */
    enableScrollable(): void;

    /**
     * Disables document drag scrolling.
     */
    disableDragScrollable(): void;

    /**
     * Enables document drag scrolling.
     */
    enableDragScrollable(): void;

    /**
     * Enter fullscreen mode if currently not in fullscreen mode. If currently
     * in fullscreen mode this will have no effect.
     *
     * This function will work even if enableFullscreen is set to false.
     */
    enterFullscreenMode(): boolean;

    /**
     * Enter grid view if currently not in grid view. If currently in grid
     * view mode this will have no effect.
     */
    enterGridView(): boolean;

    /**
     * Returns an array of all page image URIs in the document.
     */
    getAllPageURIs(): string[];

    /**
     * Get the canvas identifier for the currently visible page.
     * @returns The URI of the currently visible canvas.
     */
    getCurrentCanvas(): string;

    /**
     * Returns the dimensions of the current page at the current
     * zoom level. Also works in grid view.
     */
    getCurrentPageDimensionsAtCurrentZoomLevel(): {
        height: number;
        width: number;
    };

    /**
     * Returns the current filename (deprecated).
     * @deprecated
     * @returns The URI for the current page image.
     */
    getCurrentPageFilename(): string;

    /**
     * Returns an array of page indices that are visible in the viewport.
     */
    getCurrentPageIndices(): number[];

    /**
     * Returns the 0-based index for the current page.
     */
    getActivePageIndex(): number;

    /**
     * Shortcut to getPageOffset for current page.
     */
    getCurrentPageOffset(): { top: number; left: number };

    /**
     * Returns the current URI for the visible page.
     */
    getCurrentPageURI(): string;

    /**
     * Returns the current URL for the viewer including
     * the hash parameters reflecting the state of the viewer.
     */
    getCurrentURL(): string;

    /**
     * Returns an array of all filenames in the document. Deprecated.
     * @deprecated
     */
    getFilenames(): string[];

    /**
     * Get the number of grid pages per row.
     */
    getGridPagesPerRow(): number;

    /**
     * Get the instance ID number;
     */
    getInstanceId(): number;

    /**
     * Get the instance selector for this instance.
     * This is the selector for the parent div.
     */
    getInstanceSelector(): string;

    /**
     * Returns the title of the document based on the label
     * in the IIIF manifest.
     */
    getItemTitle(): string;

    /**
     * Get the maximum zoom level for the entire document.
     */
    getMaxZoomLevel(): number;

    /**
     * Get the max zoom level for a given page.
     */
    getMaxZoomLevelForPage(pageIdx: number): number;

    /**
     * Get the minimum zom level for the entire document.
     */
    getMinZoomLevel(): number;

    /**
     * Get the number of pages in the document.
     */
    getNumberOfPages(): number;

    /**
     * If a canvas has multiple images defined, returns the non-primary image.
     * @returns An object containing the other images.
     */
    getOtherImages(pageIndex: number): object;

    /**
     * Get page dimensions in the current view and zoom level.
     */
    getPageDimensions(pageIndex: number): Dimensions;

    /**
     * Returns the dimensions of a given page at the current zoom level.
     * Also works in Grid view.
     */
    getPageDimensionsAtCurrentZoomLevel(pageIndex: number): Dimensions;

    /**
     * Get page dimensions at a given zoom level.
     */
    getPageDimensionsAtZoomLevel(
        pageIdx: number,
        zoomLevel: number,
    ): Dimensions;

    /**
     * Returns a URL for the image of the page at the given index. By default
     * this is full sized.
     * @param size - An object containing width and height information overriding the default.
     */
    getPageImageURL(pageIndex: number, size?: Dimensions): string;

    /**
     * Given a set of coordinates return the 0-based page index for which it matches.
     */
    getPageIndexForPageXYValues(pageX: number, pageY: number): number;

    /**
     * Returns the distance between the northwest corners of diva-inner and page index.
     */
    getPageOffset(
        pageIndex: number,
        options?: { includePadding: boolean },
    ): { top: number; left: number };

    /**
     * Get the instance settings.
     */
    getSettings(): Settings;

    /**
     * Get an object representing the complete state of the viewer.
     */
    getState(): State;

    /**
     * Get the current zoom level.
     */
    getZoomLevel(): number;

    /**
     * Go to a particular 0-indexed page.
     * The (xAnchor) side of the page will be anchored to the side fo the diva-outer element.
     * @param xAnchor - May be either "left", "right", or default "center".
     * @param yAnchor - Max be either "top", "bottom", or default "center".
     */
    gotoPageByIndex(
        pageIndex: number,
        xAnchor?: string,
        yAnchor?: string,
    ): boolean;

    /**
     * Given a canvas label, attempt to go to that page. If no label was found
     * the label will be attempted to match against the page index.
     * @param xAnchor - May be either "left", "right", or default "center".
     * @param yAnchor - May be either "top", "bottom", or default "center".
     */
    gotoPageByLabel(
        label: string,
        xAnchor?: string,
        yAnchor?: string,
    ): boolean;

    /**
     * Jumps to a page based on its filename. Use gotoPageByURI instead.
     * @deprecated
     * @param xAnchor - May be either "left", "right", or default "center".
     * @param yAnchor - May be either "top", "bottom", or default "center".
     */
    gotoPageByName(
        filename: string,
        xAnchor?: string,
        yAnchor?: string,
    ): boolean;

    /**
     * Jump to a page based on its URI.
     * @param xAnchor - May be either "left", "right", or default "center".
     * @param yAnchor - May be either "top", "bottom", or default "center".
     */
    gotoPageByURI(
        uri: string,
        xAnchor?: string,
        yAnchor?: string,
    ): boolean;

    /**
     * Whether the page has other images to display.
     */
    hasOtherImages(pageIndex: number): boolean;

    /**
     * Hides the pages that are marked "non-paged" in the IIIF manifest.
     */
    hideNonPagedPages(): void;

    /**
     * Is the viewer currently in full-screen mode?
     */
    isInFullscreen(): boolean;

    /**
     * Check if a page index is within the range of a document.
     */
    isPageIndexValid(pageIndex: number): boolean;

    /**
     * Determines if a page is currently in the viewport.
     */
    isPageInViewport(pageIndex: number): boolean;

    /**
     * Whether the Diva viewer has been fully initialized.
     */
    isReady(): boolean;

    /**
     * Check if something is visible.
     */
    isRegionInViewport(
        pageIndex: number,
        leftOffset: number,
        topOffset: number,
        width: number,
        height: number,
    ): boolean;

    /**
     * Whether the page layout is vertically or horizontally oriented.
     * @returns true if vertical; false if horizontal.
     */
    isVerticallyOriented(): boolean;

    /**
     * Leave fullscreen mode if currently in fullscreen mode.
     */
    leaveFullscreenMode(): boolean;

    /**
     * Leave grid view if currently in grid view.
     */
    leaveGridView(): boolean;

    /**
     * Set the number of grid pages per row.
     */
    setGridPagesPerRow(pagesPerRow: number): boolean;

    /**
     * Align this diva instance with a state object (as returned by getState).
     */
    setState(state: State): boolean;

    /**
     * Sets the zoom level.
     */
    setZoomLevel(zoomLevel: number): boolean;

    /**
     * Show non-paged pages.
     */
    showNonPagedPages(): boolean;

    /**
     * Toggle fullscreen mode.
     */
    toggleFullscreenMode(): boolean;

    /**
     * Show/Hide non-paged pages.
     */
    toggleNonPagedPagesVisibility(): boolean;

    /**
     * Change between horizontal and vertical layouts.
     * @returns true if document is vertically oriented, false otherwise.
     */
    toggleOrientation(): boolean;

    /**
     * Translates a measurement from zoom level on the largest size
     * to one on the current zoom level.
     *
     * For example, a point 1000 on an image that is on zoom level 2 of 5
     * translates to a position of 111.111... (1000 / (5 - 2)^2).
     *
     * Works for a single pixel co-ordinate or a dimension (e.g., translates a box
     * that is 1000 pixels wide on the original to one that is 111.111 pixels wide
     * on the current zoom level).
     * @param position - A point on the max zoom level.
     * @returns The same point on the current zoom level.
     */
    translateFromMaxZoomLevel(position: number): number;

    /**
     * Translates a measurement from the current zoom level to the position on the
     * largest zoom level.
     *
     * Works for a single pixel co-ordinate or a dimension (e.g., translates a box
     * that is 111.111 pixels wide on the current image to one that is 1000 pixels wide
     * on the current zoom level).
     * @param position - A point on the current zoom level.
     * @returns The same point on the max zoom level.
     */
    translateToMaxZoomLevel(position: number): number;

    /**
     * Zoom in.
     * @returns False if at the maximum zoom.
     */
    zoomIn(): boolean;

    /**
     * Zoom out.
     * @returns False if it's at the minimum zoom.
     */
    zoomOut(): boolean;
}

export class DivaEvent {
    publish(topic: string, args: object, scope?: object): void;
    subscribe(
        topic: string,
        callback: (...rest: any[]) => void,
        instanceID?: string,
    ): any[];
    unsubscribe(handle: any[], completely?: boolean): boolean;
    unsubscribeAll(instanceID: string): void;
}

export { Diva as default };
