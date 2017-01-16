import { Mob, IMob, IMobTag } from '../../core';
/**
 * @name ElderGuardian
 * @description
 * The elder guardian is a hostile mob which only spawns underwater in ocean monuments.
 * It is a stronger variant of the guardian.
 */
export interface IElderGuardian extends IMob {
}
/**
 * @name ElderGuardian
 * @description
 * The elder guardian is a hostile mob which only spawns underwater in ocean monuments.
 * It is a stronger variant of the guardian.
 */
export declare class ElderGuardian extends Mob implements IElderGuardian {
    /**
     * @description
     * Initializes the Zombie
     */
    constructor();
    /**
     * Tags which modify the entity with your given values.
     */
    readonly Tag: IMobTag;
}
