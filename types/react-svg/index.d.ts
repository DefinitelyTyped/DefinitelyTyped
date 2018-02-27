// Type definitions for react-svg 2.2
// Project: https://github.com/atomic-app/react-svg
// Definitions by: Chen Junda <https://github.com/viccrubs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

declare class ReactSVG extends React.Component<ReactSVG.ReactSVGProps> {}

export = ReactSVG;

declare namespace ReactSVG {
  interface ReactSVGProps {
    /**
     * Path to the SVG.
     */
    path: string;
    /**
     * Function to call after the SVG is injected. Receives the newly injected SVG DOM element as a parameter. Defaults to null.
     */
    callback?: (dom: SVGSVGElement) => void;
    /**
     * Class name to be added to the SVG. Defaults to ''.
     */
    className?: string;
    /**
     * Class name to be added to the wrapping div. Defaults to ''.
     */
    wrapperClassName?: string;
    /**
     * Run any script blocks found in the SVG (always, once, or never). Defaults to never.
     */
    evalScripts?: 'always' | 'once' | 'never';
    /**
     * Inline styles to be added to the SVG. Defaults to {}.
     */
    style?: any;
  }
}
