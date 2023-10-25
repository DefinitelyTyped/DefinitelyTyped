import { Component, ComponentType, ReactElement } from "react";

export type ChunkExtractorOptions =
    & {
        /**
         * Webpack entrypoints to load (default to `["main"]`)
         */
        entrypoints?: string | string[] | undefined;
        /**
         * Optional output path (only for `requireEntrypoint`)
         */
        outputPath?: string | undefined;
        /**
         * Optional public path to override stats.publicPath at runtime
         */
        publicPath?: string | undefined;
        /**
         * Optional namespace in case of multiple apps on same page
         */
        namespace?: string | undefined;
        /**
         * File system used to read files (default to fs)
         */
        inputFileSystem?: object | undefined;
    }
    & ({
        /**
         * Stats file path generated using `@loadable/webpack-plugin`
         */
        statsFile: string;
    } | {
        /**
         * Stats generated using `@loadable/webpack-plugin`.
         */
        stats: object;
    });

/**
 * Chunk that is received by the AttrFn function.
 */
export interface Chunk {
    chunk: string;
    filename: string;
    linkType: string;
    path: string;
    scriptType: string;
    type: string;
    url: string;
}

/**
 * Used to insert attributes in the get functions.
 */
export type AttrFn = (chunk: Chunk) => {};

/**
 * Used to collect chunks server-side and get them as script tags or script elements
 */
export class ChunkExtractor {
    constructor(options: ChunkExtractorOptions);

    /**
     * Wrap your application in a `ChunkExtractorManager`
     */
    collectChunks(
        /**
         * JSX element that will be wrapped in `ChunkExtractorManager`
         */
        element: JSX.Element,
    ): JSX.Element;

    /**
     * Require the entrypoint of your application as a commonjs module.
     */
    requireEntrypoint(name?: string): { default: ComponentType };

    /**
     * Get required assets definition
     */
    getMainAssets(scriptType?: string): Chunk[];

    /**
     * Get scripts as a string of `<script>` tags
     */
    getScriptTags(attr?: {} | AttrFn): string;

    /**
     * Get scripts as an array of React `<script>` elements.
     */
    getScriptElements(attr?: {} | AttrFn): Array<ReactElement<{}>>;

    /**
     * Get "prefetch" and "preload" links as a string of `<link>` tags
     */
    getLinkTags(attr?: {} | AttrFn): string;

    /**
     * Get "prefetch" and "preload" links as an array of React `<link>` elements
     */
    getLinkElements(attr?: {} | AttrFn): Array<ReactElement<{}>>;

    /**
     * Get style links as a string of `<link>` tags
     */
    getStyleTags(attr?: {} | AttrFn): string;

    /**
     * Returns the preload assets lists.
     */
    getPreAssets(): Chunk[];

    /**
     * Get style links as an array of React `<link>` elements
     */
    getStyleElements(attr?: {} | AttrFn): Array<ReactElement<{}>>;

    /**
     * Get inline style links as a string of <link> tags (returns a promise)
     */
    getInlineStyleTags(attr?: {} | AttrFn): Promise<string>;

    /**
     * Get inline style links as an array of React <link> elements (returns a promise).
     */
    getInlineStyleElements(attr?: {} | AttrFn): Promise<Array<ReactElement<{}>>>;

    /**
     * Get css as a raw string for using directly within app (e.g. in custom AMP style tag)
     */
    getCssString(): Promise<string>;
}

export interface ChunkExtractorManagerProps {
    extractor: ChunkExtractor;
}

export class ChunkExtractorManager extends Component<ChunkExtractorManagerProps> {}
