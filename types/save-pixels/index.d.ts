// Type definitions for save-pixels 2.3
// Project: https://github.com/mikolalysenko/save-pixels#readme
// Definitions by: Don McCurdy <https://github.com/donmccurdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { NdArray } from "ndarray";
import * as Stream from "stream";

// Function overloads. Most types return a Stream, except 'canvas'. Quality option only available for
// JPEG format. See https://www.npmjs.com/package/save-pixels#requiresave-pixelsarray-type-options.
declare function savePixels(array: NdArray, type: "png" | "gif"): Stream;
declare function savePixels(array: NdArray, type: "canvas"): HTMLCanvasElement;
declare function savePixels(array: NdArray, type: "jpeg" | "jpg", options?: { quality?: number }): Stream;

export = savePixels;
