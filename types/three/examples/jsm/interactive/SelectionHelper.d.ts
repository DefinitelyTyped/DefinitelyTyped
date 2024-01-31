import { Vector2, WebGLRenderer } from "../../../src/Three.js";

export class SelectionHelper {
    constructor(renderer: WebGLRenderer, cssClassName: string);
    element: HTMLElement;
    isDown: boolean;
    enabled: boolean;
    pointBottomRight: Vector2;
    pointTopLeft: Vector2;
    renderer: WebGLRenderer;
    startPoint: Vector2;

    onSelectStart(event: Event): void;
    onSelectMove(event: Event): void;
    onSelectOver(event: Event): void;
    dispose(): void;
}
