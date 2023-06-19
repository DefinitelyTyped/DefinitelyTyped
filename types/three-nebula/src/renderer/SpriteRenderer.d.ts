import type { Sprite } from 'three';
import { Particle } from '../core';
import MeshRenderer from './MeshRenderer';
/**
 * @requires THREE - { Mesh, BoxGeometry, MeshLambertMaterial, Sprite, SpriteMaterial }
 */
export default class SpriteRenderer extends MeshRenderer {
    constructor(container: Scene, THREE: Three);
    /**
     * @description The class type.
     * @type {string}
     */
    type: string;
    _body: Sprite;
    scale(particle: Particle): void;
}

type Three = typeof import('three');

type Scene = THREE.Scene;
