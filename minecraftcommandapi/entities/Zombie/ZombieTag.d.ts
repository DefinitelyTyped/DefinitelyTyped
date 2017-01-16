import { MobTag, IMobTag } from '../../core';
import { IZombieTagData } from './';
/**
 * @name IZombieTag
 * @description
 * The wrapper around ZombieTagData, which provides an easier
 * way to write data to it.
 */
export interface IZombieTag extends IMobTag {
    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     */
    CanBreakDoors: Boolean;
}
/**
 * @name ZombieTag
 * @description
 * The wrapper around ZombieTagData, which provides an easier
 * way to write data to it.
 */
export declare class ZombieTag extends MobTag implements IZombieTag {
    protected data: IZombieTagData;
    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     * @returns {Boolean} If the zombie can break doors
     */
    /**
     * @name CanBreakDoors
     * @description
     * If the zombie can break doors
     * @param {Boolean} value If the zombie can break doors
     */
    CanBreakDoors: Boolean;
    /**
    * @name Data
    * @description
    * The data of the zombie, which can be converted to the JSON string,
    * which can be processed by Minecraft.
    */
    readonly Data: IZombieTagData;
}
