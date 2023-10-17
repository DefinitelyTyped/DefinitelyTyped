import * as React from "react";

export interface ReactSvgPanZoomLoaderProps {
    src: string;
    render: (content: React.ReactNode) => React.ReactNode;
    proxy?: React.ReactNode | undefined;
}

export const ReactSvgPanZoomLoader: React.ComponentType<ReactSvgPanZoomLoaderProps>;

export interface SvgLoaderSelectElementProps {
    selector: string;
    children?: string | undefined;
    [prop: string]: any;
}

export const SvgLoaderSelectElement: React.ComponentType<SvgLoaderSelectElementProps>;
