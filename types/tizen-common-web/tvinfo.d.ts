/**
 * The Available keys for the caption menu.
 * - `CAPTION_ONOFF_KEY` - caption state
 * - `CAPTION_MODE_KEY` - caption mode
 * - `CAPTION_FONT_SIZE_KEY` - caption font size
 * - `CAPTION_FONT_STYLE_KEY` - caption font style
 * - `CAPTION_FONT_COLOR_KEY` - caption font color
 * - `CAPTION_FONT_OPACITY_KEY` - caption font opacity mode
 * - `CAPTION_BG_COLOR_KEY` - caption background color
 * - `CAPTION_BG_OPACITY_KEY` - caption background opacity mode
 * - `CAPTION_EDGE_TYPE_KEY` - caption text edge type
 * - `CAPTION_EDGE_COLOR_KEY` - caption edge color
 * - `CAPTION_WINDOW_COLOR_KEY` - caption window color (only US)
 * - `CAPTION_WINDOW_OPACITY_KEY` - caption window opacity mode (only US)
 * @since 2.4
 */

export enum CaptionInfoKey {
    CAPTION_ONOFF_KEY = 'CAPTION_ONOFF_KEY',
    CAPTION_MODE_KEY = 'CAPTION_MODE_KEY',
    CAPTION_FONT_SIZE_KEY = 'CAPTION_FONT_SIZE_KEY',
    CAPTION_FONT_STYLE_KEY = 'CAPTION_FONT_STYLE_KEY',
    CAPTION_FONT_COLOR_KEY = 'CAPTION_FONT_COLOR_KEY',
    CAPTION_FONT_OPACITY_KEY = 'CAPTION_FONT_OPACITY_KEY',
    CAPTION_BG_COLOR_KEY = 'CAPTION_BG_COLOR_KEY',
    CAPTION_BG_OPACITY_KEY = 'CAPTION_BG_OPACITY_KEY',
    CAPTION_EDGE_TYPE_KEY = 'CAPTION_EDGE_TYPE_KEY',
    CAPTION_EDGE_COLOR_KEY = 'CAPTION_EDGE_COLOR_KEY',
    CAPTION_WINDOW_COLOR_KEY = 'CAPTION_WINDOW_COLOR_KEY',
    CAPTION_WINDOW_OPACITY_KEY = 'CAPTION_WINDOW_OPACITY_KEY',
}

/**
 * Available values for the caption state.
 * These values may be returned for key CAPTION_ONOFF_KEY.
 * - `CAPTION_OFF` - caption menu is turned off
 * - `CAPTION_ON` - caption menu is turned on
 * @since 2.4
 */
export enum CaptionState {
    CAPTION_OFF = 'CAPTION_OFF',
    CAPTION_ON = 'CAPTION_ON',
}

/**
 * Available values for the caption menu mode.
 * These values may be returned for key CAPTION_MODE_KEY.
 * - `CAPTION_MODE_DEFAULT` - default mode
 * - `CAPTION_MODE_SERVICE1` - standard service 1 (Primary Caption Service)
 * - `CAPTION_MODE_SERVICE2` - standard service 2 (Secondary Language Service)
 * - `CAPTION_MODE_SERVICE3` - standard service 3
 * - `CAPTION_MODE_SERVICE4` - standard service 4
 * - `CAPTION_MODE_SERVICE5` - standard service 5
 * - `CAPTION_MODE_SERVICE6` - standard service 6
 * - `CAPTION_MODE_CC1` - Primary Synchronous Caption Service
 * - `CAPTION_MODE_CC2` - Special Non-Synchronous Service
 * - `CAPTION_MODE_CC3` - Secondary Synchronous Caption Service
 * - `CAPTION_MODE_CC4` - Special Non-Synchronous Service
 * - `CAPTION_MODE_TEXT1` - Text Service 1
 * - `CAPTION_MODE_TEXT2` - Text Service 2
 * - `CAPTION_MODE_TEXT3` - Text Service 3
 * - `CAPTION_MODE_TEXT4` - Text Service 4
 * @since 2.4
 */
export enum CaptionMode {
    CAPTION_MODE_DEFAULT = 'CAPTION_MODE_DEFAULT',
    CAPTION_MODE_SERVICE1 = 'CAPTION_MODE_SERVICE1',
    CAPTION_MODE_SERVICE2 = 'CAPTION_MODE_SERVICE2',
    CAPTION_MODE_SERVICE3 = 'CAPTION_MODE_SERVICE3',
    CAPTION_MODE_SERVICE4 = 'CAPTION_MODE_SERVICE4',
    CAPTION_MODE_SERVICE5 = 'CAPTION_MODE_SERVICE5',
    CAPTION_MODE_SERVICE6 = 'CAPTION_MODE_SERVICE6',
    CAPTION_MODE_CC1 = 'CAPTION_MODE_CC1',
    CAPTION_MODE_CC2 = 'CAPTION_MODE_CC2',
    CAPTION_MODE_CC3 = 'CAPTION_MODE_CC3',
    CAPTION_MODE_CC4 = 'CAPTION_MODE_CC4',
    CAPTION_MODE_TEXT1 = 'CAPTION_MODE_TEXT1',
    CAPTION_MODE_TEXT2 = 'CAPTION_MODE_TEXT2',
    CAPTION_MODE_TEXT3 = 'CAPTION_MODE_TEXT3',
    CAPTION_MODE_TEXT4 = 'CAPTION_MODE_TEXT4',
}

