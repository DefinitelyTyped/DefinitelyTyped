/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references:
 * https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

import { DataTexture, TextureDataType, WebGLRenderer, WebGLRenderTarget } from "../../../src/Three.js";

export const NO_COMPRESSION: 0;
export const ZIPS_COMPRESSION: 2;
export const ZIP_COMPRESSION: 3;

export interface EXRExporterParseOptions {
    compression?: number;
    type?: TextureDataType;
}

export class EXRExporter {
    parse(renderer: WebGLRenderer, renderTarget: WebGLRenderTarget, options?: EXRExporterParseOptions): Uint8Array;
    parse(dataTexture: DataTexture, options?: EXRExporterParseOptions): Uint8Array;
}
