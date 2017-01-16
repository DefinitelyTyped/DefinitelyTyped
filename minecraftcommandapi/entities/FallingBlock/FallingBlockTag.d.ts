import { IEntityTag, EntityTag } from '../../core';
import { IFallingBlockTagData } from './';
/**
 * @name IFallingBlockTag
 * @description
 * The wrapper around FallingBlockTagData, which provides an easier
 * way to write data to it.
 */
export interface IFallingBlockTag extends IEntityTag {
    /**
     * @name Block
     * @description
     * Determines which block is being summoned when using /summon falling_block.
     */
    Block: String;
    /**
     * @name Time
     * @description
     * Whether or not the block despawns before hitting the ground.
     * If set to 1 the block will fall normally, if set to less than 1 will be set to 0.
     * If set to 0 the block will despawn immediately.
     * Recommended to keep this value as 1. -1 will never despawn.
     */
    Time: Number;
    /**
     * @name DropItem
     * @description
     * Whether or not the block will drop its item form if the block is unable to be placed.
     * If set to 'false' the block will not drop its respective item,
     * if set to 'true' the block will drop its respective item.
     */
    DropItem: Boolean;
}
/**
 * @name FallingBlockTag
 * @description
 * The wrapper around FallingBlockTagData, which provides an easier
 * way to write data to it.
 */
export declare class FallingBlockTag extends EntityTag implements IFallingBlockTag {
    protected data: IFallingBlockTagData;
    /**
     * @name Block
     * @description
     * Determines which block is being summoned when using /summon falling_block.
     */
    /**
     * @name Block
     * @description
     * Determines which block is being summoned when using /summon falling_block.
     * @param {String} value The block id, which should get displayed as falling block
     */
    Block: String;
    /**
     * /**
     * @name Time
     * @description
     *  Whether or not the block despawns before hitting the ground.
     * If set to 1 the block will fall normally, if set to less than 1 will be set to 0.
     * If set to 0 the block will despawn immediately.
     * Recommended to keep this value as 1. -1 will never despawn.
     */
    /**
     * @name Time
     * @description
     *  Whether or not the block despawns before hitting the ground.
     * If set to 1 the block will fall normally, if set to less than 1 will be set to 0.
     * If set to 0 the block will despawn immediately.
     * Recommended to keep this value as 1. -1 will never despawn.
     * Must be between -1 and 127
     * @param {Number} value Whether or not the block despawns before hitting the ground. Must be between -1 and 127
     */
    Time: Number;
    /**
     * @name DropItem
     * @description
     * If set to 'false' the block will not drop its respective item,
     * if set to 'true' the block will drop its respective item.
     * The respective item can be set using 'Block'
     */
    /**
     * @name DropItem
     * @description
     * If set to 'false' the block will not drop its respective item,
     * if set to 'true' the block will drop its respective item.
     * The respective item can be set using 'Block'
     * @param {Boolean} value If the fallingblock should drop its respective item
     */
    DropItem: Boolean;
    /**
     * @name Data
     * @description
     * The data of the falling block, which can be converted to the JSON string,
     * which can be processed by Minecraft.
     */
    readonly Data: IFallingBlockTagData;
}
