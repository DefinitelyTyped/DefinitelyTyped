export class RenderTargetCanvas extends RenderTarget {
    private mCanvas;
    private mCtx;
    resize(width: any, height: any): void;
    get native(): HTMLCanvasElement;
    get context(): CanvasRenderingContext2D;
}
import { RenderTarget } from '../RenderTarget';
