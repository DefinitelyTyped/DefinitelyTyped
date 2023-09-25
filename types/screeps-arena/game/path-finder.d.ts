declare module "game/path-finder" {
    import { _Constructor, RoomPosition } from "game/prototypes";
    export function searchPath(
        origin: RoomPosition,
        goal:
            | RoomPosition
            | { pos: RoomPosition; range: number }
            | Array<RoomPosition | { pos: RoomPosition; range: number }>,
        opts?: FindPathOpts,
    ): FindPathResult;

    export interface CostMatrix {
        // /**
        //  * Creates a new CostMatrix containing 0's for all positions.
        //  */
        // new (): CostMatrix;

        _bits: Uint8Array;
        /**
         * Set the cost of a position in this CostMatrix.
         * @param x X position in the room.
         * @param y Y position in the room.
         * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
         */
        set(x: number, y: number, cost: number): undefined;

        /**
         * Get the cost of a position in this CostMatrix.
         * @param x X position in the room.
         * @param y Y position in the room.
         */
        get(x: number, y: number): number;
        /**
         * Copy this CostMatrix into a new CostMatrix with the same data.
         */
        clone(): CostMatrix;
        /**
         * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
         */
        serialize(): number[];

        /**
         * Static method which deserializes a new CostMatrix using the return value of serialize.
         * @param val Whatever serialize returned
         */
        deserialize(val: number[]): CostMatrix;
    }

    interface CostMatrixConstructor extends _Constructor<CostMatrix>, CostMatrix {}

    export const CostMatrix: CostMatrixConstructor;

    export interface FindPathOpts {
        // // /**
        // //  * Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default
        // //  * value is false.
        // //  */
        // // ignoreCreeps?: boolean;

        // // /**
        // //  * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when
        // //  * you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square,
        // //  * it automatically attacks the structure. The default value is false.
        // //  */
        // // ignoreDestructibleStructures?: boolean;

        // // /**
        // //  * Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the
        // //  * new PathFinder is enabled.
        // //  */
        // // ignoreRoads?: boolean;

        // // /**
        // //  * You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName
        // //  * and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback,
        // //  * it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
        // //  *
        // //  * @param roomName The name of the room.
        // //  * @param costMatrix The current CostMatrix
        // //  * @returns The new CostMatrix to use
        // //  */
        // // costCallback?(roomName: string, costMatrix: CostMatrix): void | CostMatrix;

        // // /**
        // //  * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option
        // //  * cannot be used when the new PathFinder is enabled (use costCallback option instead).
        // //  */
        // // ignore?: any[] | RoomPosition[];

        /**
         * (Instead of searching for a path to the goals this will search for a path away from the goals.
         * The cheapest path that is out of range of every goal will be returned.
         * The default is false)
         */
        flee?: boolean | undefined;

        /**
         * The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU.
         * The default value is 2000.
         */
        maxOps?: number | undefined;

        /**
         * (The maximum allowed cost of the path returned. The default is Infinity.)
         */
        maxCost?: number | undefined;

        /**
         * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying
         * A* algorithm mechanics! The default value is 1.2.
         */
        heuristicWeight?: number | undefined;

        // // /**
        // //  * If true, the result path will be serialized using Room.serializePath. The default is false.
        // //  */
        // // serialize?: boolean;

        /**
         * Path to within (range) tiles of target tile. The default is to path to the tile that the target is on (0).
         */
        range?: number | undefined;

        /**
         * Cost for walking on plain positions. The default is 1.
         */
        plainCost?: number | undefined;

        /**
         * Cost for walking on swamp positions. The default is 5.
         */
        swampCost?: number | undefined;

        /**
         * CostMatrix (Container for custom navigation cost data)
         */
        costMatrix?: CostMatrix | undefined;
    }

    export interface MoveToOpts extends FindPathOpts {
        // // /**
        // //  * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly
        // //  * slower creep reaction behavior. The path is stored into the creep's memory to the `_move` property. The `reusePath` value defines
        // //  * the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease
        // //  * to make the movement more consistent. Set to 0 if you want to disable path reusing.
        // //  */
        // // reusePath?: number;

        // // /**
        // //  * If `reusePath` is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
        // //  * `Room.serializePath`. The default value is true.
        // //  */
        // // serializeMemory?: boolean;

        // // /**
        // //  * If this option is set to true, `moveTo` method will return `ERR_NOT_FOUND` if there is no memorized path to reuse. This can
        // //  * significantly save CPU time in some cases. The default value is false.
        // //  */
        // // noPathFinding?: boolean;

        // // /**
        // //  * Draw a line along the creep’s path using `RoomVisual.poly`. You can provide either an empty object or custom style parameters.
        // //  */
        // // visualizePathStyle?: PolyStyle;

        /**
         * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot
         * be used when the new PathFinder is enabled (use costCallback option instead).
         */
        ignore?: any[] | RoomPosition[] | undefined;
    }

    export interface FindPathResult {
        /**
         * The path found as an array of objects containing x and y properties
         */
        path: PathStep[];

        /**
         * Total number of operations performed before this path was calculated
         */
        ops: number;

        /**
         * The total cost of the path as derived from `plainCost`, `swampCost`, and given `CostMatrix` instance
         */
        cost: number;

        /**
         * If the pathfinder fails to find a complete path, this will be true
         */
        incomplete: boolean;
    }
    export interface PathStep {
        x: number;
        // dx: number;
        y: number;
        // dy: number;
        // direction: DirectionConstant;
    }
}
