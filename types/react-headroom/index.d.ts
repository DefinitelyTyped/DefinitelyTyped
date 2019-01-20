// Type definitions for react-headroom 2.2
// Project: https://kyleamathews.github.io/react-headroom/
// Definitions by: Zero Cho <https://github.com/zerocho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactNode, Component } from 'react';
import * as ReactDOM from 'react-dom';

declare class Headroom extends Component<ReactHeadroomProps> {
    constructor(props: ReactHeadroomProps);
}

export interface ReactHeadroomProps {
    style?: ReactDOM.CSSProperties;
    onPin?: () => void;
    onUnpin?: () => void;
    onUnfix?: () => void;
    upTolerance?: number;
    downTolerance?: number;
    disable?: boolean;
    wrapperStyle?: ReactDOM.CSSProperties;
    parent?: () => any;
    pinStart?: number;
    calcHeightOnResize?: boolean;
    disableInlineStyles?: boolean;
    className?: string;
    children: ReactNode;
}

export default Headroom;
