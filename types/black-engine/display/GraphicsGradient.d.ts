export class GraphicsGradient {
    stops: any;
    native: CanvasGradient | null;
    addColorStop(offset: number, color: string): void;
}
