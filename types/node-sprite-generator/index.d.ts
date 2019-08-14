// Type definitions for node-sprite-generator 0.10
// Project: https://github.com/selaux/node-sprite-generator#readme
// Definitions by: Gyusun Yeom <https://github.com/Perlmint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as e from "express";

export as namespace NodeSpriteGenerator;
export = NodeSpriteGenerator;

declare function NodeSpriteGenerator(option: NodeSpriteGenerator.Option, callback?: (err: Error) => void): void;

declare namespace NodeSpriteGenerator {
    type BuiltinStylesheetFormats = "stylus" | "less" | "sass" | "scss" | "css" | "prefixed-css" | "javascript";
    type BuiltinLayouts = "packed" | "vertical" | "horizontal" | "diagonal";
    type BuiltinCompositors = "canvas" | "gm" | "jimp";

    interface StylesheetOption {
        prefix?: string;
        nameMapping?(): string;
        spritePath?: string;
        pixelRatio?: number;
    }

    interface LayoutOption {
        padding?: number;
        scaling?: number;
    }

    type CompositorFilters = "all" | "none" | "sub" | "up" | "average" | "paeth";
    interface CompositorOption {
        compressionLevel?: number;
        filter?: CompositorFilters;
    }

    interface Image {
        width: number;
        height: number;
        data: any;
    }
    interface Compositor {
        readImages(files: string[], callback: (error: Error, images: Image[]) => void): void;
        render(layout: Layout, spritePath: string, options: CompositorOption, callback: (error: Error) => void): void;
    }
    interface Layout {
        width: number;
        height: number;
        images: Array<{
            x: number;
            y: number;
        } & Image>;
    }
    type LayoutFunc = (images: Image[], options: LayoutOption, callback: (error: Error, layout: Layout) => void) => void;

    type StylesheetFunc = (layout: Layout, stylesheetPath: string, spritePath: string, options: StylesheetOption, callback: (error: Error) => void) => void;

    interface Option {
        src?: string[];
        spritePath?: string;
        stylesheetPath?: string;
        stylesheet?: BuiltinStylesheetFormats | StylesheetFunc | string;
        stylesheetOptions?: StylesheetOption;
        layout?: BuiltinLayouts | LayoutFunc;
        layoutOptions?: LayoutOption;
        compositor?: BuiltinCompositors | Compositor;
        compositorOptions?: CompositorOption;
    }

    function middleware(option: Option): e.RequestHandler;
}
