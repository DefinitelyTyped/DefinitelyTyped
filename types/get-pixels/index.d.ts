/// <reference types="node" />

import { NdArray } from "ndarray";

type Callback = (err: Error | null, pixels: NdArray<Uint8Array>) => void;

declare function getPixels(path: string, callback: Callback): void;
declare function getPixels(path: string | Uint8Array, type: string, callback: Callback): void;

export = getPixels;
