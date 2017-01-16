import { Entity, IEntityTagData } from './';
import { IGenerateable } from '../';
/**
 * @name IEntityTag
 * @description
 * The wrapper around EntityTagData, which provides an easier
 * way to write data to it.
 */
export interface IEntityTag extends IGenerateable {
    /**
     * @name UUIDLeast
     * @description
     * The unique identifier of the entity
     */
    UUIDLeast: String;
    /**
     * @name UUIDMost
     * @description
     * The unique identifier of the entity
     */
    UUIDMost: String;
    /**
     * @name Invulnerable
     * @description
     * Makes entities invulnerable
     */
    Invulnerable: Boolean;
    /**
     * @name NoAI
     * @description
     * Makes entity have no AI.
     */
    NoAI: Boolean;
    /**
     * @name Fire
     * @description
     * Determines how many ticks a mob is on fire.
     */
    Fire: Number;
    /**
     * @name AddPassenger
     * @description
     * Sets which entities are riding on the base entity. Similar to Riding, except in 1.9+. Allows multiple entities to ride one base entity.
     * @param {Entity} entity The entity, which should get added as a passenger on top of the entity.
     */
    AddPassenger(entity: Entity): void;
    /**
     * @name NoGravity
     * @description
     * Makes entity unaffected by gravity.
     */
    NoGravity: Boolean;
}
/**
 * @name EntityTag
 * @description
 * The wrapper around EntityTagData, which provides an easier
 * way to write data to it.
 */
export declare class EntityTag implements IEntityTag, IGenerateable {
    protected data: IEntityTagData;
    /**
     * @name UUIDLeast
     * @description
     * Sets the UUIDLeast of the Entity
     * @returns {String} The UUIDLeast of the entity
     */
    /**
     * @name UUIDLeast
     * @description
     * Sets the UUIDLeast of the Entity
     * @param {String} value The UUIDLeast which should get set
     */
    UUIDLeast: String;
    /**
     * @name UUIDMost
     * @description
     * Returns the UUIDMost of the Entity
     * @returns {String} The UUIDMost of the entity
     */
    /**
     * @name UUIDMost
     * @description
     * Sets the UUIDMost of the Entity
     * @param {String} value The UUIDMost which should get set
     */
    UUIDMost: String;
    /**
     * @name Invulnerable
     * @description
     * Makes entities invulnerable
     * @returns {Boolean} If the entity is invulnerable or not.
     */
    /**
     * @name Invulnerable
     * @description
     * Makes entities invulnerable
     * @param {Boolean} value If the entity is invulnerable or not.
     */
    Invulnerable: Boolean;
    /**
     * @name NoAI
     * @description
     * Makes entity have no AI.
     * @returns {Boolean} If the entity has or hasn't AI
     */
    /**
     * @name NoAI
     * @description
     * Makes entity have no AI.
     * @param {Boolean} value If the entity has or hasn't AI
     */
    NoAI: Boolean;
    /**
     * @name AddPassenger
     * @description
     * Adds the given entity as passenger to this entity.
     * @param {Entity} entity The entity, which should get added as passaenger, on top of this entity.
     */
    AddPassenger(entity: Entity): void;
    /**
     * @name Fire
     * @description
     * Determines how many ticks a mob is on fire.
     * @returns {Number} THe amount of time, in Ticks, the mob is on fire. -1, when not on fire.
     */
    /**
     * @name Fire
     * @description
     * Determines how many ticks a mob is on fire.
     * @param {Number} value The amount of ticks the mob is on fire. Must be between -1
     * and 32767. Default -1, when not on fire.
     */
    Fire: Number;
    /**
     * @name NoGravity
     * @description
     * Makes entity unaffected by gravity.
     * @returns {Boolean} Whether the entity is affected by gravity or not.
     */
    /**
     * @name NoGravity
     * @description
     * Makes entity unaffected by gravity.
     * @param {Boolean} value If the entity should be affacted by gravity or not.
     */
    NoGravity: Boolean;
    /**
     * @name Data
     * @description
     * The data of the entity, which can be converted to the JSON string,
     * which can be processed by Minecraft.
     */
    readonly Data: IEntityTagData;
}
