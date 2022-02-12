export = webglSquare;
/**
 * Can be used as a callback in the webglGraphics.node() function, to
 * create a custom looking node.
 *
 * @param size - size of the node in pixels.
 * @param color - color of the node in '#rrggbbaa' or '#rgb' format.
 */
declare function webglSquare(size: any, color: any): {
    /**
     * Gets or sets size of the square side.
     */
    size: number;
    /**
     * Gets or sets color of the square.
     */
    color: number;
};
