interface HTMLCanvasElement extends HTMLElement {
    getContext(
        contextId: "webgl2" | "experimental-webgl2",
        contextAttributes?: WebGLContextAttributes,
    ): WebGL2RenderingContext | null;
}

interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}

interface WebGLQuery {
}

declare var WebGLQuery: {
    prototype: WebGLQuery;
    new(): WebGLQuery;
};

interface WebGLSampler {
}

declare var WebGLSampler: {
    prototype: WebGLSampler;
    new(): WebGLSampler;
};

interface WebGLSync {
}

declare var WebGLSync: {
    prototype: WebGLSync;
    new(): WebGLSync;
};

interface WebGLTransformFeedback {
}

declare var WebGLTransformFeedback: {
    prototype: WebGLTransformFeedback;
    new(): WebGLTransformFeedback;
};

interface WebGLVertexArrayObject {
}

declare var WebGLVertexArrayObject: {
    prototype: WebGLVertexArrayObject;
    new(): WebGLVertexArrayObject;
};
