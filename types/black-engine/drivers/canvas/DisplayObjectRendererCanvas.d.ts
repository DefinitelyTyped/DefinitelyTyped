export class DisplayObjectRendererCanvas extends Renderer {
    private mCacheAsBitmapDirty;
    private mCacheAsBitmapMatrixCache;
    private mCacheTexture;
    private mCacheBounds;
    private mIsClipped;
    mIsCached: boolean;
    private mBakeInvertedMatrix;
    preRender(driver: any, session: any): void;
    begin(driver: any, session: any): void;
    upload(driver: any, session: any): void;
    render(driver: any, session: any): void;
    __refreshBitmapCache(): void;
}
import { Renderer } from '../Renderer';
