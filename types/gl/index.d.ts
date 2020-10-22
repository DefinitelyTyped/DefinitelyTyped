// Type definitions for gl 4.1
// Project: https://github.com/stackgl/headless-gl#readme
// Definitions by: sjx233 <https://github.com/sjx233>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StackGLExtension {
    getExtension(extensionName: "STACKGL_resize_drawingbuffer"): STACKGL_resize_drawingbuffer | null;
    getExtension(extensionName: "STACKGL_destroy_context"): STACKGL_destroy_context | null;
}

interface STACKGL_resize_drawingbuffer {
    resize(width: GLint, height: GLint): void;
}

interface STACKGL_destroy_context {
    destroy(): void;
}

declare function createContext(width: number, height: number, options?: WebGLContextAttributes): WebGLRenderingContext & StackGLExtension;

export = createContext;
