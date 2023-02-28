export class VideoNullDriver {
    constructor(containerElement: HTMLElement, width: number, height: number);
    protected mContainerElement: HTMLElement;
    protected mClientWidth: number;
    protected mClientHeight: number;
    protected mTransform: Matrix;
    protected mIdentityMatrix: Matrix;
    protected mActiveSession: RenderSession;
    protected mSessions: RenderSession[];
    protected mLastRenderTexture: any;
    protected mSnapToPixels: boolean;
    protected mDevicePixelRatio: number;
    protected mGlobalBlendMode: BlendMode | null;
    protected mGlobalAlpha: number;
    protected mStageRenderer: Renderer;
    protected mRendererMap: {
        [x: string]: new () => Renderer;
    };
    render(gameObject: GameObject, renderTexture?: CanvasRenderTexture, customTransform?: Matrix): void;
    getRenderer(type: string, owner: GameObject): Renderer;
    private __saveSession;
    private __restoreSession;
    protected __collectParentRenderables(
        session: RenderSession,
        gameObject: GameObject,
        parentRenderer: Renderer,
    ): void;
    protected beginClip(clipRect: Rectangle, px: number, py: number): void;
    protected endClip(): void;
    protected __onResize(msg: Message, rect: Rectangle): void;
    protected start(): void;
    protected beginFrame(): void;
    protected endFrame(): void;
    getTextureFromCanvas(canvas: HTMLCanvasElement): Texture;
    setTransform(m: Matrix): void;
    setSnapToPixels(value: boolean): void;
    protected getGlobalAlpha(): number;
    setGlobalAlpha(value: number): void;
    getGlobalBlendMode(): BlendMode | null;
    setGlobalBlendMode(value: BlendMode | null): void;
    drawTexture(texture: Texture): void;
    drawTextureWithOffset(texture: Texture, ox: number, oy: number): void;
    protected clear(): void;
    dispose(): void;
    get context(): any;
    get renderScaleFactor(): number;
}
export namespace VideoNullDriver {
    const sessionPool: ObjectPool;
}
import { Matrix } from '../geom/Matrix';
import { RenderSession } from './RenderSession';
import { BlendMode } from './BlendMode';
import { Renderer } from './Renderer';
import { ObjectPool } from '../utils/ObjectPool';
import { GameObject } from '../core/GameObject';
import { Texture } from '../textures/Texture';
import { Rectangle } from '../geom/Rectangle';
import { Message } from '../messages/Message';
import { CanvasRenderTexture } from '../textures/CanvasRenderTexture';
