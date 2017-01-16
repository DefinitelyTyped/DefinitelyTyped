import { IEntityTag, ICommand } from '../';
/**
 * @name IEntity
 * @description
 * Entities encompass all dynamic, moving objects throughout the Minecraft world.
 */
export interface IEntity extends ICommand {
    /**
     * @name Id
     * @description
     * Returns the Id of the entity
     */
    Id: String;
    /**
     * @name Tag
     * @description
     * Returns the Tags of the Entity
     */
    Tag: IEntityTag;
}
/**
 * @name Entity
 * @description
 * Entities encompass all dynamic, moving objects throughout the Minecraft world.
 */
export declare class Entity implements IEntity {
    private id;
    protected entityTag: IEntityTag;
    /**
     * @description
     * Initializes the Entity
     * @param {String} name Identification of the entity, set by Minecraft
     * @param {IEntity} entityTag The tags which should be writeable
     */
    constructor(name: String, entityTag?: IEntityTag);
    /**
     * @name Id
     * @description
     * The name of the entity
     * @returns {String} The id of the entity, set by Minecraft
     */
    readonly Id: String;
    /**
     * @name Tag
     * @description
     * Tags which modify the entity with your given values.
     */
    readonly Tag: IEntityTag;
    /**
     * @name Command
     * @description
     * The command of the entity.
     * Is a JSON object, but provided as string
     * @returns {String} The command as string.
     */
    readonly Command: String;
}
