// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/DDSLoader.js

import { CompressedPixelFormat, CompressedTextureLoader } from "./three-core";

export interface Dds {
  mipmaps: ImageData[];
  width: number;
  height: number;
  format: CompressedPixelFormat;
  mipmapCount: number;
}

export class DDSLoader extends CompressedTextureLoader {
    constructor();
    parse(buffer: string, loadMipmaps: boolean) : Dds;
}
