import * as React from "react";

import ProcessImage = ReactImgpro.ProcessImage;
export default ProcessImage;

declare namespace ReactImgpro {
    type Mode = "neighbor" | "bilinear" | "bicubic" | "hermite" | "bezier";
    interface Shape {
        width?: number | undefined;
        height?: number | undefined;
        mode?: Mode | undefined;
    }
    interface Size {
        width: number;
        height: number;
        mode:
            | "horizontal_left"
            | "horizontal_center"
            | "horizontal_right"
            | "vertical_top"
            | "vertical_bottom"
            | "vertical_middle";
    }
    interface ProcessImageProps {
        image: string;
        resize?: Shape | undefined;
        quality?: number | undefined;
        greyscale?: boolean | undefined;
        normalize?: boolean | undefined;
        invert?: boolean | undefined;
        opaque?: boolean | undefined;
        sepia?: boolean | undefined;
        dither565?: boolean | undefined;
        scale?: boolean | undefined;
        scaleToFitImage?: {
            width: number;
            height: number;
        } | undefined;
        flip?: {
            horizontal?: boolean | undefined;
            vertical?: boolean | undefined;
        } | undefined;
        rotate?: {
            degree: number;
            mode: Mode;
        } | undefined;
        brightness?: number | undefined; /* should be -1 to 1 */
        contrast?: number | undefined; /* should be -1 to 1 */
        fade?: number | undefined; /* should be 0 - 1 */
        opacity?: number | undefined; /* should be 0 - 1 */
        blur?: number | undefined; /* should be 0 - 100 */
        posterize?: number | undefined; /* should be 0 - 100 */
        cover?: Size | undefined;
        contain?: Size | undefined;
        colors?: {
            lighten?: number | undefined;
            brighten?: number | undefined;
            darken?: number | undefined;
            desaturate?: number | undefined;
            saturate?: number | undefined;
            greyscale?: number | undefined;
            spin?: number | undefined;
            mix?: {
                color?: string | undefined;
                amount?: number | undefined;
            } | undefined;
            tint?: number | undefined;
            xor?: number | undefined;
            shade?: number | undefined;
            red?: number | undefined;
            green?: number | undefined;
            blue?: number | undefined;
        } | undefined;
        storage?: boolean | undefined;
        disableWebWorker?: boolean | undefined;
        disableRerender?: boolean | undefined;
        customCdn?: string | undefined;
        onProcessFinish: () => void;
    }

    class ProcessImage extends React.Component<ProcessImageProps> {}
}
