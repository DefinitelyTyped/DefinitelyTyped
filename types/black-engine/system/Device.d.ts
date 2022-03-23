export class Device {
    private mPixelRatioCache;
    get os(): string;
    get isTouch(): boolean;
    get isMobile(): boolean;
    get pixelRatio(): number;
    get webAudioSupported(): boolean;
    getDevicePixelRatio(): number;
}
