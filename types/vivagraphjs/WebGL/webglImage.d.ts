export = webglImage;
/**
 * Represents a model for image.
 */
declare function webglImage(
    size: any,
    src: any,
): {
    /**
     * Gets texture index where current image is placed.
     */
    _texture: number;
    /**
     * Gets offset in the texture where current image is placed.
     */
    _offset: number;
    /**
     * Gets size of the square with the image.
     */
    size: number;
    /**
     * Source of the image. If image is coming not from your domain
     * certain origin restrictions applies.
     * See http://www.khronos.org/registry/webgl/specs/latest/#4.2 for more details.
     */
    src: any;
};
