/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references: https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

import { WebGLRenderer, WebGLRenderTarget, TextureDataType } from '../../../src/Three';

export const NO_COMPRESSION: 0;
export const ZIPS_COMPRESSION: 2;
export const ZIP_COMPRESSION: 3;

export interface EXRExporterParseOptions {
    compression?: number;
    type?: TextureDataType;
}

export class EXRExporter {
    parse(renderer: WebGLRenderer, renderTarget: WebGLRenderTarget, options?: EXRExporterParseOptions): Uint8Array;
}
