declare namespace createContext {
    interface STACKGL_destroy_context {
        destroy(): void;
    }

    interface STACKGL_resize_drawingbuffer {
        resize(width: GLint, height: GLint): void;
    }

    interface StackGLExtension {
        getExtension(extensionName: "STACKGL_destroy_context"): STACKGL_destroy_context | null;
        getExtension(extensionName: "STACKGL_resize_drawingbuffer"): STACKGL_resize_drawingbuffer | null;
    }

    const WebGLRenderingContext: WebGLRenderingContext & StackGLExtension & {
        new(): WebGLRenderingContext & StackGLExtension;
        prototype: WebGLRenderingContext & StackGLExtension;
    };
}

declare function createContext(
    width: number,
    height: number,
    options?: WebGLContextAttributes,
): WebGLRenderingContext & createContext.StackGLExtension;

export = createContext;
