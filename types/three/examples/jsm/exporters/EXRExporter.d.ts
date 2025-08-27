/**
 * @author sciecode / https://github.com/sciecode
 *
 * EXR format references:
 * https://www.openexr.com/documentation/openexrfilelayout.pdf
 */

import { DataTexture, TextureDataType, WebGLRenderer, WebGLRenderTarget } from "three";
import { WebGPURenderer } from "three/webgpu";

export const NO_COMPRESSION: 0;
export const ZIPS_COMPRESSION: 2;
export const ZIP_COMPRESSION: 3;

export interface EXRExporterParseOptions {
    compression?: number;
    type?: TextureDataType;
}

export class EXRExporter {
    parse(
        renderer: WebGLRenderer | WebGPURenderer,
        renderTarget: WebGLRenderTarget,
        options?: EXRExporterParseOptions,
    ): Promise<Uint8Array>;
    parse(dataTexture: DataTexture, options?: EXRExporterParseOptions): Promise<Uint8Array>;
}
