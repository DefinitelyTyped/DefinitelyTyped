import * as React from "react";

export interface FindChunks {
    autoEscape?: boolean | undefined;
    caseSensitive?: boolean | undefined;
    sanitize?: ((text: string) => string) | undefined;
    searchWords: Array<string | RegExp>;
    textToHighlight: string;
}

export interface Chunk {
    start: number;
    end: number;
}

export interface HighlighterProps {
    /** The class name to be applied to an active match. Use along with activeIndex */
    activeClassName?: string | undefined;
    /** Specify the match index that should be actively highlighted. Use along with activeClassName */
    activeIndex?: number | undefined;
    /** The inline style to be applied to an active match. Use along with activeIndex */
    activeStyle?: React.CSSProperties | undefined;
    /** Escape characters in searchWords which are meaningful in regular expressions */
    autoEscape?: boolean | undefined;
    /** CSS class name applied to the outer/wrapper <span> */
    className?: string | undefined;
    /** Search should be case sensitive; defaults to false */
    caseSensitive?: boolean | undefined;
    /**
     * Use a custom function to search for matching chunks. This makes it possible to use arbitrary logic
     * when looking for matches. See the default findChunks function in highlight-words-core for signature.
     * Have a look at the custom findChunks example on how to use it.
     */
    findChunks?: ((options: FindChunks) => Chunk[]) | undefined;
    /** CSS class name applied to highlighted text */
    highlightClassName?: string | undefined;
    /** Inline styles applied to highlighted text */
    highlightStyle?: React.CSSProperties | undefined;
    /**
     * Type of tag to wrap around highlighted matches; defaults to mark but can also be a React element
     * (class or functional)
     */
    highlightTag?: string | React.ComponentType<any> | undefined;
    /**
     * Process each search word and text to highlight before comparing (eg remove accents); signature
     * (text: string): string
     */
    sanitize?: ((text: string) => string) | undefined;
    /** Array of search words. The search terms are treated as RegExps unless autoEscape is set. */
    searchWords: Array<string | RegExp>;
    /** Text to highlight matches in */
    textToHighlight: string;
    /** CSS class name applied to unhighlighted text */
    unhighlightClassName?: string | undefined;
    /** Inline styles applied to unhighlighted text */
    unhighlightStyle?: React.CSSProperties | undefined;
    /** Allows to pass through any parameter to wrapped component */
    [index: string]: any;
}

declare class Highlighter extends React.Component<HighlighterProps> {}

export default Highlighter;
