// Type definitions for svg2png 4.1
// Project: https://github.com/domenic/svg2png
// Definitions by: hans windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface opts {
    fileName?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    url?: string | undefined;
}

declare function svg2png(sourceBuffer: Buffer, opts?: opts): Promise<Buffer>;

declare namespace svg2png {
    function sync(sourceBuffer: Buffer, opts?: opts): Buffer;
}
export = svg2png;
