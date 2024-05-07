// This file provides type definitions for the browser bundle of PSD.js, which
// must be included via a <script> tag.
// To use this type definition, add the following line in your code:
//
///   /// <reference types="psd/browser" />

/// <reference lib="dom" />

import { Promise } from "rsvp";

import { PSD as PSD_ } from "./psd";

declare module "./psd" {
    // The following functions are available only in the browser build

    namespace PSD {
        // shims/init.coffee

        function fromURL(url: string): Promise<PSD>;
        function fromEvent(e: DragEvent | InputEvent): Promise<PSD>;
        function fromDroppedFile(file: Blob): Promise<PSD>;

        interface Image {
            // shims/png.coffee

            toBase64(): string;
            toPng(): HTMLImageElement;

            // This always throws
            /**
             * Not available in the browser, use {@linkcode toPng()} instead.
             * @deprecated
             */
            saveAsPng(): never;
        }
    }
}

declare global {
    var PSD: typeof PSD_;
}
