import { Particle } from "../core";
import { Three } from "../core/three";
import MeshRenderer from "./MeshRenderer";

export default class SpriteRenderer extends MeshRenderer {
    constructor(container: THREE.Scene, THREE: Three);
    /**
     * @description The class type.
     */
    type: string;
    _body: THREE.Sprite;
    scale(particle: Particle): void;
}
