import { Plugin } from "webpack";

export = SVGSpriteLoaderPlugin;

declare class SVGSpriteLoaderPlugin extends Plugin {
    constructor(options?: SVGSpriteLoaderPlugin.Options);
}

declare namespace SVGSpriteLoaderPlugin {
    interface Options {
        /** Render plain sprite without styles and usages */
        plainSprite?: boolean | undefined;
        /** Custom tag attributes for the svg */
        spriteAttrs?: { [key: string]: any } | undefined;
    }
}
