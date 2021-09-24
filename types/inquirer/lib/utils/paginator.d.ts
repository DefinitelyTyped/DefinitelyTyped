import ScreenManager = require('./screen-manager');

interface PaginatorOptions {
    /**
     * Whether or not to loop the content.
     */
    isInfinite: boolean;
}

/**
 * Provides the functionality to draw paginated content using a `ScreenManager`.
 */
declare class Paginator {
    /**
     * Gets or sets the index of the currently focused line.
     */
    protected pointer: number;

    /**
     * Gets or sets the index of the last focused line.
     */
    protected lastIndex: number;

    /**
     * Gets or sets an object for drawing the paginated content.
     */
    protected screen: ScreenManager;

    /**
     * Initializes a new instance of the `Paginator` class.
     *
     * @param screenManager
     * A screen-manager for drawing the paginated content.
     */
    constructor(screenManager: ScreenManager, options?: PaginatorOptions);

    /**
     * Paginates the specified `content`.
     *
     * @param content
     * The content to paginate.
     *
     * @param selectedIndex
     * The number of the selected line.
     *
     * @param pageSize
     * The number of lines to display at a time.
     *
     * @returns
     * The paginated content.
     */
    paginate(content: string, selectedIndex: number, pageSize?: number): string;
}

export = Paginator;
