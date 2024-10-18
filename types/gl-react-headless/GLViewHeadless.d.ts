import * as React from "react";

export interface GLViewHeadlessProps {
    onContextCreate?: ((gl: WebGLRenderingContext) => void) | undefined;
    onContextFailure?: ((e: Error) => void) | undefined;
    onContextLost?: (() => void) | undefined;
    onContextRestored?: ((gl: WebGLRenderingContext) => void) | undefined;
    webglContextAttributes?: WebGLContextAttributes | undefined;
    pixelRatio?: number | undefined;
    width: number;
    height: number;
}

export class GLViewHeadless extends React.Component<GLViewHeadlessProps> {
    onRef: (ref: HTMLCanvasElement) => void;
    captureAsDataURL(): string;
    captureAsBlob(): Promise<Blob>;
    simulateContextLost(): void;
    simulateContextRestored(): void;
    webglContextAttributes: WebGLContextAttributes;
    canvas?: HTMLCanvasElement | undefined;
    gl?: WebGLRenderingContext | undefined;
}
