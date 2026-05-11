export class CanvasDriver extends VideoNullDriver {
    private mCtx;
    getRenderer(type: any, owner: any): any;
    render(gameObject: any, renderTexture?: any, customTransform?: any): void;
    renderObject(child: GameObject, session: RenderSession, parentRenderer: Renderer): void;
    private __createCanvas;
    drawTexture(texture: any): void;
    drawTextureWithOffset(texture: any, ox: any, oy: any): void;
    beginClip(clipRect: any, px: any, py: any): void;
    setTransform(transform: any): void;
    setGlobalAlpha(value: any): void;
    setGlobalBlendMode(blendMode: any): void;
    getTextureFromCanvas(canvas: any): Texture;
    get context(): CanvasRenderingContext2D;
}
import { GameObject } from "../../core/GameObject";
import { Texture } from "../../textures/Texture";
import { Renderer } from "../Renderer";
import { RenderSession } from "../RenderSession";
import { VideoNullDriver } from "../VideoNullDriver";
