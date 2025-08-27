import { GameEntity } from "../core/GameEntity";
import { AABB } from "../math/AABB.js";

/**
 * Class for representing a single partition in context of cell-space partitioning.
 */
export class Cell {
    /**
     * The bounding volume of the cell.
     */
    aabb: AABB;

    /**
     * The list of entries which belong to this cell.
     */
    readonly entries: GameEntity[];

    /**
     * Constructs a new cell with the given values.
     *
     * @param [aabb] - The bounding volume of the cell.
     */
    constructor(aabb?: AABB);

    /**
     * Adds an entry to this cell.
     */
    add(entry: GameEntity): this;

    /**
     * Removes an entry from this cell.
     */
    remove(entry: GameEntity): this;

    /**
     * Removes all entries from this cell.
     */
    makeEmpty(): this;

    /**
     * Returns true if this cell is empty.
     */
    empty(): boolean;

    /**
     * Returns true if the given AABB intersects the internal bounding volume of this cell.
     */
    intersects(aabb: AABB): boolean;

    /**
     * Transforms this instance into a JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;

    /**
     * Restores UUIDs with references to GameEntity objects.
     *
     * @param entities - Maps game entities to UUIDs.
     */
    resolveReferences(entities: Map<string, GameEntity>): this;
}
