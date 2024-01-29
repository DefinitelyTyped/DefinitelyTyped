declare namespace quantize {
    type RgbPixel = [number, number, number];

    interface PriorityQueue {
        debug: () => ColorObject[];
        map: <U>(callback: (item: ColorObject, index: number) => U) => U[];
        peek: (index?: number) => ColorObject;
        pop: () => ColorObject;
        push: (item: ColorObject) => void;
        size: () => number;
    }

    interface VBox {
        r1: number;
        r2: number;
        g1: number;
        g2: number;
        b1: number;
        b2: number;
        histo: number[];

        avg: (recalculate?: boolean) => RgbPixel;
        contains: (pixel: RgbPixel) => boolean;
        copy: () => VBox;
        count: () => number;
        volume: (recalculate?: boolean) => number;
    }

    interface ColorObject {
        color: RgbPixel;
        vbox: VBox;
    }

    interface ColorMap {
        vboxes: PriorityQueue;

        /**
         * Maps the pixel from source image to the closest palette color
         */
        map: (pixel: RgbPixel) => RgbPixel;
        nearest: (pixel: RgbPixel) => RgbPixel;
        /**
         * Returns the palette as an array of RgbPixel
         * @returns RgbPixel[][]
         */
        palette: () => RgbPixel[];
        push: (vbox: VBox) => void;
        /**
         * Returns the size of the palette
         */
        size: () => number;
    }
}

declare function quantize(pixels: quantize.RgbPixel[], colorCount: number): quantize.ColorMap | false;

export = quantize;
