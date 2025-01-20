export class FontMetrics {
    static set useOffscreenCanvas(arg: boolean);
    static get useOffscreenCanvas(): boolean;
    static get(fontName: string): FontMetrics;
    private constructor();
    private mCanvas;
    private mCtx;
    private mStyle;
    baseline: number;
    bottom: number;
    ascent: number;
    descent: number;
    xHeight: number;
    capHeight: number;
    get capHeightNormalized(): number;
    get xHeightNormalized(): number;
    get ascentNormalized(): number;
    get descentNormalized(): number;
    get baselineNormalized(): number;
    get bottomNormalized(): number;
    private __getTop;
    private __getBottom;
}
