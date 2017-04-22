import { Mob, IMob } from '../../core';
import { IZombieTag } from './';
/**
 * @name IZombie
 * @description
 * Zombies are common, undead hostile mobs that come in many variants.
 */
export interface IZombie extends IMob {
}
/**
 * @name Zombie
 * @description
 * Zombies are common, undead hostile mobs that come in many variants.
 */
export declare class Zombie extends Mob implements IZombie {
    /**
     * @description
     * Initializes the Zombie
     */
    constructor();
    /**
     * Tags which modify the entity with your given values.
     */
    readonly Tag: IZombieTag;
}