/**
 * Available values for the caption menu font size.
 * These values may be returned for key CAPTION_FONT_SIZE_KEY.
 * - CAPTION_SIZE_DEFAULT - default font size
 * - CAPTION_SIZE_SMALL - small font size
 * - CAPTION_SIZE_STANDARD - standard font size
 * - CAPTION_SIZE_LARGE - large font size
 * - CAPTION_SIZE_EXTRA_LARGE - extra large font size
 * @since 2.4
 */
export enum CaptionFontSize {
    CAPTION_SIZE_DEFAULT = 'CAPTION_SIZE_DEFAULT',
    CAPTION_SIZE_SMALL = 'CAPTION_SIZE_SMALL',
    CAPTION_SIZE_STANDARD = 'CAPTION_SIZE_STANDARD',
    CAPTION_SIZE_LARGE = 'CAPTION_SIZE_LARGE',
    CAPTION_SIZE_EXTRA_LARGE = 'CAPTION_SIZE_EXTRA_LARGE',
}

/**
 * Available values for the caption menu font style.
 * These values may be returned for key CAPTION_FONT_STYLE_KEY.
 * - `CAPTION_FONT_DEFAULT` - default font style
 * - `CAPTION_FONT_STYLE1` - Monospaced with serifs (similar to Courier)
 * - `CAPTION_FONT_STYLE2` - Proportionally spaced with serifs (similar to Times New Roman)
 * - `CAPTION_FONT_STYLE3` - Monospaced without serifs (similar to Helvetica Monospaced)
 * - `CAPTION_FONT_STYLE4` - Proportionally spaced without serifs (similar to Arial and Swiss)
 * - `CAPTION_FONT_STYLE5` - Casual font type (similar to Dom and Impress)
 * - `CAPTION_FONT_STYLE6` - Cursive font type (similar to Coronet and Marigold)
 * - `CAPTION_FONT_STYLE7` - Small capitals (similar to Engravers Gothic)
 * @since 2.4
 */
export enum CaptionFontStyle {
    CAPTION_FONT_DEFAULT = 'CAPTION_FONT_DEFAULT',
    CAPTION_FONT_STYLE0 = 'CAPTION_FONT_STYLE0',
    CAPTION_FONT_STYLE1 = 'CAPTION_FONT_STYLE1',
    CAPTION_FONT_STYLE2 = 'CAPTION_FONT_STYLE2',
    CAPTION_FONT_STYLE3 = 'CAPTION_FONT_STYLE3',
    CAPTION_FONT_STYLE4 = 'CAPTION_FONT_STYLE4',
    CAPTION_FONT_STYLE5 = 'CAPTION_FONT_STYLE5',
    CAPTION_FONT_STYLE6 = 'CAPTION_FONT_STYLE6',
    CAPTION_FONT_STYLE7 = 'CAPTION_FONT_STYLE7',
}

/**
 * Available values for the caption menu color.
 * These values may be returned for keys CAPTION_FONT_COLOR_KEY, CAPTION_BG_COLOR_KEY, CAPTION_EDGE_COLOR_KEY and CAPTION_WINDOW_COLOR_KEY.
 * @since 2.4
 */
export enum CaptionColor {
    CAPTION_COLOR_DEFAULT = 'CAPTION_COLOR_DEFAULT',
    CAPTION_COLOR_WHITE = 'CAPTION_COLOR_WHITE',
    CAPTION_COLOR_BLACK = 'CAPTION_COLOR_BLACK',
    CAPTION_COLOR_RED = 'CAPTION_COLOR_RED',
    CAPTION_COLOR_GREEN = 'CAPTION_COLOR_GREEN',
    CAPTION_COLOR_BLUE = 'CAPTION_COLOR_BLUE',
    CAPTION_COLOR_YELLOW = 'CAPTION_COLOR_YELLOW',
    CAPTION_COLOR_MAGENTA = 'CAPTION_COLOR_MAGENTA',
    CAPTION_COLOR_CYAN = 'CAPTION_COLOR_CYAN',
}

/**
 * Available values for the caption menu opacity.
 * These values may be returned for keys CAPTION_FONT_OPACITY_KEY, CAPTION_BG_OPACITY_KEY and CAPTION_WINDOW_OPACITY_KEY.
 * @since 2.4
 */
