declare function URShift(number: number, bits: number): number;

declare const qrcode: {
    imagedata: any,
    width: number,
    height: number,
    qrCodeSymbol: any,
    debug: boolean,
    maxImgSize: number,
    readonly sizeOfDataLengthInfo: [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]],
    callback: any,

    orderBestPatterns(patterns: Array<AlignmentPattern>): void,

    vidError(error: any): void,
    captureToCanvas(): void,
    setWebcam(videoId: string): void,
    decode(src?: string): void,
    isUrl(s: string): boolean;
    decode_url(s: string): string,
    decode_utf8(s: string): string,
    process(ctx: CanvasRenderingContext2D): string,
    getPixel(x: number, y: number): number,
    binarize(th: number): Array<boolean>,
    getMiddleBrightnessPerArea(image: Array<number>): Array<Array<number>>,
    grayScaleToBitmap(grayScale: Array<number>): Uint8Array,
    grayscale(): Uint8Array
};
