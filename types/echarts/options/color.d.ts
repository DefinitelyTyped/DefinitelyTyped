declare namespace echarts {
    namespace EChartOption {
        /**
         * Color type for itemStyle / areaStyle etc.
         * + string
         * + LinearGradient
         * + RadialGradient.
         * + Texture
         */
        type Color = string | LinearGradient | RadialGradient | Texture;

        /**
         * Linear gradient.
         *
         * First four parameters are x0, y0, x2, and y2, each ranged from 0 to 1, standing for percentage in the bounding box.
         *
         * If global is `true`, then the first four parameters are in absolute pixel positions.
         */
        interface LinearGradient {
            type: "linear";
            x: number;
            y: number;
            x2: number;
            y2: number;
            colorStops: ColorStops;
            global: boolean;
        }

        /**
         * Radial gradient.
         *
         * First three parameters are x and y positions of center, and radius, similar to linear gradient.
         */
        interface RadialGradient {
            type: "radial";
            x: number;
            y: number;
            r: number;
            colorStops: ColorStops;
            global: boolean;
        }

        /**
         * Fill with texture
         */
        interface Texture {
            /**
             * HTMLImageElement, and HTMLCanvasElement are supported, while string path is not supported
             */
            image: HTMLImageElement | HTMLCanvasElement;
            /**
             * whether to repeat texture, whose value can be repeat-x, repeat-y, or no-repeat
             */
            repeat?: "repeat" | "repeat-x" | "repeat-y" | "no-repeat" | undefined;
        }

        type ColorStops = Array<{
            offset: number;
            color: string;
        }>;
    }
}
