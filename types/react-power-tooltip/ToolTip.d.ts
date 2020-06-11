import * as React from 'react';

declare class Tooltip extends React.Component<TooltipProps> {}

export default Tooltip;

export interface TooltipProps {
    lineSeparated: boolean | string,
    position: string,
    hoverBackground: string,
    backgroundColor: string,
    arrowAlign: string,
    moveDown: string,
    moveRight: string,
    moveLeft: string,
    moveUp: string,
    textAlign: string,
    fontFamily: string,
    fontWeight: string,
    fontSize: string,
    color: string,
    animation: string,
    zIndex: string,
    show: boolean,
    flat: boolean
}
