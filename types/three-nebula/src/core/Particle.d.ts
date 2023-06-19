import { DEFAULT_PARENT, DEFAULT_USE_ALPHA, DEFAULT_USE_COLOR } from './constants';

import Behaviour from '../behaviour/Behaviour';
import { EasingFunction } from '../ease';
import { Emitter } from '../emitter';
import { Vector3D } from '../math';
import { CORE_TYPE_PARTICLE } from './types';

export default class Particle {
    /**
     * Constructs a Particle instance.
     *
     * @param {object} properties - The properties to instantiate the particle with
     * @property {number} properties.life - The particle's life
     * @property {number} properties.age - The particle's age
     * @property {number} properties.energy - The particle's energy loss
     * @property {boolean} properties.dead - Determines if the particle is dead or not
     * @property {boolean} properties.sleep - Determines if the particle is sleeping or not
     * @property {object} properties.target - The particle's target
     * @property {object} properties.body - The particle's body
     * @property {number} properties.mass - The particle's mass
     * @property {number} properties.radius - The particle's radius
     * @property {number} properties.alpha - The particle's alpha
     * @property {number} properties.scale - The particle's scale
     * @property {number} properties.rotation - The particle's rotation
     * @property {string|number} properties.color - The particle's color
     * @property {function} properties.easing - The particle's easing
     * @property {Vector3D} properties.position - The particle's position
     * @property {Vector3D} properties.velocity - The particle's velocity
     * @property {Vector3D} properties.acceleration - The particle's acceleration
     * @property {array} properties.behaviours - The particle's behaviours array
     * @property {object} properties.transform - The particle's transform collection
     * @return void
     */
    constructor(properties: Properties);
    id: string;
    type: string | typeof CORE_TYPE_PARTICLE;
    index: number;
    life: number;
    age: number;
    energy: number;
    dead: boolean;
    sleep: boolean;
    target: object;
    body: object;
    mass: number;
    radius: number;
    alpha: number;
    scale: number;
    rotation: number;
    color: string | number;
    easing: EasingFunction;
    position: Vector3D;
    velocity: Vector3D;
    acceleration: Vector3D;
    behaviours: Behaviour[];
    transform: object;
    parent: Emitter | typeof DEFAULT_PARENT;
    useAlpha: boolean | typeof DEFAULT_USE_ALPHA;
    useColor: boolean | typeof DEFAULT_USE_COLOR;
    force: Vector3D;
    old: Vector3D;
    data: object;
    distanceToCamera: number;
    getDirection(): Vector3D;
    reset(): this;
    update(time: number, index: number): void;
    addBehaviour(behaviour: Behaviour): void;
    addBehaviours(behaviours: Behaviour[]): void;
    removeBehaviour(behaviour: Behaviour): void;
    removeBehaviours(behaviours: Behaviour[]): void;
    removeAllBehaviours(): void;
    destroy(): void;
}

/**
 * Constructs a Particle instance.
 *
 * @param {object} properties - The properties to instantiate the particle with
 * @property {number} properties.life - The particle's life
 * @property {number} properties.age - The particle's age
 * @property {number} properties.energy - The particle's energy loss
 * @property {boolean} properties.dead - Determines if the particle is dead or not
 * @property {boolean} properties.sleep - Determines if the particle is sleeping or not
 * @property {object} properties.target - The particle's target
 * @property {object} properties.body - The particle's body
 * @property {number} properties.mass - The particle's mass
 * @property {number} properties.radius - The particle's radius
 * @property {number} properties.alpha - The particle's alpha
 * @property {number} properties.scale - The particle's scale
 * @property {number} properties.rotation - The particle's rotation
 * @property {string|number} properties.color - The particle's color
 * @property {function} properties.easing - The particle's easing
 * @property {Vector3D} properties.position - The particle's position
 * @property {Vector3D} properties.velocity - The particle's velocity
 * @property {Vector3D} properties.acceleration - The particle's acceleration
 * @property {array} properties.behaviours - The particle's behaviours array
 * @property {object} properties.transform - The particle's transform collection
 */
interface Properties {
    life: number;
    age: number;
    energy: number;
    dead: boolean;
    sleep: boolean;
    target: object;
    body: object;
    mass: number;
    radius: number;
    alpha: number;
    scale: number;
    rotation: number;
    color: string | number;
    easing: (k: number) => number;
    position: Vector3D;
    velocity: Vector3D;
    acceleration: Vector3D;
    behaviours: Behaviour[];
    transform: object;
}
