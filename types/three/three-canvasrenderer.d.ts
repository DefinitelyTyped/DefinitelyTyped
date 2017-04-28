import {
    Camera,
    Color,
    Material,
    MaterialParameters,
    Renderer,
    Scene
} from "./three-core";

export interface SpriteCanvasMaterialParameters extends MaterialParameters {
    color?: number;
    program?: (context: CanvasRenderingContext2D, color: Color) => void;
}

export class SpriteCanvasMaterial extends Material {
    constructor(parameters?: SpriteCanvasMaterialParameters);

    color: Color;

    program(context: CanvasRenderingContext2D, color: Color): void;
}

export interface CanvasRendererParameters {
    canvas?: HTMLCanvasElement;
    devicePixelRatio?: number;
    alpha?: boolean;
}

export class CanvasRenderer implements Renderer {
    constructor(parameters?: CanvasRendererParameters);

    domElement: HTMLCanvasElement;
    autoClear: boolean;
    sortObjects: boolean;
    sortElements: boolean;
    info: {render: {vertices: number; faces: number;};};

    supportsVertexTextures(): void;

    setFaceCulling(): void;

    getPixelRatio(): number;

    setPixelRatio(value: number): void;

    setSize(width: number, height: number, updateStyle?: boolean): void;

    setViewport(x: number, y: number, width: number, height: number): void;

    setScissor(): void;

    enableScissorTest(): void;

    setClearColor(color: Color | string | number, opacity?: number): void;

    // setClearColor(color: string, opacity?: number): void;
    // setClearColor(color: number, opacity?: number): void;

    setClearColorHex(hex: number, alpha?: number): void;

    getClearColor(): Color;

    getClearAlpha(): number;

    getMaxAnisotropy(): number;

    clear(): void;

    clearColor(): void;

    clearDepth(): void;

    clearStencil(): void;

    render(scene: Scene, camera: Camera): void;
}
