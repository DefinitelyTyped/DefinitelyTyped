export class GraphicsPattern {
    constructor(image: any, repetition: any);
    image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    repetition: string;
    native: CanvasPattern | null;
    clone(): GraphicsPattern;
}
