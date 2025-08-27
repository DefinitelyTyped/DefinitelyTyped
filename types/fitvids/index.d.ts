/**
 * Lets your videos be responsive by wrapping them in an aspect ratio container.
 */
export as namespace fitvids;

/**
 * The module exports a single function.
 * Just call it, and it'll wrap video embeds from Youtube, Vimeo, and Kickstarter in a responsive container.
 * Other video players can be supported by passing a custom selector via the options.
 *
 * To wrap videos that have been added to the page dynamically, just call the function again.
 * Fitvids is smart enough to only wrap the new videos.
 */
declare function fitvids(
    parentSelector?: string | (Element | null) | NodeListOf<Element>,
    options?: fitvids.Options,
): void;
declare function fitvids(options: fitvids.Options): void;

declare namespace fitvids {
    interface Options {
        /**
         * If you'd like to ignore certain videos, you can pass a selector via the ignore option.
         * @default ""
         */
        ignore?: string | string[] | undefined;
        /**
         * By default, fitvids automatically wraps Youtube, Vimeo, and Kickstarter players,
         * but if you'd like it to wrap others too, you can pass them in as selectors via the players property.
         * @default ""
         */
        players?: string | string[] | undefined;
    }
}

export = fitvids;
