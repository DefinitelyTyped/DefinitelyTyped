import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";
import { WebTwainIO } from "./WebTwain.IO";

export interface WebTwainBuffer extends WebTwainIO {
    /**
     * Return the current deviation of the pixels in the image.
     */
    readonly BlankImageCurrentStdDev: number;
    /**
     * Return or set the standard deviation of the pixels in the image.
     */
    BlankImageMaxStdDev: number;
    /**
     * Return or set the dividing line between black and white. The default value is 128.
     */
    BlankImageThreshold: number;
    /**
     * Return or set how much physical memory is allowed for storing images currently loaded in Dynamic Web TWAIN. Once the limit is reached, images will be cached on the hard disk.
     */
    BufferMemoryLimit: number;
    /**
     * Remove all tags from the specified image.
     * @param index Specify the image.
     */
    ClearImageTags(index: number): boolean;
    /**
     * Return or set the current index of image in the buffer.
     */
    CurrentImageIndexInBuffer: number;
    /**
     * Filter images by the specified tag.
     * @param tag The tag used as the filter.
     */
    FilterImagesByTag(tag: string): boolean;
    /**
     * Return the pixel bit depth of the specified image.
     * @param index Specify the image.
     */
    GetImageBitDepth(index: number): number;
    /**
     * Return the height (in pixels) of the specified image.
     * @param index Specify the image.
     */
    GetImageHeight(index: number): number;
    /**
     * Return the internal URL of the specified image. If width and height are not specified,
     * you get the original image, otherwise you get the image with specified width or height
     * while keeping the same aspect ratio. The returned string is like this
     * 'dwt://dwt_trial_13000404/img?id=306159652&index=0&t=1502184632022'.
     * @param index Specify the image.
     * @param width the width of the image, it must be 150 or bigger
     * @param height the height of the image, it must be 150 or bigger
     */
    GetImagePartURL(index: number, width?: number, height?: number): string;
    /**
     * Calculate the size in bytes of the specified image assuming it's resized to the given dimensions.
     * @param index Specify the image.
     * @param width Specify the width.
     * @param height Specify the height.
     */
    GetImageSize(index: number, width: number, height: number): number;
    /**
     * Calculate the size in bytes of the specified image assuming an expected file type.
     * @param index Specify the image.
     * @param type Sepcify the expected file type.
     */
    GetImageSizeWithSpecifiedType(index: number, type: Dynamsoft.EnumDWT_ImageType | number): number;
    /**
     * Return the direct URL of the specified image, if width or height is set to -1,
     * you get the original image, otherwise you get the image with specified width or
     * height while keeping the same aspect ratio.
     * @param index Specify the image.
     * @param width Specify the width.
     * @param height Specify the height.
     */
    GetImageURL(index: number, width?: number, height?: number): string;
    /**
     * Return the width (in pixels) of the specified image.
     * @param index Specify the image.
     */
    GetImageWidth(index: number): number;
    /**
     * Return the horizontal resolution of the specified image.
     * @param index Specify the image.
     */
    GetImageXResolution(index: number): number;
    /**
     * Return the vertical resolution of the specified image.
     * @param index Specify the image.
     */
    GetImageYResolution(index: number): number;
    /**
     * [Deprecation] Return an index from the selected indices array. Read SelectedImagesIndices instead.
     * [Alternative] Read SelectedImagesIndices instead.
     * @param indexOfIndices Specify the index of the specified image.
     */
    GetSelectedImageIndex(indexOfIndices: number): number;
    /**
     * Calculate the size in bytes of all selected images assuming an expected file type.
     * @param type Sepcify the expected file type.
     */
    GetSelectedImagesSize(type: Dynamsoft.EnumDWT_ImageType | number): number;
    /**
     * Return the skew angle of the specified image.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument angle The skew angle.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    GetSkewAngle(
        index: number,
        successCallback?: (
            angle: number) => void,
        failureCallback?: (
            errorCode: number,
            errorString: string) => void
    ): number | void;
    /**
     * Return the skew angle of the specified rectangle on the specified image.
     * @param index Specify the image.
     * @param left The x-coordinate of the upper-left corner of the rectangle.
     * @param top The y-coordinate of the upper-left corner of the rectangle.
     * @param right The x-coordinate of the lower-right corner of the rectangle.
     * @param bottom The y-coordinate of the lower-right corner of the rectangle.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument angle The skew angle.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    GetSkewAngleEx(
        index: number,
        left: number,
        top: number,
        right: number,
        bottom: number,
        successCallback?: (
            angle: number) => void,
        failureCallback?: (
            errorCode: number,
            errorString: string) => void
    ): number | void;
    /**
     * Return how many images are held in the buffer
     */
    readonly HowManyImagesInBuffer: number;
    /**
     * Return or set whether the feature of disk caching is enabled.
     */
    IfAllowLocalCache: boolean;
    /**
     * Return the imageId of an image specified by the index.
     * @param index The index of the image.
     */
    IndexToImageID(index: number): number;
    /**
     * Return the index of an image specified by the imageId.
     * @param imageId The imageId of the image.
     */
    ImageIDToIndex(imageId: number): number;
    /**
     * Check whether the specified image is blank.
     * @param index Specify the image.
     */
    IsBlankImage(index: number): boolean;
    /**
     * [Deprecation] Detect whether a certain area on an image is blank.
     * [Alternative] Use IsBlankImage or IsBlankImageExpress instead.
     * @param index Specify the image.
     * @param left The x-coordinate of the upper-left corner of the rectangle.
     * @param top The y-coordinate of the upper-left corner of the rectangle.
     * @param right The x-coordinate of the lower-right corner of the rectangle.
     * @param bottom The y-coordinate of the lower-right corner of the rectangle.
     * @param bFuzzyMatch Specify whether use fuzzy matching when detecting.
     */
    IsBlankImageEx(index: number, left: number, top: number, right: number, bottom: number, bFuzzyMatch: boolean): boolean;
    /**
     * Check whether the specified image is blank.
     * @param index Specify the image.
     */
    IsBlankImageExpress(index: number): boolean;
    /**
     * Return or set how many images can be held in the buffer.
     */
    MaxImagesInBuffer: number;
    /**
     * Change the position of an image in the buffer.
     * @param from Specify the original position by index.
     * @param to Specify the target position by index.
     */
    MoveImage(from: number, to: number): boolean;
    /**
     * Remove all images in the buffer.
     */
    RemoveAllImages(): boolean;
    /**
     * Remove the selected images in the buffer.
     */
    RemoveAllSelectedImages(): boolean;
    /**
     * Remove the specified image.
     * @param index Specify the image.
     */
    RemoveImage(index: number): boolean;
    /**
     * Select all images and return the indices.
     */
    SelectAllImages(): number[];
    /**
     * [Deprecation] Return how many images are selected.
     * [Alternative] Read the length of SelectedImagesIndices instead.
     */
    SelectedImagesCount: number;
    /**
     * Return the indices of the selected images.
     */
    readonly SelectedImagesIndices: number[];
    /**
     * Select the specified images.
     * @param indices Specify one or multiple images.
     */
    SelectImages(indices: number[]): boolean;
    /**
     * Specify a aspect ratio to be used when selecting a rectangle on an image.
     */
    SelectionRectAspectRatio: number;
    /**
     * Set a default tag for newlay acquired images.
     * @param tag Specifies the tag.
     */
    SetDefaultTag(tag: string): boolean;
    /**
     * [Deprecation] You can use the method to select images programatically.
     * [Alternative] Use SelectImages() or SelectAllImages() instead.
     * @param indexOfIndices The index of an array that holds the indices of selected images.
     * @param index The index of an image that you want to select.
     */
    SetSelectedImageIndex(indexOfIndices: number, index: number): boolean;
    /**
     * Exchange the positions of two images.
     * @param index1 Specify the 1st image.
     * @param index2 Specify the 2nd image.
     */
    SwitchImage(index1: number, index2: number): boolean;
    /**
     * Add a tag to specified images.
     * @param indices Specifies images to be tagged.
     * @param tag Specify the tag.
     */
    TagImages(indices: number[], tag: string): boolean;
}
