export interface ImageSmoothingContext {
    imageSmoothingEnabled: boolean;
    msImageSmoothingEnabled: boolean;
}
/**
 * Context options to disable image smoothing.
 */
export const IMAGE_SMOOTHING_DISABLED: ImageSmoothingContext;
/**
 * Context options to enable image smoothing.
 */
export const IMAGE_SMOOTHING_ENABLED: ImageSmoothingContext;
