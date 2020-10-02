// Type definitions for react-highlight-words 0.16
// Project: https://github.com/bvaughn/react-highlight-words#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 Diogo Corrêa <https://github.com/diogodca>
//                 Kelly Milligan <https://github.com/kellyrmilligan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface FindChunks {
  autoEscape?: boolean;
  caseSensitive?: boolean;
  sanitize?: (text: string) => string;
  searchWords: string[];
  textToHighlight: string;
}

export interface Chunk {
  start: number;
  end: number;
}

export interface HighlighterProps {
    /** The class name to be applied to an active match. Use along with activeIndex */
    activeClassName?: string;
    /** Specify the match index that should be actively highlighted. Use along with activeClassName */
    activeIndex?: number;
    /** The inline style to be applied to an active match. Use along with activeIndex */
    activeStyle?: React.CSSProperties;
    /** Escape characters in searchWords which are meaningful in regular expressions */
    autoEscape?: boolean;
    /** CSS class name applied to the outer/wrapper <span> */
    className?: string;
    /** Search should be case sensitive; defaults to false */
    caseSensitive?: boolean;
    /**
     * Use a custom function to search for matching chunks. This makes it possible to use arbitrary logic
     * when looking for matches. See the default findChunks function in highlight-words-core for signature.
     * Have a look at the custom findChunks example on how to use it.
     */
    findChunks?: (options: FindChunks) => Chunk[];
    /** CSS class name applied to highlighted text */
    highlightClassName?: string;
    /** Inline styles applied to highlighted text */
    highlightStyle?: React.CSSProperties;
    /**
     * Type of tag to wrap around highlighted matches; defaults to mark but can also be a React element
     * (class or functional)
     */
    highlightTag?: string | React.ComponentType<any>;
    /**
     * Process each search word and text to highlight before comparing (eg remove accents); signature
     * (text: string): string
     */
    sanitize?: (text: string) => string;
    /** Array of search words. The search terms are treated as RegExps unless autoEscape is set. */
    searchWords: string[];
    /** Text to highlight matches in */
    textToHighlight: string;
    /** CSS class name applied to unhighlighted text */
    unhighlightClassName?: string;
    /** Inline styles applied to unhighlighted text */
    unhighlightStyle?: React.CSSProperties;
    /** Allows to pass through any parameter to wrapped component */
    [index: string]: any;
}

declare class Highlighter extends React.Component<HighlighterProps> {}

export default Highlighter;
