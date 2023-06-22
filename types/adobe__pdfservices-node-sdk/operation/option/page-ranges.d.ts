/**
 * Page ranges of a file, inclusive of start and end page index, where page index starts from 1.
 */
export class PageRanges {
    _ranges: any[];
    /**
     * Adds a single page. Page index starts from 1.
     *
     */
    addSinglePage(page: number): void;
    /**
     *
     * Adds a page range. Page indexes start from 1.
     */
    addPageRange(start: number, end: number): void;
    /**
     * Adds a page range from the specified start page index to the last page. Page index starts from 1.
     */
    addAllFrom(start: number): void;
    /**
     * Adds a page range representing all pages.
     */
    addAll(): void;
    toString(): string;
    getRanges(): any[];
    validate(): void;
}
