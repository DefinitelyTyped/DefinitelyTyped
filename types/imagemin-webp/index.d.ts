import { Plugin } from "imagemin";

/**
 * WebP imagemin plugin
 */
export default function imageminWebp(options?: Options): Plugin;

export type Preset = "default" | "photo" | "picture" | "drawing" | "icon" | "text";
export interface Resize {
    width: number;
    height: number;
}

export interface Crop extends Resize {
    x: number;
    y: number;
}

export type Metadata = "all" | "none" | "exif" | "icc" | "xmp";

export interface Options {
    /**
     * Preset setting.
     * @default default
     */
    preset?: Preset | undefined;
    /**
     * Set quality factor between 0 and 100.
     * @default 75
     */
    quality?: number | undefined;
    /**
     * Set transparency-compression quality between 0 and 100.
     * @default 100
     */
    alphaQuality?: number | undefined;
    /**
     * Specify the compression method to use,
     * between 0 (fastest) and 6 (slowest).
     * This parameter controls the trade off between encoding speed
     * and the compressed file size and quality.
     * @default 4
     */
    method?: number | undefined;
    /**
     * Set target size in bytes.
     */
    size?: number | undefined;
    /**
     * Set the amplitude of spatial noise shaping between 0 and 100.
     * @default 80
     */
    sns?: number | undefined;
    /**
     * Set deblocking filter strength between 0 (off) and 100.
     */
    filter?: number | undefined;
    /**
     * Adjust filter strength automatically.
     * @default false
     */
    autoFilter?: boolean | undefined;
    /**
     * Set filter sharpness between 0 (sharpest) and 7 (least sharp).
     * @default 0
     */
    sharpness?: number | undefined;
    /**
     * Encode images losslessly.
     * @default false
     */
    lossless?: boolean | undefined;
    /**
     * Encode losslessly with an additional lossy pre-processing step,
     * with a quality factor between
     * 0 (maximum pre-processing) and 100 (same as lossless).
     * @default 100
     */
    nearLossless?: number | undefined;
    /**
     * Crop the image.
     */
    crop?: Crop | undefined;
    /**
     * Resize the image. Happens after crop.
     */
    resize?: Resize | undefined;
    /**
     * A list of metadata to copy from the input to the output if present.
     */
    metadata?: Metadata | Metadata[] | undefined;
}
