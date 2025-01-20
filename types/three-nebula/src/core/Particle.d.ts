import { DEFAULT_PARENT, DEFAULT_USE_ALPHA, DEFAULT_USE_COLOR } from "./constants";

import Behaviour from "../behaviour/Behaviour";
import { EasingFunction } from "../ease";
import { Emitter } from "../emitter";
import { Vector3D } from "../math";
import { CORE_TYPE_PARTICLE } from "./types";

export default class Particle {
    /**
     * Constructs a Particle instance.
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
 */
export interface Properties {
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
