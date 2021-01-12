// Type definitions for gl-fbo 2.0
// Project: https://github.com/stackgl/gl-fbo
// Definitions by: Nick Krichevsky <https://github.com/ollien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import texture2D = require('gl-texture2d');

type Texture = ReturnType<typeof texture2D>;

declare class FrameBuffer {
    shape: [number, number];
    gl: WebGLRenderingContext;
    handle: WebGLFramebuffer;
    color: Texture[];
    depth: Texture|null;

    bind(): void;
    dispose(): void;
}

interface FrameBufferOptions {
    preferFloat?: boolean;
    float?: boolean;
    color?: number;
    depth?: boolean;
    stencil?: boolean;
}

 declare function glFBO(
     gl: WebGLRenderingContext,
     shape: [number, number],
     options?: FrameBufferOptions
 ): FrameBuffer;

 export = glFBO;
