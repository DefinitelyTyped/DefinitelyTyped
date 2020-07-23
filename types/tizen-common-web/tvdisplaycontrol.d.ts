import { ErrorCallback } from './tizen';
/**
 * This API provides interfaces for managing stereoscopic 3D effects
 * for television signals.
 *
 * Modern TVs and projectors can display two images, a left image and a right image,
 * which are displayed to the left and right eyes respectively. This technique creates
 * an illusion of depth, which is perceived by users as a 3D image.
 *
 * For more information about stereoscopy, see this
 * [Wikipedia article](http://en.wikipedia.org/wiki/Stereoscopy).
 *
 * There are several formats of input images supported by the stereoscopy
 * plugin:
 * - `Side-by-side` - Left and right images are merged into one
 *                   picture. The left image is at the left side and the right image is at the right
 *                   side. Both images are scaled to fit in the original
 *                   image ratio
 * - `Top-bottom` - Left and right images are merged into one
 *                 picture. The left image is at the top and the right image is at the bottom.
 *                 Both images are scaled to fit in the original image ratio
 * - `Line-by-line` - Left and right images are interlaced by row.
 *                   The first row belongs to the left image and the second row
 *                   belongs to the right image, and so on
 * - `Vertical-strip` - Left and right images are interlaced by column.
 *                     The first column belongs to the left image and the second column
 *                     belongs to the right image, and so on
 * - `Frame-sequence` - Left and right images are interlaced by frames
 *
 * Advanced devices are able to computationally generate depth
 * data by processing non-stereoscopic images. Depth data is used
 * to render left and right stereoscopic images from a source image which lacks
 * this information. The quality of such stereoscopic images depends
 * on the computational power used for processing, the algorithms used and the properties
 * of the source data. For more information see this
 * [Wikipedia article](http://en.wikipedia.org/wiki/2D_to_3D_conversion).
 *
 * There will be a `tizen.tvdisplaycontrol` object that allows accessing the
 * functionality of the display control API.
 *
 *
 * @since 2.3
 *
 * @defAPIFeature http://tizen.org/feature/tv.display
 * To guarantee the running of this application on a device with a TV display control support, define the following requirements in the config file:
 */
export interface TVDisplayControlManager {
    /**
     * Gets the current 3D effect mode.
     *
     * @returns Display3DEffectMode The current mode of 3D effect.
     * @throw WebAPIException  `SecurityError`, `NotSupportedError`, `UnknownError`.
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.display
     * @warning 5.0 http://tizen.org/privilege/tv.display (public level) has been deprecated since 5.0.
     */
    get3DEffectMode():
        | Display3DEffectMode
        | 'OFF'
        | 'TOP_BOTTOM'
        | 'SIDE_BY_SIDE'
        | 'LINE_BY_LINE'
        | 'VERTICAL_STRIPE'
        | 'FRAME_SEQUENCE'
        | 'CHECKER_BD'
        | 'FROM_2D_TO_3D';

    /**
     * Checks whether playing 3D mode is available or not.
     *
     * @returns Display3DModeState The current state to display 3D contents.
     * @throw WebAPIException `SecurityError`, `NotSupportedError`, `UnknownError`
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.display
     * @warning 5.0 http://tizen.org/privilege/tv.display (public level) has been deprecated since 5.0.
     */
    is3DModeEnabled(): Display3DModeState | 'NOT_CONNECTED' | 'NOT_SUPPORTED' | 'READY';

    /**
     * Gets the supported 3D effects.
     *
     * @param successCallback The method to invoke when a list of supported 3D modes is retrieved successfully.
     * @param errorCallback The method to invoke when an error occurs.
     * @throw WebAPIException `TypeMismatchError`, `SecurityError`
     * @privilegeLevel 5.0 public
     * @privilegeName 5.0 http://tizen.org/privilege/tv.display
     * @warning 5.0 http://tizen.org/privilege/tv.display (public level) has been deprecated since 5.0.
     */
    getSupported3DEffectModeList(successCallback: Mode3DEffectListSupportCallback, errorCallback?: ErrorCallback): void;
}

/**
 * An enumerator to indicate 3D effect mode.
 *  - `OFF` - identifier for 3DEffect mode off
 *  - `TOP_BOTTOM` - Left image at the top, right image at the bottom
 *  - `SIDE_BY_SIDE` - Left image at the left side, right image at the right side
 *  - `LINE_BY_LINE` - Left and right image interlaced by row
 *  - `VERTICAL_STRIP` - Left and right image interlaced by column
 *  - `FRAME_SEQUENCE` -  Left and right image interlaced by frame
 *  - `CHECKER_BD` - Checkerboard (only for PC or game console sources)
 *  - `FROM_2D_TO_3D` - Left and right image computed from non-stereoscopic image
 */
export enum Display3DEffectMode {
    OFF = 'OFF',
    TOP_BOTTOM = 'TOP_BOTTOM',
    SIDE_BY_SIDE = 'SIDE_BY_SIDE',
    LINE_BY_LINE = 'LINE_BY_LINE',
    VERTICAL_STRIPE = 'VERTICAL_STRIPE',
    FRAME_SEQUENCE = 'FRAME_SEQUENCE',
    CHECKER_BD = 'CHECKER_BD',
    FROM_2D_TO_3D = 'FROM_2D_TO_3D',
}

/**
 * An enumerator to indicate 3D mode state.
 * - `NOT_CONNECTED` - The device (e.g. Blu-ray player) supports 3D mode but a 3D display is not connected.
 * - `NOT_SUPPORTED` - The device does not support 3D mode.
 * - `READY` - The device supports 3D mode and it can display 3D mode.
 */
export enum Display3DModeState {
    NOT_CONNECTED = 'NOT_CONNECTED',
    NOT_SUPPORTED = 'NOT_SUPPORTED',
    READY = 'READY',
}

/**
 * This interface defines a callback when a list of supported 3D modes is retrieved successfully.
 */
export interface Mode3DEffectListSupportCallback {
    /**
     * Method invoked when the list of 3D modes is retrieved successfully.
     * @param mode3DEffects A list of supported 3D effect modes.
     */
    (mode3DEffects: Display3DEffectMode[]): void;
}
