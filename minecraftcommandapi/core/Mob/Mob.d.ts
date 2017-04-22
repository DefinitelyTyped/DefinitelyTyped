import { Entity, IMobTag, IEntity, IEntityTag } from '../';
/**
 * @name IMob
 * @description
 * Mobs are living, moving game entities. The term "mob" is short for "mobile".
 */
export interface IMob extends IEntity {
}
/**
 * @name Mob
 * @description
 * Mobs are living, moving game entities. The term "mob" is short for "mobile".
 */
export declare class Mob extends Entity implements IMob {
    /**
     * @param {String} id The id of the entity
     */
    constructor(id: String, entityTag?: IEntityTag);
    /**
     * @name Tag
     * @description
     * Tags which modify the entity with your given values.
     */
    readonly Tag: IMobTag;
}
