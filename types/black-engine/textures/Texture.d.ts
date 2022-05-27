export class Texture {
    static getScaleFactorFromName(name: string): number;
    static removeScaleFactorFromName(name: string): string;
    static fromBase64String(string: string): Texture;
    static fromCanvasAsImage(canvas: Element, type?: string, quality?: number): Texture;
    static fromCanvas(canvas: HTMLCanvasElement): Texture | null;
    constructor(
        nativeElement: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        region?: Rectangle,
        untrimmedRegion?: Rectangle,
        scale?: number,
        registrationPoint?: Vector,
        slice9borders?: Rectangle,
    );
    mId: number;
    private mNative;
    private mValid;
    private mRegion;
    private mUntrimmedRegion;
    private mNativeWidth;
    private mNativeHeight;
    private mDisplayWidth;
    private mDisplayHeight;
    private mRenderWidth;
    private mRenderHeight;
    private mScale;
    private mRegistrationPoint;
    private mSlice9borders;
    set(
        nativeElement: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        region?: Rectangle,
        untrimmedRegion?: Rectangle,
        scale?: number,
    ): void;
    get width(): number;
    get height(): number;
    get scale(): number;
    get region(): Rectangle;
    get untrimmedRegion(): Rectangle;
    get nativeWidth(): number;
    get nativeHeight(): number;
    get displayWidth(): number;
    get displayHeight(): number;
    get renderWidth(): number;
    get renderHeight(): number;
    get isValid(): boolean;
    get registrationPoint(): any;
    get slice9borders(): Rectangle;
    get native(): HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    get id(): number;
}
import { Vector } from '../geom/Vector';
import { Rectangle } from '../geom/Rectangle';
