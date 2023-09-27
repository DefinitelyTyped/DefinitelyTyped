// Type definitions for react-headroom 3.2
// Project: https://kyleamathews.github.io/react-headroom/, https://github.com/kyleamathews/react-headroom
// Definitions by: Zero Cho <https://github.com/zerocho>
//                 Rafael Derolez <https://github.com/rafaelderolez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, CSSProperties, ReactNode } from "react";

declare class Headroom extends Component<ReactHeadroomProps> {
    constructor(props: ReactHeadroomProps);
}

export interface ReactHeadroomProps {
    style?: CSSProperties | undefined;
    onPin?: (() => void) | undefined;
    onUnpin?: (() => void) | undefined;
    onUnfix?: (() => void) | undefined;
    upTolerance?: number | undefined;
    downTolerance?: number | undefined;
    disable?: boolean | undefined;
    wrapperStyle?: CSSProperties | undefined;
    parent?: (() => any) | undefined;
    pinStart?: number | undefined;
    calcHeightOnResize?: boolean | undefined;
    disableInlineStyles?: boolean | undefined;
    className?: string | undefined;
    children: ReactNode;
    pin?: boolean | undefined;
    tag?: string | undefined;
}

export default Headroom;
