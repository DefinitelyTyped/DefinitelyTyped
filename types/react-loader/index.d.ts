// Type definitions for react-loader 2.4
// Project: https://github.com/quickleft/react-loader
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";

interface LoaderOptions {
    lines?: number | undefined;
    length?: number | undefined;
    width?: number | undefined;
    radius?: number | undefined;
    scale?: number | undefined;
    corners?: number | undefined;
    color?: string | undefined;
    opacity?: number | undefined;
    rotate?: number | undefined;
    direction?: number | undefined;
    speed?: number | undefined;
    trail?: number | undefined;
    fps?: number | undefined;
    zIndex?: number | undefined;
    top?: string | undefined;
    left?: string | undefined;
    shadow?: boolean | undefined;
    hwaccel?: boolean | undefined;
    position?: string | undefined;
    loadedClassName?: string | undefined;
}

interface LoaderProps extends LoaderOptions {
    loaded: boolean;
    options?: LoaderOptions | undefined;
    className?: string | undefined;
}

declare class ReactLoader extends Component<LoaderProps> {
}

declare namespace ReactLoader {
}

export = ReactLoader;
