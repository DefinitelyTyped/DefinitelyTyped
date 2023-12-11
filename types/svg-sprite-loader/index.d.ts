import { loader } from "webpack";

export = SVGSpriteLoader;

declare function SVGSpriteLoader(
    this: loader.LoaderContext,
    source: string | Buffer,
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
): string | Buffer | void | undefined;
