declare module "game/prototypes" {
  export type StructureConstant =
    | STRUCTURE_TOWER
    | STRUCTURE_EXTENSION
    | STRUCTURE_WALL
    | STRUCTURE_CONTAINER
    | STRUCTURE_RAMPART
    | STRUCTURE_SPAWN
    | STRUCTURE_ROAD
    | STRUCTURE_EXTENSION;

  export interface StructureJSON extends RoomObjectJSON {
    hits: number;
    hitsMax: number;
  }
  export interface Structure<T extends StructureConstant = StructureConstant> extends GameObject {
    readonly prototype: Structure;

    /**
     * The current amount of hit points of the structure.
     */
    hits: number;
    /**
     * The total amount of hit points of the structure.
     */
    hitsMax: number;
    // /**
    //  * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
    //  */
    // id: Id<this>;

    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: T;
    // /**
    //  * Destroy this structure immediately.
    //  */
    // destroy(): ScreepsReturnCode;
    // /**
    //  * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
    //  */
    // isActive(): boolean;
    // /**
    //  * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
    //  * @param enabled Whether to enable notification or disable.
    //  */
    // notifyWhenAttacked(enabled: boolean): ScreepsReturnCode;

    toJSON(): StructureJSON;
  }

  export const Structure: _Constructor<Structure>;
}
