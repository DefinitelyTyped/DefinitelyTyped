// Type definitions for react-swf
// Project: https://github.com/syranide/react-swf
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
export as namespace ReactSWF;
declare const self: typeof rswf.ReactSWF;
export = self;

declare namespace rswf {
    interface State {

    }
    interface Props {
        /**
        * Specifies the source location (URL) of the SWF file to load.
        */
        src: string;
        /**
        *  Identifies the location of the Flash Player plug-in so that the user can download it if it is not already installed.
        */
        pluginspage?:string
        /**
        * Specifies the width of the SWF content in either pixels or percentage of browser window.
        */
        width?: number;
        /**
        * Specifies the height of the SWF content in either pixels or percentage of browser window.
        */
        height?: number;
        /**
        * (attribute for OBJECT tag) and name (attribute for EMBED tag) - SWF file identifier. Identifies the SWF file to the web browser, allowing browser scripting languages (for example, JavaScript) to reference the SWF content. For cross-browser compatibility, make sure that the id and name are set to the same value.
        */
        id?: string;
        /**
        * Specifies whether a timeline-based SWF file begins playing immediately on loading in the browser. If this attribute is omitted, the default value is true.
        */
        play?: boolean;
        /**
        * Specifies whether a timeline-based SWF file repeats indefinitely or stops when it reaches the last frame. If this attribute is omitted, the default value is true.
        */
        loop?: boolean;
        /**
        * Specifies if movie playback controls are available in the Flash Player context menu.
        * true displays a full menu that provides expanded movie playback controls (for example, Zoom, Quality, Play, Loop, Rewind, Forward, Back).
        * false displays a menu that hides movie playback controls (for example, Zoom, Quality, Play, Loop, Rewind, Forward, Back). This attribute is useful for SWF content that does not rely on the Timeline, such as content controlled entirely by ActionScript. The short menu includes "Settings" and "About Flash Player" menu items.
        */
        menu?: boolean;
        /**
        * Possible values: low, autolow, autohigh, medium, high, best. Specifies the display list Stage rendering quality. Setting the Stage.quality property via ActionScript overrides this value.
        * low favors playback speed over appearance and never uses anti-aliasing.
        * autolow emphasizes speed at first but improves appearance whenever possible. Playback begins with anti-aliasing turned off. If Flash Player detects that the processor can handle it, anti-aliasing is turned on.
        * autohigh emphasizes playback speed and appearance equally at first but sacrifices appearance for playback speed if necessary. Playback begins with anti-aliasing turned on. If the actual frame rate drops below the specified frame rate, anti-aliasing is turned off to improve playback speed. Use this setting to emulate the View > Antialias setting in Flash Professional.
        * medium applies some anti-aliasing and does not smooth bitmaps. It produces a better quality than the Low setting, but lower quality than the High setting.
        * high favors appearance over playback speed and always applies anti-aliasing. If the movie does not contain animation, bitmaps are smoothed; if the movie has animation, bitmaps are not smoothed.
        * best provides the best display quality and does not consider playback speed. All output is anti-aliased and all bitmaps are smoothed.
        */
        quality?: string;
        /**
        *  Possible values: showall, noborder, exactfit, noscale. Specifies how Flash Player scales SWF content to fit the pixel area specified by the OBJECT or EMBED tag.
        *  default (Show all) makes the entire SWF file visible in the specified area without distortion, while maintaining the original aspect ratio of the movie. Borders can appear on two sides of the movie.
        *  noborder scales the SWF file to fill the specified area, while maintaining the original aspect ratio of the file. Flash Player can crop the content, but no distortion occurs.
        *  exactfit makes the entire SWF file visible in the specified area without trying to preserve the original aspect ratio. Distortion can occur.
        *  noscale prevents the SWF file from scaling to fit the area of the OBJECT or EMBED tag. Cropping can occur.
        */
        scale?: string;
        /**
        * (attribute for Object) - Possible values: l, t, r.
        * Default centers the movie in the browser window and crops edges if the browser window is smaller than the movie.
        * l (left), r (right), and t (top) align the movie along the corresponding edge of the browser window and crop the remaining three sides as needed.
        */
        align?: string;
        /**
        * Possible values: l, t, r, tl, tr.
        * l, r, and t align the movie along the left, right, or top edge of the browser window and crop the remaining sides as needed.
        * tl and tr align the movie to the upper-left and top upper-corner of the browser window and crop the bottom and remaining side as necessary.
        */
        salign?: string;
        /**
        * Possible values: window, direct, opaque, transparent, gpu. Sets the Window Mode property of the SWF file for transparency, layering, positioning, and rendering in the browser. If this attribute is omitted, the default value is "window". For more information, see Using Window Mode (wmode) values below.
        * window - The SWF content plays in its own rectangle ("window") on a web page. The browser determines how the SWF content is layered against other HTML elements. With this value, you cannot explicitly specify if SWF content appears above or below other HTML elements on the page.
        * direct - Use direct to path rendering. This attribute bypasses compositing in the screen buffer and renders the SWF content directly to the screen. This wmode value is recommended to provide the best performance for content playback. It enables hardware accelerated presentation of SWF content that uses Stage Video or Stage 3D.
        * opaque - The SWF content is layered together with other HTML elements on the page. The SWF file is opaque and hides everything layered behind it on the page. This option reduces playback performance compared to wmode=window or wmode=direct.
        * transparent - The SWF content is layered together with other HTML elements on the page. The SWF file background color (Stage color) is transparent. HTML elements beneath the SWF file are visible through any transparent areas of the SWF, with alpha blending. This option reduces playback performance compared to wmode=window or wmode=direct.
        * gpu - Use additional hardware acceleration on some Internet-connected TVs and mobile devices. In contrast to other wmode values, pixel fidelity for display list graphics is not guaranteed. Otherwise, this value is similar to wmode=direct.
        */
        wmode?: string;
        /**
        * [hexadecimal RGB value] in the format #RRGGBB. Specifies the background color of the SWF content. Use this attribute to override the background color (Stage color) setting specified in the SWF file. (This attribute does not affect the background color of the HTML page.)
        */
        bgcolor?: string;
        /**
        * [base directory] or [URL]. Specifies the base directory or URL used to resolve all relative path statements in the SWF file. This attribute is helpful when your SWF file is kept in a different directory from your other files.
        */
        base?: string;
        /**
        * Setting this value to true allows the SWF file to enter full screen mode via ActionScript. For more information, see Exploring full screen mode in Flash Player. If this attribute is omitted, the default value is false.
        */
        allowFullScreen?: boolean;
        /**
        *  Possible values: portrait or landscape. Used to control how full screen SWF content appears on mobile devices that support automatic screen rotation, such as phones and tablets. If this attribute is specified, Flash Player uses the specified screen orientation (portrait or landscape) when the SWF is viewed in full screen mode. It doesn't matter how the device is oriented. If this attribute is not specified, orientation of content in full screen mode follows the screen orientation used by the browser.
        */
        fullScreenAspectRatio?: string;
        /**
        * Variables, defined as a string of key=value pairs, that are passed to the SWF file.
        * Use flashvars to specify root-level variables in the SWF file. The format of the string is a set of key=value combinations separated by the '&' character.
        * Browsers support string sizes of up to 64 KB (65535 bytes) in length.
        * For more information on using flashvars, see Using FlashVars to pass variables to a SWF (tn_16417).
        */
        flashVars?: Object | string
    }
    export class ReactSWF extends React.Component<Props, State>{
        /**
        * Returns the Flash Player object DOM node.
        * Should be prefered over `React.findDOMNode`.
        * @return {?DOMNode} Flash Player object DOM node.
        */
        getFPDOMNode(): Node
        /**
        * Returns installed Flash Player version. Result is cached.
        * Must not be called in a non-browser environment.
        * @return {?string} 'X.Y.Z'-version or null.
        */
        static getFPVersion(): string
        /**
        * Returns if installed Flash Player meets version requirement.
        * Must not be called in a non-browser environment.
        * @return {boolean} true if supported
        */
        static isFPVersionSupported(versionString: string): boolean
    }

}
