import * as React from "react";

export default class ReactCurvedText extends React.Component<
    ReactCurvedTextProps,
    any
> {}

export interface ReactCurvedTextProps {
    /**
     * Text to be displayed
     */
    text: string;

    /**
     * Width of the SVG
     */
    width: number;

    /**
     * Height of the SVG
     */
    height: number;

    /**
     * Center x of the ellipse
     */
    cx: number;

    /**
     * Center y of the ellipse
     */
    cy: number;

    /**
     * Radius x of the ellipse
     */
    rx: number;

    /**
     * Radius y of the ellipse
     */
    ry: number;

    /**
     * Start offset of the text
     */
    startOffset?: number;

    /**
     * Reverse the text path
     */
    reversed?: boolean;

    /**
     * Props to be passed to the text element
     */
    textProps?: React.SVGTextElementAttributes<SVGTextElement>;

    /**
     * Props to be passed to the textPath element
     */
    textPathProps?: React.SVGProps<SVGTextPathElement>;

    /**
     * Props to be passed to the tspan element
     */
    tspanProps?: React.SVGProps<SVGTSpanElement>;

    /**
     * Props to be passed to the ellipse element
     */
    ellipseProps?: React.SVGProps<SVGEllipseElement>;

    /**
     * Props to be passed to the svg element
     */
    svgProps?: React.SVGProps<SVGSVGElement>;
}
