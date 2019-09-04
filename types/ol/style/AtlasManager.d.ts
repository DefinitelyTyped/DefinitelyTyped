export interface AtlasManagerInfo {
    offsetX: number;
    offsetY: number;
    image: HTMLCanvasElement;
    hitImage: HTMLCanvasElement;
}
export interface Options {
    initialSize?: number;
    maxSize?: number;
    space?: number;
}
export default class AtlasManager {
    constructor(opt_options?: Options);
    add(
        id: string,
        width: number,
        height: number,
        renderCallback: (p0: CanvasRenderingContext2D, p1: number, p2: number) => void,
        opt_renderHitCallback?: () => void,
        opt_this?: any
    ): AtlasManagerInfo;
    getInfo(id: string): AtlasManagerInfo;
}
