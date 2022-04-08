import { BlockInstance } from '../';

// prettier-ignore
export type PhrasingContentSchema = {
    readonly [k in '#text' | 'a' | 'abbr' | 'br' | 'code' | 'del' | 'em' | 'ins' | 's' | 'strong' | 'sub' | 'sup']:
        k extends '#text' | 'br' ? {} :
        k extends 'a' ? {
                readonly attributes: ReadonlyArray<keyof HTMLAnchorElement>;
                readonly children: PhrasingContentSchema;
            } :
        k extends 'abbr' ? {
                readonly attributes: ReadonlyArray<keyof HTMLElement>;
                readonly children: PhrasingContentSchema;
            } :
        {
            readonly children: PhrasingContentSchema;
        };
};

export function getPhrasingContentSchema(): PhrasingContentSchema;

export namespace pasteHandler {
    interface BaseOptions {
        /**
         * Whether or not the user can use unfiltered HTML.
         */
        canUserUseUnfilteredHTML?: boolean;
        /**
         * Handle content as blocks or inline content.
         *  - `AUTO`: Decide based on the content passed.
         *  - `INLINE`: Always handle as inline content, and return string.
         *  - `BLOCKS`: Always handle as blocks, and return array of blocks.
         */
        mode?: 'AUTO' | 'INLINE' | 'BLOCKS';
        /**
         * The tag into which content will be inserted.
         */
        tagName?: keyof HTMLElementTagNameMap;
    }
    interface HTMLOptions extends BaseOptions {
        /**
         * The HTML to convert.
         */
        HTML: string;
    }
    interface PlainTextOptions extends BaseOptions {
        /**
         * Plain text version.
         */
        plainText: string;
    }
    type Options = HTMLOptions | PlainTextOptions;
}
/**
 * Converts an HTML string to known blocks. Strips everything else.
 *
 * @returns A list of blocks or a string, depending on `options.mode`.
 */
export function pasteHandler(options: pasteHandler.Options & { mode: 'INLINE' }): string;
export function pasteHandler(options: pasteHandler.Options & { mode: 'BLOCKS' }): BlockInstance[];
export function pasteHandler(options: pasteHandler.Options): BlockInstance[] | string;

/**
 * Converts an HTML string to known blocks.
 */
export function rawHandler(options: { HTML: string }): BlockInstance[];
