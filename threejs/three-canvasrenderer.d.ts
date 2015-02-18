// Type definitions for three.js (CanvasRenderer.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/renderers/CanvasRenderer.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./three.d.ts" />

declare module THREE {
    export interface SpriteCanvasMaterialParameters extends MaterialParameters{
        color?: number;

    }

    export class SpriteCanvasMaterial extends Material {
        constructor(parameters?: SpriteCanvasMaterialParameters);

        color: Color;

        program(context: any, color: Color): void;
        clone(): SpriteCanvasMaterial;
    }

    export interface CanvasRendererParameters {
        canvas?: HTMLCanvasElement;
        devicePixelRatio?: number;
    }

    export class CanvasRenderer implements Renderer {
        constructor(parameters?: CanvasRendererParameters);

        domElement: HTMLCanvasElement;
        autoClear: boolean;
        sortObjects: boolean;
        sortElements: boolean;
        info: { render: { vertices: number; faces: number; }; };

        supportsVertexTextures(): void;
        setFaceCulling(): void;
        getPixelRatio(): number;
        setPixelRatio(value: number): void;
        setSize(width: number, height: number, updateStyle?: boolean): void;
        setViewport(x: number, y: number, width: number, height: number): void;
        setScissor(): void;
        enableScissorTest(): void;
        setClearColor(color: Color, opacity?: number): void;
        setClearColor(color: string, opacity?: number): void;
        setClearColor(color: number, opacity?: number): void;
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
}