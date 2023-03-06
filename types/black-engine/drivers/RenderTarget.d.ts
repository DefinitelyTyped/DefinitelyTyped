export class RenderTarget {
    constructor(width: number, height: number);
    private mWidth;
    private mHeight;
    resize(width: number, height: number): void;
    clear(): void;
    set width(arg: number);
    get width(): number;
    set height(arg: number);
    get height(): number;
}
