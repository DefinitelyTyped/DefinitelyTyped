import texture2D = require("gl-texture2d");

type Texture = ReturnType<typeof texture2D>;

declare class FrameBuffer {
    shape: [number, number];
    gl: WebGLRenderingContext;
    handle: WebGLFramebuffer;
    color: Texture[];
    depth: Texture | null;

    bind(): void;
    dispose(): void;
}

interface FrameBufferOptions {
    preferFloat?: boolean | undefined;
    float?: boolean | undefined;
    color?: number | undefined;
    depth?: boolean | undefined;
    stencil?: boolean | undefined;
}

declare function glFBO(
    gl: WebGLRenderingContext,
    shape: [number, number],
    options?: FrameBufferOptions,
): FrameBuffer;

export = glFBO;
