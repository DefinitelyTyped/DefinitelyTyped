// Type definitions for get-pixels 3.3
// Project: https://github.com/scijs/get-pixels#readme
// Definitions by: Don McCurdy <https://github.com/donmccurdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { NdArray } from "ndarray";

type Callback = (err: Error | null, pixels: NdArray<Uint8Array>) => void;

declare function getPixels(path: string, callback: Callback): void;
declare function getPixels(path: string | Uint8Array, type: string, callback: Callback): void;

export = getPixels;
