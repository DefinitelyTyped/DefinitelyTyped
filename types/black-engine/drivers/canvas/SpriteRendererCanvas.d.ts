export class SpriteRendererCanvas extends Renderer {
    pattern: CanvasPattern | null;
    patternTexture: Texture | null;
    sliceTextureCache: CanvasRenderTexture | null;
    sizeWidthCache: number | null;
    sizeHeightCache: number | null;
    textureCache: Texture;
    preRender(driver: any, session: any): void;
    renderSlice9Grid(driver: any, texture: any, grid: any): CanvasRenderTexture;
    render(driver: any, session: any): void;
}
import { Renderer } from '../Renderer';
import { Texture } from '../../textures/Texture';
import { CanvasRenderTexture } from '../../textures/CanvasRenderTexture';
