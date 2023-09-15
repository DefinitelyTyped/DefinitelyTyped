import Source from "./Source";
import Extent from "../Core/Geographic/Extent";

declare class OrientedImageSource extends Source {
    constructor(source: {
        url: string;
        orientationsUrl: string;
        calibrationUrl: string;
    });

    readonly isOrientedImageSource: boolean;

    extentInsideLimit(extent: Extent, zoom: number): boolean;
    urlFromExtent(extent: Extent): string;

    // whenReady: Promise<{
    //     orientation: void | Object;
    //     calibration: void | Object;
    // }>;
    // urlFromExtent(imageInfo: {
    //     camera: string;
    //     pano: string;
    // }): string;
    // imageUrl(cameraId: string, panoId: string): string;
}

export default OrientedImageSource;
