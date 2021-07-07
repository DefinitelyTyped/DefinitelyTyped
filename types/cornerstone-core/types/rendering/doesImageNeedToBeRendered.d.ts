/**
 * Determine whether or not an Enabled Element needs to be re-rendered.
 *
 * If the imageId has changed, or if any of the last rendered viewport
 * parameters have changed, this function will return true.
 *
 * @param enabledElement An Enabled Element
 * @param image An Image
 * @return Whether or not the Enabled Element needs to re-render its image
 */
export default function _default(enabledElement: any, image: new (width?: number, height?: number) => HTMLImageElement): boolean;
