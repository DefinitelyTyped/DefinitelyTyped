import { Extent } from '../../extent';
import AtlasManager from '../../style/AtlasManager';
import WebGLTextureReplay from './TextureReplay';

export interface GlyphAtlas {
    atlas: AtlasManager;
    width: { [key: string]: number };
    height: number;
}
export default class WebGLTextReplay extends WebGLTextureReplay {
    constructor(tolerance: number, maxExtent: Extent);
}
