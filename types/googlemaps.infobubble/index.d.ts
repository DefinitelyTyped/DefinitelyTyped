/// <reference types="google-maps" />

/**
 * @name CSS3 InfoBubble with tabs for Google Maps API V3
 * @version 0.8
 * @author Luke Mahe
 * @file
 * This library is a CSS Infobubble with tabs. It uses css3 rounded corners and
 * drop shadows and animations. It also allows tabs
 */

/*
The MIT License

Copyright (c) 2014 https://github.com/Dashue

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

declare namespace google.maps.infobubble {
    export interface InfoBubble {
        /**
         * Closes the infobubble
         */
        close(): void;

        /**
         * Checks if the infobubble is currently open
         */
        isOpen(): boolean;

        /**
         * Opens the infobubble
         * @param map The google map object
         * @param marker The marker used for anchoring the infobubble to
         */
        open(map: google.maps.Map, marker: google.maps.Marker): void;

        /**
         * Returns the position of the InfoBubble
         */
        getPosition(): google.maps.LatLng;
    }

    export interface InfoBubbleOptions {
        /**
         * Percentage from the bottom left corner of the infobubble
         */
        arrowPosition?: number | undefined;

        arrowSize?: number | undefined;

        /**
         * 0: Middle, 1: Left, 2: Right
         */
        arrowStyle?: number | undefined;

        backgroundColor?: string | undefined;

        borderColor?: string | undefined;

        borderRadius?: number | undefined;

        borderWidth?: number | undefined;

        disableAnimation?: boolean | undefined;

        disableAutoPan?: boolean | undefined;

        maxHeight?: number | undefined;

        maxWidth?: number | undefined;

        minHeight?: number | undefined;

        minWidth?: number | undefined;

        padding?: number | undefined;

        /**
         * 0: None, 1: Right, 2: Under
         */
        shadowStyle?: number | undefined;
    }
}
