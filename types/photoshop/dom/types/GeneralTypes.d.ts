/**
 * This is a basic 2D, (X,Y) coordinate.  Most often it will be used in the context of a document's
 * bounds, where the origin is at the top-left corner.  In that case, the positive Y values go down from the origin.
 *
 * Used by [TextLayerCreateOptions](../../options/textlayercreateoptions/)
 * @targetfolder objects/options
 * @optionobject
 * @minVersion NA
 */
export interface Position {
    /**
     * @minVersion NA
     */
    x: number;
    /**
     * @minVersion NA
     */
    y: number;
}
/**
 * Basic rectangular area specified by four values.
 *
 * The values can be considered as specifying the top-left and bottom-right corners.
 * (`left`, `top`) & (`right`, `bottom`)
 *
 * Used by [DisplayConfiguration](./displayconfiguration)
 * Return object.
 * @targetfolder objects/returnobjects
 * @minVersion NA
 */
export interface SimpleBounds {
    /**
     * @minVersion NA
     */
    bottom: number;
    /**
     * @minVersion NA
     */
    left: number;
    /**
     * @minVersion NA
     */
    right: number;
    /**
     * @minVersion NA
     */
    top: number;
}
/**
 * Basic 2D area specification.
 *
 * Used by [DisplayConfiguration](./displayconfiguration)
 * Return object.
 * @targetfolder objects/returnobjects
 * @minVersion NA
 */
export interface Dimensions {
    /**
     * @minVersion NA
     */
    horizontal: number;
    /**
     * @minVersion NA
     */
    vertical: number;
}
