import ScreenBuffer = require("./ScreenBuffer");

declare class ScreenBufferHD extends ScreenBuffer {
    constructor(
        options: { blending: ScreenBufferHD.IsBlending } | ScreenBuffer.Options,
    );

    readonly blending: ScreenBufferHD.IsBlending;

    static loadImage(
        url: string,
        calback: (error?: any, image?: ScreenBufferHD) => void,
    ): void;

    static loadImage(
        url: string,
        options: { shrink?: { height: number; width: number } | undefined },
        callback: (error: any, image: ScreenBufferHD) => void,
    ): void;

    draw(
        options?: ScreenBuffer.DrawOptions | { blending: ScreenBufferHD.IsBlending },
    ): void;

    fill(
        options?:
            | {
                attr: ScreenBuffer.Attributes | number;
                char?: string | undefined;
            }
            | {
                attr: ScreenBufferHD.Attributes | number;
                char?: string | undefined;
            },
    ): void;
}

export = ScreenBufferHD;

declare namespace ScreenBufferHD {
    interface Attributes {
        r: number;
        g: number;
        b: number;
        a?: number | undefined;
        defaultColor?: boolean | undefined;
        bgR: number;
        bgG: number;
        bgB: number;
        bgA?: number | undefined;
        bgDefaultColor?: boolean | undefined;
        bold?: boolean | undefined;
        dim?: boolean | undefined;
        italic?: boolean | undefined;
        underline?: boolean | undefined;
        blink?: boolean | undefined;
        inverse?: boolean | undefined;
        hidden?: boolean | undefined;
        strike?: boolean | undefined;
        transparency?: boolean | undefined;
        styleTransparency?: boolean | undefined;
        charTransparency?: boolean | undefined;
    }

    type IsBlending = false | Blending;

    interface Blending {
        fn: BlendFunction;
        opacity: number;
        blendSrcFgWithDstBg: boolean;
    }

    type BlendFunction = (src: number, dst: number) => number;

    interface BlendFn {
        normal: BlendFunction;
        multiply: BlendFunction;
        screen: BlendFunction;
        overlay: BlendFunction;
        hardLight: BlendFunction;
        softLight: BlendFunction;
    }
}
