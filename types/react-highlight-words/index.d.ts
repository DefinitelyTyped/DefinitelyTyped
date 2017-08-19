// Type definitions for react-highlight-words 0.6
// Project: https://github.com/bvaughn/react-highlight-words#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import React = require("react");

export = Highlighter;

interface HighlighterProps {
    /** Escape characters which are meaningful in regular expressions */
    autoEscape?: boolean;
    /** Escape characters which are meaningful in regular expressions */
    activeClassName?: string;
    /** Specify the match index that should be actively highlighted. Use along with activeClassName */
    activeIndex?: string;
    /** CSS class name applied to highlighted text */
    highlightClassName?: string;
    /** Inline styles applied to highlighted text */
    highlightStyle?: any;
    /** Type of tag to wrap around highlighted matches; defaults to mark */
    highlightTag?: string;
    /** Process each search word and text to highlight before comparing (eg remove accents); signature (text: string): string */
    sanitize?(text: string): string;
    /** Array of search words */
    searchWords: string[];
    /** Text to highlight matches in */
    textToHighlight: string;
}

declare class Highlighter extends React.Component<HighlighterProps, any> {
    static propTypes: any;
}
