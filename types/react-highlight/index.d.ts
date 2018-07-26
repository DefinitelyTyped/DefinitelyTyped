// Type definitions for react-highlight 0.12
// Project: https://github.com/akiran/react-highlight
// Definitions by: Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

/**
 * Props for a Highlight component.
 */
export interface IHighlightProps {
    /**
     * Language name to use as a class to signal type to highlight.js.
     */
    className: string;
}

/**
 * Visually prettifies child code with highlight.js.
 */
declare const Highlight: React.ComponentClass<IHighlightProps>;

export default Highlight;
