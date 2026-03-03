import { Camera, Object3D, Vector3, WebGLRenderer } from "three";

declare class ViewHelper extends Object3D {
    readonly isViewHelper: true;

    animating: boolean;
    center: Vector3;
    location: { top: number | null; right: number; bottom: number; left: number | null };

    render: (renderer: WebGLRenderer) => void;
    handleClick: (event: MouseEvent) => boolean;
    setLabels: (labelX?: string, labelY?: string, labelZ?: string) => void;
    setLabelStyle: (font?: string, color?: string, radius?: number) => void;
    update: (delta: number) => void;
    dispose: () => void;

    constructor(camera: Camera, domElement: HTMLElement);
}

export { ViewHelper };
