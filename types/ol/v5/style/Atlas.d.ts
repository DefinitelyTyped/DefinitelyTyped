export interface AtlasBlock {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface AtlasInfo {
    offsetX: number;
    offsetY: number;
    image: HTMLCanvasElement;
}
export default class Atlas {
    constructor(size: number, space: number);
    add(id: string, width: number, height: number, renderCallback: (p0: CanvasRenderingContext2D, p1: number, p2: number) => void, opt_this?: any): AtlasInfo;
    get(id: string): AtlasInfo;
}
