import { Particle } from '../core';
import { Three } from '../core/three';
import MeshRenderer from './MeshRenderer';
/**
 * @requires THREE - { Mesh, BoxGeometry, MeshLambertMaterial, Sprite, SpriteMaterial }
 */
export default class SpriteRenderer extends MeshRenderer {
    constructor(container: THREE.Scene, THREE: Three);
    /**
     * @description The class type.
     */
    type: string;
    _body: THREE.Sprite;
    scale(particle: Particle): void;
}
