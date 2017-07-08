// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/DDSLoader.js

import {CompressedPixelFormat, CompressedTextureLoader} from "./three-core";

export class DDSLoader extends CompressedTextureLoader {

    constructor();

    parse(buffer: string, loadMipmaps: boolean) : { mipmaps: { data: Uint8Array, width: number, height: number }[], width: number, height: number, format: CompressedPixelFormat, mipmapCount: number };

}
