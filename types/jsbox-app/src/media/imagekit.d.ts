// JSBox Imagekit API TypeScript Declaration

declare namespace ImagekitTypes {
    interface ImageInfo {
        width: number;
        height: number;
        orientation: number;
        scale: number;
        props: UIImage["info"];
    }

    interface GIFExtractResult {
        images: UIImage[];
        durations: number[];
    }

    type GIFMakeOptions =
        | {
            duration: number;
            durations?: never;
            size?: number;
        }
        | {
            durations: number[];
            duration?: never;
            size?: number;
        };

    type VideoMakeOptions =
        | {
            duration: number;
            durations?: never;
        }
        | {
            durations: number[];
            duration?: never;
        };

    enum CropToMode {
        TopLeft = 0,
        TopCenter = 1,
        TopRight = 2,
        BottomLeft = 3,
        BottomCenter = 4,
        BottomRight = 5,
        LeftCenter = 6,
        RightCenter = 7,
        Center = 8,
    }

    enum ScaleToMode {
        scaleFill = 0,
        scaleAspectFit = 1,
        scaleAspectFill = 2,
    }

    enum OrientationMode {
        vertically = 0,
        horizontally = 1,
    }
}

interface JBImageKit {
    render(
        options: { size: JBSize; color?: UIColor; scale?: number; opaque?: boolean },
        handler: (ctx: BBCanvasContext) => void,
    ): UIImage;
    /** Get image information */
    info(image: UIImage): ImagekitTypes.ImageInfo;
    /** Get grayscaled image */
    grayscale(image: UIImage): UIImage;
    /** Invert colors */
    invert(image: UIImage): UIImage;
    /** Apply sepia filter */
    sepia(image: UIImage): UIImage;
    /** Enhance image automatically */
    adjustEnhance(image: UIImage): UIImage;
    /** Red-eye adjustment */
    adjustRedEye(image: UIImage): UIImage;
    /** Adjust brightness, value range: (-255, 255) */
    adjustBrightness(image: UIImage, value: number): UIImage;
    /** Adjust contrast, value range: (-255, 255) */
    adjustContrast(image: UIImage, value: number): UIImage;
    /** Adjust gamma value, value range: (0.01, 8) */
    adjustGamma(image: UIImage, value: number): UIImage;
    /** Adjust opacity, value range: (0, 1) */
    adjustOpacity(image: UIImage, value: number): UIImage;
    /** Apply gaussian blur */
    blur(image: UIImage, bias: number): UIImage;
    /** Emboss effect */
    emboss(image: UIImage, bias: number): UIImage;
    /** Sharpen */
    sharpen(image: UIImage, bias: number): UIImage;
    /** Unsharpen */
    unsharpen(image: UIImage, bias: number): UIImage;
    /** Edge detection */
    detectEdge(image: UIImage, bias: number): UIImage;
    /** Crop an image with mask */
    mask(image: UIImage, mask: UIImage): UIImage;
    /** Create an up-down reflected image, from height position, change alpha value from fromAlpha to toAlpha */
    reflect(image: UIImage, height: number, fromAlpha: number, toAlpha: number): UIImage;
    /** Crop an image */
    cropTo(image: UIImage, size: JBSize, mode: number): UIImage;
    /** Resize an image with scale */
    scaleBy(image: UIImage, value: number): UIImage;
    /** Resize an image to a specific size */
    scaleTo(image: UIImage, size: JBSize, mode: number): UIImage;
    /** Resize an image using scaleFill mode */
    scaleFill(image: UIImage, size: JBSize): UIImage;
    /** Resize an image using scaleAspectFit mode */
    scaleAspectFit(image: UIImage, size: JBSize): UIImage;
    /** Resize an image using scaleAspectFill mode */
    scaleAspectFill(image: UIImage, size: JBSize): UIImage;
    /** Rotate an image (it may change the size) */
    rotate(image: UIImage, radians: number): UIImage;
    /** Rotate an image (keeps the image size, some contents might be clipped) */
    rotatePixels(image: UIImage, radians: number): UIImage;
    /** Flip an image */
    flip(image: UIImage, mode: number): UIImage;
    /** Concatenate images with space */
    concatenate(images: UIImage[], space: number, mode: number): UIImage;
    /** Add mask directly on image */
    combine(image: UIImage, mask: UIImage, mode: number | JBPoint): UIImage;
    /** Get an image with rounded corners */
    rounded(image: UIImage, radius: number): UIImage;
    /** Get a circular image, it will be centered and clipped if the source image isn't a square */
    circular(image: UIImage): UIImage;
    /** Extract GIF data to frames */
    extractGIF(data: NSData): Promise<ImagekitTypes.GIFExtractResult>;
    /** Make GIF with image array or video data */
    makeGIF(images: UIImage[], options: ImagekitTypes.GIFMakeOptions): Promise<NSData>;
    /** Make video with image array or GIF data */
    makeVideo(source: UIImage[], options: ImagekitTypes.VideoMakeOptions): Promise<NSData>;
}

declare const $imagekit: JBImageKit;
