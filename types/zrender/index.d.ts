// Type definitions for zrender 4.0
// Project: https://github.com/ecomfe/zrender
// Definitions by: Roman <https://github.com/iRON5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

type ImagePatternRepeat = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
interface ImagePatternObject {
    image: any;
    repeat?: ImagePatternRepeat;

    /**
     * Width and height of image.
     * `imageWidth` and `imageHeight` are only used in svg-ssr renderer.
     * Because we can't get the size of image in svg-ssr renderer.
     * They need to be give explictly.
     */
    imageWidth?: number;
    imageHeight?: number;
}
interface SVGPatternObject {
    svgElement?: any;
    svgWidth?: number;
    svgHeight?: number;
}

type PatternObject = ImagePatternObject | SVGPatternObject;
declare namespace zrender {
    type X = number;
    type Y = number;
    type X2 = number;
    type Y2 = number;
    type GlobalCoords = boolean;
    type ColorStops = Array<{
        offset: number;
        color: string;
    }>;
    type CanvasLineCap = "butt" | "round" | "square";
    type CanvasLineJoin = "bevel" | "miter" | "round";
    interface PathStyleProps {
        fill?: string;
        stroke?: string;
        decal?: PatternObject;
        /**
         * Still experimental, not works weel on arc with edge cases(large angle).
         */
        strokePercent?: number;
        strokeNoScale?: boolean;
        fillOpacity?: number;
        strokeOpacity?: number;

        /**
         * `true` is not supported.
         * `false`/`null`/`undefined` are the same.
         * `false` is used to remove lineDash in some
         * case that `null`/`undefined` can not be set.
         * (e.g., emphasis.lineStyle in echarts)
         */
        lineDash?: false | number[] | 'solid' | 'dashed' | 'dotted';
        lineDashOffset?: number;
        lineWidth?: number;
        lineCap?: CanvasLineCap;
        lineJoin?: CanvasLineJoin;
        miterLimit?: number;
        /**
         * Paint order, if do stroke first. Similar to SVG paint-order
         * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/paint-order
         */
        strokeFirst?: boolean;
    }

    /**
     * x, y, x2, y2 are all percent from 0 to 1
     */
    interface LinearGradient {
        new (
            /** @default 0 */
            x?: X,

            /** @default 0 */
            y?: Y,

            /** @default 1 */
            x2?: X2,

            /** @default 0 */
            y2?: Y2,

            /** @default [] */
            colorStops?: ColorStops,

            /** @default false */
            globalCoord?: GlobalCoords,
        ): {
            type: 'linear';
            x: X;
            y: Y;
            x2: X2;
            y2: Y2;
            colorStops: ColorStops;
            global: GlobalCoords;

            addColorStop(offset: number, color: string): void;
        };
    }

    namespace graphic {
        interface Path {
            strokeContainThreshold?: number;
            segmentIgnoreThreshold?: number;
            subPixelOptimize?: boolean;
            style?: PathStyleProps;
            shape?: Record<string, any>;
            autoBatch?: boolean;
            __value?: Array<(string | number)> | (string | number);
            buildPath?: (
                ctx: any,
                shapeCfg: Record<string, any>,
                inBatch?: boolean
            ) => void;
        }
    }
}

declare module 'zrender' {
    export = zrender;
}
