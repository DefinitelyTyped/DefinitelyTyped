import { loader } from "webpack";

export = SVGSpriteLoader;

declare function SVGSpriteLoader(
    this: loader.LoaderContext,
    source: string | Buffer,
): string | Buffer | void | undefined;
