import Particle from "../core/Particle";
import { EasingFunction } from "../ease";
import { JSONObject } from "../initializer/Rate";
import { Vector3D } from "../math";
import Behaviour from "./Behaviour";

/**
 * Behaviour that rotates particles.
 */
export default class Rotate extends Behaviour {
    /**
     * Constructs a Rotate behaviour instance.
     */
    constructor(
        x?: number | Random,
        y?: number | Random,
        z?: number | Random,
        life?: number,
        easing?: EasingFunction,
        isEnabled?: boolean,
    );
    /**
     * Gets the rotation type.
     */
    get rotationType(): string;

    /**
     * Sets the rotation type.
     * @description The rotation type. ENUM of ['same', 'set', 'to', 'add'].
     */
    set rotationType(rotationType);

    /**
     * Resets the behaviour properties.
     */
    reset(x?: number, y?: number, z?: number, life?: number, easing?: EasingFunction): void;
    reset(life?: number, easing?: EasingFunction): void;

    /**
     * Initializes the behaviour on a particle.
     */
    initialize(particle: Particle): void;

    /**
     * Sets the particle's rotation prior to the behaviour being applied.
     *
     * NOTE It's hard to see here, but this is mutating the particle's rotation
     * even though the particle is not being passed in directly.
     *
     * NOTE the else if below will never be reached because the value being passed in
     * will never be of type Vector3D.
     *
     * rotation is randomised
     */
    protected _setRotation(particleRotation: Vector3D, value: string | number): void;

    /**
     * Mutates the particle.rotation property.
     *
     * @see http://stackoverflow.com/questions/21622956/how-to-convert-direction-vector-to-euler-angles
     */
    mutate(particle: Particle, time: number, index: number): void;

    static fromJSON(json: JSONObject): Rotate;
}

export type Random = "random";
