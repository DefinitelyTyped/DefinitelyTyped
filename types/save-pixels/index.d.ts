/// <reference types="node" />

import { NdArray } from "ndarray";
import * as Stream from "stream";

// Function overloads. Most types return a Stream, except 'canvas'. Quality option only available for
// JPEG format. See https://www.npmjs.com/package/save-pixels#requiresave-pixelsarray-type-options.
declare function savePixels(array: NdArray, type: "png" | "gif"): Stream;
declare function savePixels(array: NdArray, type: "canvas"): HTMLCanvasElement;
declare function savePixels(array: NdArray, type: "jpeg" | "jpg", options?: { quality?: number | undefined }): Stream;

export = savePixels;
