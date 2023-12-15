// This file provides type definitions for PSD.js when it is used as a CommonJS
// package for Node.js.
// See browser.d.ts if you need to use the browser bundle of PSD.js.

/// <reference types="node" />

import { PNG } from "pngjs";
import { Promise } from "rsvp";

import { PSD } from "./psd";

declare module "./psd" {
    // The following methods are available only in the Node.js package

    namespace PSD {
        // lib/psd/init.coffee

        /**
         * Instantiates a new PSD object synchronously from the given file path.
         */
        function fromFile(file: string | Buffer | URL | number): PSD;
        /**
         * Instantiates a new PSD object asynchronously from the given file
         * path. This method also parses the PSD for you.
         */
        function open(file: string | Buffer | URL | number): Promise<PSD>;

        interface Image {
            // lib/psd/image_exports/png.coffee

            toPng(): PNG;
            saveAsPng(output: string | Buffer | URL): Promise<void>;
            maskToPng(): PNG;
            saveMaskAsPng(output: string | Buffer | URL): Promise<void>;
        }
    }
}

export = PSD;
