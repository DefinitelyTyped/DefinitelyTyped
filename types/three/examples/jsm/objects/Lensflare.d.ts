import { Color, Mesh, Texture } from "three";

declare class Lensflare extends Mesh {
    readonly isLensflare: true;

    constructor();

    addElement: (element: LensflareElement) => void;
    dispose: () => void;
}

declare class LensflareElement {
    texture: Texture;
    size: number;
    distance: number;
    color: Color;

    constructor(texture: Texture, size?: number, distance?: number, color?: Color);
}

export { Lensflare, LensflareElement };
