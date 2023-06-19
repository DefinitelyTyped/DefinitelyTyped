import { Color, Texture, Vector3 } from 'three';
/**
 * Simple class that stores the particle's "target" or "next" state.
 *
 */
export class Target {
    /**
     * @param THREE The THREE object.
     */
    constructor(THREE: Three);
    position: Vector3;
    size: number;
    color: Color;
    alpha: number;
    texture: Texture | null;
    index: number;
    reset(): void;
}

type Three = object & {
    Vector3: typeof Vector3;
    Color: typeof Color;
    Texture: typeof Texture;
};
