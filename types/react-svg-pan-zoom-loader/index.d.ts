// Type definitions for react-svg-pan-zoom-loader 1.4
// Project: https://github.com/chrvadala/react-svg-pan-zoom-loader#readme
// Definitions by: Rafal Witczak <https://github.com/rafw87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface ReactSvgPanZoomLoaderProps {
    src: string;
    render: (content: React.ReactNode) => React.ReactNode;
    proxy?: React.ReactNode;
}

export const ReactSvgPanZoomLoader: React.ComponentType<ReactSvgPanZoomLoaderProps>;

export interface SvgLoaderSelectElementProps {
    selector: string;
    children?: string;
    [prop: string]: any;
}

export const SvgLoaderSelectElement: React.ComponentType<SvgLoaderSelectElementProps>;
