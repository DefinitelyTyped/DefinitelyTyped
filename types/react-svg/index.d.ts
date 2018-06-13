// Type definitions for react-svg 3.0
// Project: https://github.com/atomic-app/react-svg
// Definitions by: Chen Junda <https://github.com/viccrubs>
//                 Chris Garber <https://github.com/chrisgarber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";

declare class ReactSVG extends React.Component<ReactSVG.ReactSVGProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}

export = ReactSVG;

declare namespace ReactSVG {
  interface ReactSVGProps {
    /**
     * Path to the SVG.
     */
    path: string;
    /**
     * Run any script blocks found in the SVG (always, once, or never). Defaults to never.
     */
    evalScripts?: 'always' | 'once' | 'never';
    /**
     * Function to call after the SVG is injected. Receives the newly injected SVG DOM element as a parameter. Defaults to null.
     */
    onInjected?: (dom: SVGSVGElement) => void;
    /**
     * Class name to be added to the SVG. Defaults to ''.
     */
    svgClassName?: string;
    /**
     * Inline styles to be added to the SVG. Defaults to {}.
     */
    svgStyle?: any;
  }
}
