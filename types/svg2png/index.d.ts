// Type definitions for svg2png node package 
// Project: https://github.com/domenic/svg2png
// Definitions by: hans windhoff <https://github.com/hansrwindhoff>
// Definitions by: songChengcheng <https://github.com/sccgithub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface opts {
  fileName?: string,
  width?: number,
  height?: number,
  url?: string
}

declare function svg2png(sourceBuffer: Buffer, opts?: opts): Promise<Buffer>;
export function sync(sourceBuffer: Buffer, opts?: opts): Buffer;

export default svg2png;
