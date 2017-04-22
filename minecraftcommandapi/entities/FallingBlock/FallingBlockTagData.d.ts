import { IEntityTagData, EntityTagData } from '../../core';
/**
 * @name IFallingBlockTagData
 * @description
 * This interface represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
export interface IFallingBlockTagData extends IEntityTagData {
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
 * @name FallingBlockTagData
 * @description
 * This class represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
export declare class FallingBlockTagData extends EntityTagData implements IFallingBlockTagData {
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
