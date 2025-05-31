import { PendingFrame } from "./decoders/h264";

export default class Display {
    constructor(target: HTMLCanvasElement);

    scale: number;
    clipViewport: boolean;
    readonly width: number;
    readonly height: number;

    viewportChangePos(deltaX: number, deltaY: number): void;
    viewportChangeSize(width: number, height: number): void;
    absX(x: number): number;
    absY(y: number): number;
    resize(width: number, height: number): void;
    getImageData(): ImageData;
    toDataURL(type?: string, encoderOptions?: any): string;
    toBlob(callback: (blob: Blob | null) => void, type?: string, quality?: any): void;
    flip(fromQueue?: boolean): void;
    pending(): boolean;
    flush(): Promise<void>;
    fillRect(x: number, y: number, width: number, height: number, color: number[] | Uint8Array, fromQueue?: boolean): void;
    copyImage(oldX: number, oldY: number, newX: number, newY: number, w: number, h: number, fromQueue?: boolean): void;
    imageRect(x: number, y: number, width: number, height: number, mime: string, arr: Uint8Array): void;
    videoFrame(x: number, y: number, width: number, height: number, frame: PendingFrame): void;
    blitImage(x: number, y: number, width: number, height: number, arr: Uint8Array, offset: number, fromQueue?: boolean): void;
    drawImage(img: CanvasImageSource, ...args: number[]): void;
    autoscale(containerWidth: number, containerHeight: number): void;
}
