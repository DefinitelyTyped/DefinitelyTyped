import { Extent } from 'ol/extent';
import WebGLTextureReplay from 'ol/render/webgl/TextureReplay';
import AtlasManager from 'ol/style/AtlasManager';
export interface GlyphAtlas {
    atlas: AtlasManager;
    width: { [key: string]: number };
    height: number;
}
export default class WebGLTextReplay extends WebGLTextureReplay {
    constructor(tolerance: number, maxExtent: Extent);
}
