export default class Display {
    constructor(defaults?: NvDisplayDefaults);
    get_target(): HTMLCanvasElement;
    set_target(target: HTMLCanvasElement): void;
    get_context(): CanvasRenderingContext2D;
    get_logo(): NvLogo;
    set_logo(logo: NvLogo): void;
    get_scale(): number;
    set_scale(scale: number): void;
    get_viewport(): boolean;
    set_viewport(viewport: boolean): void;
    get_width(): number;
    get_height(): number;
    get_render_mode(): string;
    get_prefer_js(): string | boolean;
    set_prefer_js(preferJs: string): void;
    get_cursor_uri(): any;
    set_cursor_uri(cursorUri: any): void;
    get_onFlush(): () => void;
    set_onFlush(handler: () => void): void;
    viewportChangePos(deltaX: number, deltaY: number): void;
    viewportChangeSize(width?: number, height?: number): void;
    absX(x: number): number;
    absY(y: number): number;
    resize(width: number, height: number): void;
    flip(from_queue?: boolean): void;
    clear(): void;
    pending(): boolean;
    flush(): void;
    fillRect(x: number, y: number, width: number, height: number, color: NvColor, from_queue?: boolean): void;
    copyImage(old_x: number, old_y: number, new_x: number, new_y: number, width: number, height: number, from_queue?: boolean): void;
    imageRect(x: number, y: number, mime: string, arr: number[]): void;
    startTile(x: number, y: number, width: number, height: number, color: NvColor): void;
    subTile(x: number, y: number, width: number, height: number, color: NvColor): void;
    finishTile(): void;
    blitImage(x: number, y: number, width: number, height: number, arr: number[], offset: number, from_queue?: boolean): void;
    blitRgbImage(x: number, y: number, width: number, height: number, arr: number[], offset: number, from_queue?: boolean): void;
    blitRgbxImage(x: number, y: number, width: number, height: number, arr: number[], offset: number, from_queue?: boolean): void;
    drawImage(img: HTMLImageElement, x: number, y: number): void;
    changeCursor(pixels: number[], mask: number[], hotx: number, hoty: number, width: number, height: number): void;
    defaultCursor(): void;
    disableLocalCursor(): void;
    clippingDisplay(): boolean;
    autoscale(containerWidth: number, containerHeight: number, downscaleOnly: boolean): void;
}

export interface NvDisplayDefaults {
    target?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D;
    logo?: NvLogo;
    scale?: number;
    viewport?: boolean;
    width?: number;
    height?: number;
    render_mode?: string;
    prefer_js?: string;
    cursor_uri?: any;
    onFlush?(): void;
}

export interface NvLogo {
    width: number;
    height: number;
    type: string;
    data: number[];
}

export type NvColor = [number, number, number];
