export class CanvasRenderTexture extends Texture {
    constructor(width: number, height: number, scale: number);
    renderTarget: RenderTargetCanvas;
    resize(width: number, height: number, scale: number): void;
    __dumpToDocument(): void;
}
import { RenderTargetCanvas } from "../drivers/canvas/RenderTargetCanvas";
import { Texture } from "./Texture";
