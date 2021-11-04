import { Extent } from '../../extent';
import WebGLContext from '../../webgl/Context';
import WebGLReplay from './Replay';
import Locations from './texturereplay/defaultshader/Locations';

export default class WebGLTextureReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
    protected anchorX: number;
    protected anchorY: number;
    protected defaultLocations: Locations;
    protected groupIndices: number[];
    protected height: number;
    protected hitDetectionGroupIndices: number[];
    protected imageHeight: number;
    protected imageWidth: number;
    protected opacity: number;
    protected originX: number;
    protected originY: number;
    protected rotateWithView: boolean;
    protected rotation: number;
    protected scale: number;
    protected width: number;
    protected createTextures(
        textures: WebGLTexture[],
        images: (HTMLCanvasElement | HTMLImageElement | HTMLVideoElement)[],
        texturePerImage: { [key: string]: WebGLTexture },
        gl: WebGLRenderingContext
    ): void;
    protected drawCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number): number;
    protected drawReplaySkipping(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, textures: WebGLTexture[], groupIndices: number[]): void;
    protected getHitDetectionTextures(): WebGLTexture[];
    protected getTextures(opt_all?: boolean): WebGLTexture[];
}
