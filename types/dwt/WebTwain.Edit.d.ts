import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";
import { WebTwainBuffer } from "./WebTwain.Buffer";

export interface WebTwainEdit extends WebTwainBuffer {
    /**
     * Show the built-in image editor. If called without any arguments while the editor is open, it'll close the editor.
     * @param divId Specify a div element to hold the editor.
     * @param width Specify the width of the editor.
     * @param height Specify the height of the editor.
     */
    ShowImageEditor(
        divId?: string,
        width?: number,
        height?: number
    ): boolean;
    /**
     * Change the bit depth of the specified image.
     * @param index Specify the image.
     * @param bitDepth Specify the bit depth.
     * @param highQuality Whether to keep high quality.
     */
    ChangeBitDepth(
        index: number,
        bitDepth: number,
        highQuality: boolean,
    ): boolean;
    /**
     * Change the size of the specified image.
     * @param index Specify the image.
     * @param width Specify the new width.
     * @param height Specify the new height.
     * @param method Specify the algorithm for the change.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    ChangeImageSize(
        index: number,
        width: number,
        height: number,
        method: Dynamsoft.EnumDWT_InterpolationMethod | number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Change the DPI (dots per inch) of the specified image.
     * @param index Specify the image.
     * @param xResolution Specify the horizontal DPI.
     * @param yResolution Specify the vertical DPI.
     * @param resample Whether to resample the image.
     * @param method Specify the algorithm for the change.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SetDPI(
        index: number,
        xResolution: number,
        yResolution: number,
        resample: boolean,
        method: Dynamsoft.EnumDWT_InterpolationMethod | number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Convert the specified image to black & white.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    ConvertToBW(
        index: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Convert the specified image to grayscale.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    ConvertToGrayScale(
        index: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Invert the colour of the pixels on the specified image.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Invert(
        index: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Change the width of the specified image by adding a margin or removing part of the image.
     * @param index Specify the image.
     * @param width Specify the new width.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    SetImageWidth(
        index: number,
        width: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Flip the specified image.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Flip(
        index: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Mirror the specified image.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Mirror(
        index: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Rotate the specified image 90 degrees counterclockwise.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    RotateLeft(
        index: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Rotate the specified image 90 degrees clockwise.
     * @param index Specify the image.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    RotateRight(
        index: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Rotate the specified image by the specified angle.
     * @param index Specify the image.
     * @param angle Specify the angle.
     * @param keepSize Whether to keep the original size.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Rotate(
        index: number,
        angle: number,
        keepSize: boolean,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Rotate the specified image by the specified angle.
     * @param index Specify the image.
     * @param angle Specify the angle.
     * @param keepSize Whether to keep the original size.
     * @param method Specify the algorithm for the change.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    RotateEx(
        index: number,
        angle: number,
        keepSize: boolean,
        method: Dynamsoft.EnumDWT_InterpolationMethod | number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Crop the specified image using the specified coordinates.
     * @param index Specify the image.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param right Specify the rectangle (rightmost coordinate).
     * @param bottom Specify the rectangle (bottommost coordinate).
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Crop(
        index: number,
        left: number,
        top: number,
        right: number,
        bottom: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Erase a rectangular area from the specified image.
     * @param index Specify the image.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param right Specify the rectangle (rightmost coordinate).
     * @param bottom Specify the rectangle (bottommost coordinate).
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    Erase(
        index: number,
        left: number,
        top: number,
        right: number,
        bottom: number,
        successCallback?: () => void,
        failureCallback?: (
            errorCode: number,
            errorString: string
        ) => void
    ): void | boolean;
    /**
     * Copy the specified image to the clipboard of the operating system.
     * @param index Specify the image.
     */
    CopyToClipboard(index: number): boolean;
    /**
     * Cut the specified image to the clipboard of the operating system.
     * @param index Specify the image.
     */
    CutToClipboard(index: number): boolean;
    /**
     * Crop a rectangular area from the specified image to the clipboard of the operating system.
     * @param index Specify the image.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param right Specify the rectangle (rightmost coordinate).
     * @param bottom Specify the rectangle (bottommost coordinate).
     */
    CropToClipboard(
        index: number,
        left: number,
        top: number,
        right: number,
        bottom: number
    ): boolean;
    /**
     * Cut a rectangular area from the specified image to the clipboard of the operating system.
     * @param index Specify the image.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param right Specify the rectangle (rightmost coordinate).
     * @param bottom Specify the rectangle (bottommost coordinate).
     */
    CutFrameToClipboard(
        index: number,
        left: number,
        top: number,
        right: number,
        bottom: number
    ): boolean;
    /**
     * Return or set the fill colour for the empty area on an image that has been cut/cropped/erased.
     */
    BackgroundFillColor: number;
    /**
     * [Deprecation] Add text on an image.
     * [Alternative] Annotation feature to be added in a later version.
     * @param index  the index of the image that you want to add text to.
     * @param x the x coordinate for the text.
     * @param y the y coordinate for the text.
     * @param text the content of the text that you want to add.
     * @param txtColor  the color for the text.
     * @param backgroundColor  the background color.
     * @param backgroundRoundRadius ranging from 0 to 0.5. Please NOTE that MAC version does not support this parameter.
     * @param backgroundOpacity specifies the opacity of the background of the added text, it ranges from 0 to 1.0. Please NOTE that Mac version only supports value 0 and 1
     */
    AddText(
        index: number,
        x: number,
        y: number,
        text: string,
        txtColor: number,
        backgroundColor: number,
        backgroundRoundRadius: number,
        backgroundOpacity: number
    ): boolean;
    /**
     * [Deprecation] Create the font for adding text using the method AddText.
     * [Alternative] Annotation feature to be added in a later version.
     * @param height Specifies the desired height (in logical units) of the font.
     * The absolute value of nHeight must not exceed 16,384 device units after it is converted.
     * For all height comparisons, the font mapper looks for the largest font that does not
     * exceed the requested size or the smallest font if all the fonts exceed the requested size.
     * @param width Specifies the average width (in logical units) of characters in the font.
     * If Width is 0, the aspect ratio of the device will be matched against the digitization
     * aspect ratio of the available fonts to find the closest match, which is determined by the
     * absolute value of the difference.
     * @param escapement Specifies the angle (in 0.1-degree units) between the escapement vector
     * and the x-axis of the display surface. The escapement vector is the line through the origins
     * of the first and last characters on a line. The angle is measured counterclockwise from the x-axis.
     * @param orientation Specifies the angle (in 0.1-degree units) between the baseline of a character
     * and the x-axis.The angle is measured counterclockwise from the x-axis for coordinate systems
     * in which the y-direction is down and clockwise from the x-axis for coordinate systems in which
     * the y-direction is up.
     * @param weight Specifies the font weight (in inked pixels per 1000). The described valuesare
     * approximate; the actual appearance depends on the typeface. Some fonts haveonly FW_NORMAL,
     * FW_REGULAR, and FW_BOLD weights. If FW_DONTCARE is specified, a default weight is used.
     * @param italic  Specifies an italic font if set to TRUE.
     * @param underline Specifies an underlined font if set to TRUE.
     * @param strikeOut A strikeout font if set to TRUE.
     * @param charSet Specifies the font's character set. The OEM character set is system-dependent.
     * Fonts with other character sets may exist in the system. An application that uses a font with
     * an unknown character set must not attempt to translate or interpret strings that are to be
     * rendered with that font.
     * @param outputPrecision Specifies the desired output precision. The output precision defines
     * how closely the output must match the requested font's height, width, character orientation,
     * escapement, and pitch.
     * @param clipPrecision Specifies the desired clipping precision. The clipping precision defines
     * how to clip characters that are partially outside the clipping region.
     * @param quality Specifies the font's output quality, which defines how carefully the GDI must
     * attempt to match the logical-font attributes to those of an actual physical font.
     * @param pitchAndFamily The pitch and family of the font.
     * @param faceName The typeface name, the length of this string must not exceed 32 characters,
     * including the terminating null character.
     */
    CreateTextFont(
        height: number,
        width: number,
        escapement: number,
        orientation: number,
        weight: number,
        italic: number,
        underline: number,
        strikeOut: number,
        charSet: number,
        outputPrecision: number,
        clipPrecision: number,
        quality: number,
        pitchAndFamily: number,
        faceName: string
    ): boolean;
    /**
     * [Deprecation] Decorates image of a specified index in buffer with rectangles of transparent color.
     * [Alternative] Annotation feature to be added in a later version.
     * @param index specifies the index of image in buffer. The index is 0-based.
     * @param left Specify the rectangle (leftmost coordinate).
     * @param top Specify the rectangle (topmost coordinate).
     * @param right Specify the rectangle (rightmost coordinate).
     * @param bottom Specify the rectangle (bottommost coordinate).
     * @param color Specifies the fill color of the rectangle. The byte-ordering of the RGB value is 0xBBGGRR. BB represents blue, GG represents green, RR represents red.
     * @param fOpacity Specifies the opacity of the rectangle. The value represents opacity. 1.0 is 100% opaque and 0.0 is totally transparent.
     */
    OverlayRectangle(
        index: number,
        left: number,
        top: number,
        right: number,
        bottom: number,
        color: number,
        fOpacity: number
    ): boolean;
}
