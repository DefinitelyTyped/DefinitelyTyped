/**
 * @name IEntityTagData
 * @description
 * This interface represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
export interface IEntityTagData {
    /**
     * @name UUIDLeast
     * @description
     * The least significant bits of this entity's Universally Unique IDentifier.
     */
    UUIDLeast: String;
    /**
     * @name UUIDMost
     * @description
     * The most significant bits of this entity's Universally Unique IDentifier. This is joined with UUIDLeast to form this entity's unique ID
     */
    UUIDMost: String;
    /**
     * @name Invulnerable
     * @description
     * Makes mobs invulnerable
     */
    Invulnerable: Boolean;
    /**
     * @name NoAI
     * @description
     * If true, the mob's AI will be disabled. The mob will not attempt to move and cannot move, to the extent of not falling when normally able.
     */
    NoAI: Boolean;
    /**
     * @name Passengers
     * @description
     * Sets which entities are riding on the base entity. Similar to Riding, except in 1.9+. Allows multiple entities to ride one base entity.
     */
    Passengers: EntityTagData[];
    /**
     * @name id
     * @description
     * The id of the entity, set by Minecraft
     */
    id: String;
    /**
     * @name Fire
     * @description
     * Determines how many ticks a mob is on fire.
     */
    Fire: Number;
    /**
     * @name Silent
     * @description
     * Makes mobs silent.
     */
    Silent: Boolean;
    /**
     * @name NoGravity
     * @description
     * Makes mobs unaffected by gravity.
     */
    NoGravity: Boolean;
}
/**
 * @name EntityTagData
 * @description
 * This class represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
export declare class EntityTagData implements IEntityTagData {
    /**
     * @name UUIDLeast
     * @description
     * The least significant bits of this entity's Universally Unique IDentifier.
     */
    UUIDLeast: String;
    /**
     * @name UUIDMost
     * @description
     * The most significant bits of this entity's Universally Unique IDentifier. This is joined with UUIDLeast to form this entity's unique ID
     */
    UUIDMost: String;
    /**
     * @name Invulnerable
     * @description
     * Makes mobs invulnerable
     */
    Invulnerable: Boolean;
    /**
     * @name NoAI
     * @description
     * If true, the mob's AI will be disabled. The mob will not attempt to move and cannot move, to the extent of not falling when normally able.
     */
    NoAI: Boolean;
    /**
     * @name Passengers
     * @description
     * Sets which entities are riding on the base entity. Similar to Riding, except in 1.9+. Allows multiple entities to ride one base entity.
     */
    Passengers: EntityTagData[];
    /**
     * @name id
     * @description
     * The id of the entity, set by Minecraft
     */
    id: String;
    /**
     * 	Determines how many ticks a mob is on fire.
     */
    Fire: Number;
    /**
     * @name Silent
     * @description
     * Makes entity silent.
     */
    Silent: Boolean;
    /**
     * @name NoGravity
     * @description
     * Makes entity unaffected by gravity.
     */
    NoGravity: Boolean;
}
