import { Three } from "../../../../core/three";
/**
 * Simple class that stores the particle's "target" or "next" state.
 */
export class Target {
    constructor(THREE: Three);

    position: THREE.Vector3;

    size: number;

    color: THREE.Color;

    alpha: number;

    texture: THREE.Texture | null;

    index: number;

    reset(): void;
}
