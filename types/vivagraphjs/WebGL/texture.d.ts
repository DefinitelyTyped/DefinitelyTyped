export = Texture;
/**
 * Single texture in the webglAtlas.
 */
declare function Texture(size: any): void;
declare class Texture {
    /**
     * Single texture in the webglAtlas.
     */
    constructor(size: any);
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    isDirty: boolean;
}
