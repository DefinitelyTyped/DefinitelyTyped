import { IEntity, ICommand, Position } from '../../core';
/**
 * @name ISummonCommand
 * @description
 * Summons an entity (mobs, projectiles, items, vehicles, etc.).
 */
export interface ISummonCommand extends ICommand {
}
/**
 * @name SummonCommand
 * @description
 * Summons an entity (mobs, projectiles, items, vehicles, etc.).
 */
export declare class SummonCommand implements ISummonCommand {
    private entity;
    private position;
    /**
     * @description
     * Summons an entity (mobs, projectiles, items, vehicles, etc.).
     * @param {IEntity} entity The entity which should get summo2ned
     */
    constructor(entity: IEntity, position?: Position);
    /**
     * @name Command
     * @description
     * Generates the summon command and returns it as a string.
     * @returns {String} The summon command, which is ready to import into Minecraft.
     */
    readonly Command: String;
}
