import * as e from "express";

export as namespace NodeSpriteGenerator;
export = NodeSpriteGenerator;

declare function NodeSpriteGenerator(option: NodeSpriteGenerator.Option, callback?: (err: Error) => void): void;

declare namespace NodeSpriteGenerator {
    type BuiltinStylesheetFormats = "stylus" | "less" | "sass" | "scss" | "css" | "prefixed-css" | "javascript";
    type BuiltinLayouts = "packed" | "vertical" | "horizontal" | "diagonal";
    type BuiltinCompositors = "canvas" | "gm" | "jimp";

    interface StylesheetOption {
        prefix?: string | undefined;
        nameMapping?(): string;
        spritePath?: string | undefined;
        pixelRatio?: number | undefined;
    }

    interface LayoutOption {
        padding?: number | undefined;
        scaling?: number | undefined;
    }

    type CompositorFilters = "all" | "none" | "sub" | "up" | "average" | "paeth";
    interface CompositorOption {
        compressionLevel?: number | undefined;
        filter?: CompositorFilters | undefined;
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
        images: Array<
            {
                x: number;
                y: number;
            } & Image
        >;
    }
    type LayoutFunc = (
        images: Image[],
        options: LayoutOption,
        callback: (error: Error, layout: Layout) => void,
    ) => void;

    type StylesheetFunc = (
        layout: Layout,
        stylesheetPath: string,
        spritePath: string,
        options: StylesheetOption,
        callback: (error: Error) => void,
    ) => void;

    interface Option {
        src?: string[] | undefined;
        spritePath?: string | undefined;
        stylesheetPath?: string | undefined;
        stylesheet?: BuiltinStylesheetFormats | StylesheetFunc | string | undefined;
        stylesheetOptions?: StylesheetOption | undefined;
        layout?: BuiltinLayouts | LayoutFunc | undefined;
        layoutOptions?: LayoutOption | undefined;
        compositor?: BuiltinCompositors | Compositor | undefined;
        compositorOptions?: CompositorOption | undefined;
    }

    function middleware(option: Option): e.RequestHandler;
}
