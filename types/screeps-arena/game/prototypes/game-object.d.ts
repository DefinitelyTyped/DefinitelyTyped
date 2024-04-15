declare module "game/prototypes" {
    import { FindPathOpts, PathStep } from "game/path-finder";
    export interface RoomObjectJSON {
        id: number;
        x: number;
        y: number;
    }
    export interface GameObject extends RoomPosition {
        /**
         * A unique object identificator.
         * You can use {@link getObjectById} method to retrieve an object instance by its id.
         */
        id: Id<this>;

        // constructor(id: any);
        /**
         * Returns true if this object is live in the game at the moment. Check this property to verify cached or newly created object instances.
         */
        exists: boolean;

        /**
         * Get linear range to another position. pos may be any object containing x and y properties.
         */
        getRangeTo(pos: RoomPosition): number;

        /**
         * Returns the path from this object to another position. pos can be any object containing x and y properties. See /game/utils::findPath for details.
         */
        findPathTo(pos: RoomPosition, opts?: FindPathOpts): PathStep[];

        /**
         * Find all positions from the given positions array within the specified linear range.
         */
        findInRange<T extends RoomPosition>(positions: T[], range: number): T[];

        /**
         * Find a position with the shortest linear distance from the given position, or null otherwise.
         */
        findClosestByRange<T extends RoomPosition>(positions: T[]): T;

        /**
         * Find a position with the shortest path from the given position, or null otherwise.
         * @param opts object containing additional options:
         * ignore: array (objects which should be treated as obstacles during the search)
         * Any options supported by searchPath method
         */
        findClosestByPath<T extends RoomPosition>(
            positions: T[],
            opts?: FindPathOpts,
        ): T;

        toJSON(): RoomObjectJSON;
    }
}
