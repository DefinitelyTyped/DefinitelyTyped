import { Light, WebGLRenderer } from "three";

export interface Size {
    width: number;
    height: number;
    set: (width: number, height: number) => void;
}

export interface Position {
    x: number;
    y: number;
    set: (x: number, y: number) => void;
}

declare class ShadowMapViewer {
    enabled: boolean;
    size: Size;
    position: Position;
    render: (renderer: WebGLRenderer) => void;
    updateForWindowResize: () => void;
    update: () => void;

    constructor(light: Light);
}

export { ShadowMapViewer };
