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
        options: { size: JBSize; color: string; scale?: number; opaque?: boolean },
        handler: (ctx: BBCanvasContext) => void,
    ): UIImage;
    info(image: UIImage): ImagekitTypes.ImageInfo; // Get image information
    grayscale(image: UIImage): UIImage; // Get grayscaled image
    invert(image: UIImage): UIImage; // Invert colors
    sepia(image: UIImage): UIImage; // Apply sepia filter
    adjustEnhance(image: UIImage): UIImage; // Enhance image automatically
    adjustRedEye(image: UIImage): UIImage; // Red-eye adjustment
    adjustBrightness(image: UIImage, value: number): UIImage;
    // Adjust brightness, value range: (-255, 255)
    adjustContrast(image: UIImage, value: number): UIImage;
    // Adjust contrast, value range: (-255, 255)
    adjustGamma(image: UIImage, value: number): UIImage;
    // Adjust gamma value, value range: (0.01, 8)
    adjustOpacity(image: UIImage, value: number): UIImage;
    // Adjust opacity, value range: (0, 1)
    blur(image: UIImage, bias: number): UIImage; // Apply gaussian blur
    emboss(image: UIImage, bias: number): UIImage; // Emboss effect
    sharpen(image: UIImage, bias: number): UIImage; // Sharpen
    unsharpen(image: UIImage, bias: number): UIImage; // Unsharpen
    detectEdge(image: UIImage, bias: number): UIImage; // Edge detection
    mask(image: UIImage, mask: UIImage): UIImage; // Crop an image with mask
    reflect(image: UIImage, height: number, fromAlpha: number, toAlpha: number): UIImage;
    // Create an up-down reflected image, from height position, change alpha value from fromAlpha to toAlpha
    cropTo(image: UIImage, size: JBSize, mode: number): UIImage;
    // Crop an image
    scaleBy(image: UIImage, value: number): UIImage;
    // Resize an image with scale
    scaleTo(image: UIImage, size: JBSize, mode: number): UIImage;
    // Resize an image to a specific size
    scaleFill(image: UIImage, size: JBSize): UIImage;
    // Resize an image using scaleFill mode
    scaleAspectFit(image: UIImage, size: JBSize): UIImage;
    // Resize an image using scaleAspectFit mode
    scaleAspectFill(image: UIImage, size: JBSize): UIImage;
    // Resize an image using scaleAspectFill mode
    rotate(image: UIImage, radians: number): UIImage;
    // Rotate an image (it may change the size)
    rotatePixels(image: UIImage, radians: number): UIImage;
    // Rotate an image (keeps the image size, some contents might be clipped)
    flip(image: UIImage, mode: number): UIImage;
    // Flip an image
    concatenate(images: UIImage[], space: number, mode: number): UIImage;
    // Concatenate images with space
    combine(image: UIImage, mask: UIImage, mode: number | JBPoint): UIImage;
    // Add mask directly on image
    rounded(image: UIImage, radius: number): UIImage;
    // Get an image with rounded corners
    circular(image: UIImage): UIImage;
    // Get a circular image, it will be centered and clipped if the source image isn't a square
    extractGIF(data: NSData): Promise<ImagekitTypes.GIFExtractResult>;
    // Extract GIF data to frames
    makeGIF(images: UIImage[], options: ImagekitTypes.GIFMakeOptions): Promise<NSData>;
    // Make GIF with image array or video data
    makeVideo(source: UIImage[], options: ImagekitTypes.VideoMakeOptions): Promise<NSData>;
    // Make video with image array or GIF data
}

declare const $imagekit: JBImageKit;
