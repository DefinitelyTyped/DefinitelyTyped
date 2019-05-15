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
    style?: CSSProperties;
    onPin?: () => void;
    onUnpin?: () => void;
    onUnfix?: () => void;
    upTolerance?: number;
    downTolerance?: number;
    disable?: boolean;
    wrapperStyle?: CSSProperties;
    parent?: () => any;
    pinStart?: number;
    calcHeightOnResize?: boolean;
    disableInlineStyles?: boolean;
    className?: string;
    children: ReactNode;
}

export default Headroom;
