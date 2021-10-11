// Type definitions for react-highlight 0.12
// Project: https://github.com/akiran/react-highlight
// Definitions by: JP Lew <https://github.com/jplew>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

/**
 * Props for a Highlight component.
 */
export interface HighlightProps {
    children?: React.ReactNode;
    /**
     * Language name to use as a class to signal type to highlight.js.
     */
    className?: string | undefined;
    /**
     * Set innerHTML=true to highlight multiple code snippets at a time.
     */
    innerHTML?: boolean | undefined;
}

/**
 * Visually prettifies child code with highlight.js.
 */
declare const Highlight: React.ComponentClass<HighlightProps>;

export default Highlight;
