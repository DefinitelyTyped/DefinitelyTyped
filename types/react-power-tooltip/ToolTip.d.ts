import * as React from 'react';

declare class Tooltip extends React.Component<TooltipProps> {}

export default Tooltip;

export type PositionTypes =  "right start" | "right center" | "right end" | "bottom start" | "bottom center" | "bottom end" | "left start" | "left center" | "left end" | "top start" | "top center" | "top end";

export interface TooltipProps {
    lineSeparated?: boolean | string;
    position?:  PositionType;
    hoverBackground?: string;
    backgroundColor?: string;
    arrowAlign?: "start" | "center" | "end";
    moveDown?: string;
    moveRight?: string;
    moveLeft?: string;
    moveUp?: string;
    textAlign?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    color?: string;
    animation?: "fade" | "bounce";
    zIndex?: string;
    show: boolean;
    static?: boolean;
    flat?: boolean;
}
