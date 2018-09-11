// Type definitions for react-imgpro 1.3
// Project: https://github.com/nitin42/react-imgpro
// Definitions by: Carlos Li <https://github.com/echoulen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

import ProcessImage = ReactImgpro.ProcessImage;
export default ProcessImage;

declare namespace ReactImgpro {
    type Mode = "neighbor" | "bilinear" | "bicubic" | "hermite" | "bezier";
    interface Shape {
        width?: number;
        height?: number;
        mode?: Mode;
    }
    interface Size {
        width: number;
        height: number;
        mode:
            "horizontal_left" |
            "horizontal_center" |
            "horizontal_right" |
            "vertical_top" |
            "vertical_bottom" |
            "vertical_middle";
    }
    interface ProcessImageProps {
        image: string;
        resize?: Shape;
        quality?: number;
        greyscale?: boolean;
        normalize?: boolean;
        invert?: boolean;
        opaque?: boolean;
        sepia?: boolean;
        dither565?: boolean;
        scale?: boolean;
        scaleToFitImage?: {
            width: number;
            height: number;
        };
        flip?: {
            horizontal?: boolean;
            vertical?: boolean;
        };
        rotate?: {
            degree: number;
            mode: Mode;
        };
        brightness?: number; /* should be -1 to 1 */
        contrast?: number; /* should be -1 to 1 */
        fade?: number; /* should be 0 - 1 */
        opacity?: number; /* should be 0 - 1 */
        blur?: number; /* should be 0 - 100 */
        posterize?: number; /* should be 0 - 100 */
        cover?: Size;
        contain?: Size;
        colors?: {
            lighten?: number;
            brighten?: number;
            darken?: number;
            desaturate?: number;
            saturate?: number;
            greyscale?: number;
            spin?: number;
            mix?: {
                color?: string;
                amount?: number;
            },
            tint?: number;
            xor?: number;
            shade?: number;
            red?: number;
            green?: number;
            blue?: number;
        };
        storage?: boolean;
        disableWebWorker?: boolean;
        disableRerender?: boolean;
        customCdn?: string;
        onProcessFinish: () => void;
    }

    class ProcessImage extends React.Component<ProcessImageProps> {}
}
