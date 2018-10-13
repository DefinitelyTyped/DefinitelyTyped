import {Mesh, Camera, Scene, WebGLRenderer, Blending, Vector3, Color, Shader, Texture, BufferGeometry} from "./three-core";

export class LensFlare extends Mesh {

    constructor();

    type: 'LensFlare';
    frustumCulled: false;
    renderOrder: number;

    addElement(element: LensFlareElement): this;
    onBeforeRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera) => void;
    dispose(): void;

    isLensflare: true;

}

export class LensFlareElement {
    constructor(texture: Texture, size?: number, distance?: number, color?: Color);
    texture: Texture;
    size: number;
    distance: number;
    color: Color;
    static Shader: Shader;
    static Geometry: BufferGeometry
}
