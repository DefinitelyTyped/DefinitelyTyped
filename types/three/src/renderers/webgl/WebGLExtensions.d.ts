export class WebGLExtensions {
    constructor(gl: WebGLRenderingContext);

    has(name: string): boolean;
    init(): void;
    get(name: string): unknown;
}
