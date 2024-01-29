import { Camera } from '../../cameras/Camera.js';
import { Material } from '../../materials/Material.js';
import { Plane } from '../../math/Plane.js';
import { WebGLProperties } from './WebGLProperties.js';

export class WebGLClipping {
    constructor(properties: WebGLProperties);

    uniform: { value: any; needsUpdate: boolean };

    /**
     * @default 0
     */
    numPlanes: number;

    /**
     * @default 0
     */
    numIntersection: number;

    init(planes: any[], enableLocalClipping: boolean): boolean;
    beginShadows(): void;
    endShadows(): void;
    setGlobalState(planes: Plane[], camera: Camera): void;
    setState(material: Material, camera: Camera, useCache: boolean): void;
}
