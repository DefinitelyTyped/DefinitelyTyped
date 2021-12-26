import { UI } from "./UI";
import { PageFlip } from "../PageFlip";
import { FlipSetting } from "../Settings";
/**
 * UI for canvas mode
 */
export class CanvasUI extends UI {
    private readonly canvas;
    constructor(inBlock: HTMLElement, app: PageFlip, setting: FlipSetting);
    private resizeCanvas;
    /**
     * Get canvas element
     */
    getCanvas(): HTMLCanvasElement;
    update(): void;
}
