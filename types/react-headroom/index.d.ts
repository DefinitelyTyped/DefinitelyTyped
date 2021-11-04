// Type definitions for react-headroom 2.2
// Project: https://kyleamathews.github.io/react-headroom/, https://github.com/kyleamathews/react-headroom
// Definitions by: Zero Cho <https://github.com/zerocho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CSSProperties, ReactNode, Component } from 'react';

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
}

export default Headroom;
