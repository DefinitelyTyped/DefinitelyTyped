interface Options {
    format?: string | undefined;
    engine?: string | undefined;
    files?: string[] | undefined;
    images?: string[] | undefined;
    yInvert?: boolean | undefined;
}

/**
 * This interface defines the shape of an object that is held by the caller.
 * This `Module` was created by emscripten, and is therefore largely arcane.
 * This currently just lists a subset of what is defined in `Module`.
 */
interface Module {
    run(): void;
}

type RenderFunction = (instance: Module, src: string, options: Options) => string;

declare class Viz {
    constructor(arg: { Module: Module; render: RenderFunction });
    renderString(src: string, options?: Options): Promise<string>;
    renderSVGElement(src: string, options?: Options): Promise<SVGSVGElement>;
    renderImageElement(src: string, options?: Options): Promise<HTMLImageElement>;
    renderJSONObject(src: string, options?: Options): Promise<object>;
}
