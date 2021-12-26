import { Render } from './Render';
import { PageFlip } from '../PageFlip';
import { FlipSetting } from '../Settings';
/**
 * Class responsible for rendering the Canvas book
 */
export class CanvasRender extends Render {
    private readonly canvas;
    private readonly ctx;
    constructor(app: PageFlip, setting: FlipSetting, inCanvas: HTMLCanvasElement);
    getContext(): CanvasRenderingContext2D;
    protected drawFrame(): void;
    private drawBookShadow;
    private drawOuterShadow;
    private drawInnerShadow;
    private clear;
}
