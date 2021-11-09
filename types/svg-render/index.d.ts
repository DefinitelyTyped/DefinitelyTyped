// Type definitions for svg-render 1.2
// Project: https://github.com/catdad-experiments/svg-render
// Definitions by: Sergey Chernov <https://github.com/sergeychernov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface SvgRenderOptions {
    buffer: Buffer;
    width?: number;
    height?: number;
    expandUseTags?: boolean;
}

export default function svgRender(options: SvgRenderOptions): Buffer;
