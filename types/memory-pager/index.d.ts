/// <reference types="node" />

export = Pager;

declare const Pager: Pager;

interface Pager {
    /**
     * Create a new pager.
     * @param pageSize defaults to 1024.
     */
    (pageSize?: number): Pager.PagerInstance;
    /**
     * Create a new pager.
     * @param pageSize defaults to 1024.
     */
    new(pageSize?: number): Pager.PagerInstance;
}

declare namespace Pager {
    interface PagerInstance {
        /**
         * Get a page. The page will be allocated at first access.
         * @param pageNumber
         * @param noAllocate will make the method return `undefined` if no page has been allocated already
         */
        get(pageNumber: number, noAllocate?: false): Page;
        get(pageNumber: number, noAllocate: true): Page | undefined;

        /**
         * Explicitly set the buffer for a page.
         */
        set(pageNumber: number, buffer: Buffer): void;

        /**
         * Mark a page as updated.
         */
        updated(page: Page): void;

        /**
         * Get the last page that was updated.
         */
        lastUpdate(): Page | null;

        /**
         * Concat all pages allocated pages into a single buffer.
         */
        toBuffer(): Buffer;
    }

    interface Page {
        offset: number;
        buffer: Buffer;
    }
}
