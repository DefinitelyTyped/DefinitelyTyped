export class TextRenderer extends Renderer {
    texture: Texture;
    private mTransformCache;
    private mTransform;
    private mUseTransformCache;
    private mCanvas;
    private mContext;
    private mMetrics;
    preRender(driver: any, session: any): void;
    upload(driver: any, session: any): void;
    private renderSegment;
    render(driver: any, session: any): void;
    updateTransform(): void;
}
import { Renderer } from './Renderer';
import { Texture } from '../textures/Texture';
