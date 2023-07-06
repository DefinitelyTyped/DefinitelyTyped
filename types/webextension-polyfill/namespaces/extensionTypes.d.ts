//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.extensionTypes
 *
 * The <code>browser.extensionTypes</code> API contains type declarations for WebExtensions.
 *
 * Comments found in source JSON schema files:
 * Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Manifest } from "./manifest";

export namespace ExtensionTypes {
    /**
     * The format of an image.
     */
    type ImageFormat = "jpeg" | "png";

    /**
     * Details about the format, quality, area and scale of the capture.
     */
    interface ImageDetails {
        /**
         * The format of the resulting image.  Default is <code>"jpeg"</code>.
         * Optional.
         */
        format?: ImageFormat;

        /**
         * When format is <code>"jpeg"</code>, controls the quality of the resulting image.  This value is ignored for PNG images.
         * As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store
         * it will decrease.
         * Optional.
         */
        quality?: number;

        /**
         * The area of the document to capture, in CSS pixels, relative to the page.  If omitted, capture the visible viewport.
         * Optional.
         */
        rect?: ImageDetailsRectType;

        /**
         * The scale of the resulting image.  Defaults to <code>devicePixelRatio</code>.
         * Optional.
         */
        scale?: number;

        /**
         * If true, temporarily resets the scroll position of the document to 0. Only takes effect if rect is also specified.
         * Optional.
         */
        resetScrollPosition?: boolean;
    }

    /**
     * The soonest that the JavaScript or CSS will be injected into the tab.
     */
    type RunAt = "document_start" | "document_end" | "document_idle";

    /**
     * The origin of the CSS to inject, this affects the cascading order (priority) of the stylesheet.
     */
    type CSSOrigin = "user" | "author";

    /**
     * Details of the script or CSS to inject. Either the code or the file property must be set,
     * but both may not be set at the same time.
     */
    interface InjectDetails {
        /**
         * JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using the <code>code</code> parameter.
         * Incorrect use of it may open your extension to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">
         * cross site scripting</a> attacks.
         * Optional.
         */
        code?: string;

        /**
         * JavaScript or CSS file to inject.
         * Optional.
         */
        file?: string;

        /**
         * If allFrames is <code>true</code>, implies that the JavaScript or CSS should be injected into all frames of current page.
         * By default, it's <code>false</code> and is only injected into the top frame.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has
         * access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is <code>false</code>.
         * Optional.
         */
        matchAboutBlank?: boolean;

        /**
         * The ID of the frame to inject the script into. This may not be used in combination with <code>allFrames</code>.
         * Optional.
         */
        frameId?: number;

        /**
         * The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
         * Optional.
         */
        runAt?: RunAt;

        /**
         * The css origin of the stylesheet to inject. Defaults to "author".
         * Optional.
         */
        cssOrigin?: CSSOrigin;
    }

    type DateType = string | number | Date;

    type ExtensionFileOrCode = ExtensionFileOrCodeC1Type | ExtensionFileOrCodeC2Type;

    /**
     * A plain JSON value
     */
    interface PlainJSONValue {
        [s: string]: unknown;
    }

    /**
     * The area of the document to capture, in CSS pixels, relative to the page.  If omitted, capture the visible viewport.
     */
    interface ImageDetailsRectType {
        x: number;

        y: number;

        width: number;

        height: number;
    }

    interface ExtensionFileOrCodeC1Type {
        file: Manifest.ExtensionURL;
    }

    interface ExtensionFileOrCodeC2Type {
        code: string;
    }

    interface Static {
        [s: string]: unknown;
    }
}