export enum CaptionOpacity {
    CAPTION_OPACITY_SOLID = 'CAPTION_OPACITY_SOLID',
    CAPTION_OPACITY_FLASHING = 'CAPTION_OPACITY_FLASHING',
    CAPTION_OPACITY_TRANSLUCENT = 'CAPTION_OPACITY_TRANSLUCENT',
    CAPTION_OPACITY_TRANSPARENT = 'CAPTION_OPACITY_TRANSPARENT',
    CAPTION_OPACITY_DEFAULT = 'CAPTION_OPACITY_DEFAULT',
}

/**
 * Available values for the caption menu edge type.
 * These values may be returned for key CAPTION_EDGE_TYPE_KEY.
 * - `CAPTION_EDGE_NONE` - no edge
 * - `CAPTION_EDGE_RAISED` - raised edge
 * - `CAPTION_EDGE_DEPRESSED` - depressed edge
 * - `CAPTION_EDGE_UNIFORM` - uniform edge
 * - `CAPTION_EDGE_DROP_SHADOWED` - drop shadowed edge
 * @since 2.4
 */
export enum CaptionEdge {
    CAPTION_EDGE_NONE = 'CAPTION_EDGE_NONE',
    CAPTION_EDGE_RAISED = 'CAPTION_EDGE_RAISED',
    CAPTION_EDGE_DEPRESSED = 'CAPTION_EDGE_DEPRESSED',
    CAPTION_EDGE_UNIFORM = 'CAPTION_EDGE_UNIFORM',
    CAPTION_EDGE_DROP_SHADOWED = 'CAPTION_EDGE_DROP_SHADOWED',
}

/**
 * All available values for the caption menu.
 */

export interface CaptionValueChangeCallback {
    (
        key: CaptionInfoKey,
        value: CaptionState &
            CaptionMode &
            CaptionFontSize &
            CaptionFontStyle &
            CaptionColor &
            CaptionOpacity &
            CaptionEdge,
    ): void;
}

/**
 * The TVInfo API provides functions to get settings values that are provided by the Tizen TV.
 * @since 2.4
 */
export interface TVInfoManager {
    /**
     * Method returns the value for corresponding caption menu key.
     * @returns CaptionValue value for given caption menu key
     * @param key Caption menu
     * @throw WebAPIException TypeMismatchError, UnknownError
     * @since 2.4
     */
    getCaptionValue(
        key:
            | CaptionInfoKey
            | 'CAPTION_ONOFF_KEY'
            | 'CAPTION_MODE_KEY'
            | 'CAPTION_FONT_SIZE_KEY'
            | 'CAPTION_FONT_STYLE_KEY'
            | 'CAPTION_FONT_COLOR_KEY'
            | 'CAPTION_FONT_OPACITY_KEY'
            | 'CAPTION_BG_COLOR_KEY'
            | 'CAPTION_BG_OPACITY_KEY'
            | 'CAPTION_EDGE_TYPE_KEY'
            | 'CAPTION_EDGE_COLOR_KEY'
            | 'CAPTION_WINDOW_COLOR_KEY'
            | 'CAPTION_WINDOW_OPACITY_KEY',
    ): CaptionState & CaptionMode & CaptionFontSize & CaptionFontStyle & CaptionColor & CaptionOpacity & CaptionEdge;

    /**
     * Adds a listener to be called when given caption menu key value changes.
     * @returns CaptionValue value for given caption menu key
     * @param key Caption menu key which changes will be observed by this listener
     * @param callback Callback method to be invoked when the value changes
     * @throw WebAPIException TypeMismatchError, InvalidValuesError, UnknownError
     * @since 2.4
     */
    addCaptionValueChangeListener(
        key:
            | CaptionInfoKey
            | 'CAPTION_ONOFF_KEY'
            | 'CAPTION_MODE_KEY'
            | 'CAPTION_FONT_SIZE_KEY'
            | 'CAPTION_FONT_STYLE_KEY'
            | 'CAPTION_FONT_COLOR_KEY'
            | 'CAPTION_FONT_OPACITY_KEY'
            | 'CAPTION_BG_COLOR_KEY'
            | 'CAPTION_BG_OPACITY_KEY'
            | 'CAPTION_EDGE_TYPE_KEY'
            | 'CAPTION_EDGE_COLOR_KEY'
            | 'CAPTION_WINDOW_COLOR_KEY'
            | 'CAPTION_WINDOW_OPACITY_KEY',
        callback: CaptionValueChangeCallback,
    ): number;

    /**
     * Removes a listener.
     * Calling this function has no effect if there is no listener with given id.
     * @param watchId Identifier of the subscription returned by addCaptionValueChangeListener()
     * @throw WebAPIException UnknownError
     * @since 2.4
     */
    removeCaptionValueChangeListener(watchId: number): void;
}
